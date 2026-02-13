import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { imagetools } from "vite-imagetools";

export default defineConfig({
  plugins: [
    react(),
    imagetools({ exclude: "public/**/*" }),
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            if (id.includes("@radix-ui")) return "vendor-radix";
            if (id.includes("@tanstack/react-query")) return "vendor-query";
            if (id.includes("react-dom") || id.includes("wouter")) return "vendor-router";
            if (id.includes("lucide-react")) return "vendor-icons";
            return "vendor";
          }
        },
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
    target: "es2020",
    minify: "esbuild",
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
