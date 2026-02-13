/// <reference types="vite/client" />

interface ImportMetaEnv {
  // Add environment variables here as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// vite-imagetools: image imports with query (?w=...&format=webp&as=img) return { src, srcset?, w, h }
declare module "*png?*" {
  const out: { src: string; srcset?: string; w: number; h: number };
  export default out;
}
declare module "*jpg?*" {
  const out: { src: string; srcset?: string; w: number; h: number };
  export default out;
}