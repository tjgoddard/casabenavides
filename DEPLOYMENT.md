# Casa Benavides Cloudflare Pages Deployment Guide

## The MIME Type Issue Solution

The "application/octet-stream" MIME type error occurs because Cloudflare Pages tries to serve TypeScript source files directly instead of built JavaScript files.

## Solution for Production Deployment

### 1. Build the Project
```bash
npm run build
```

### 2. Update HTML for Production
In the built `dist/public/index.html`, replace:
```html
<script type="module" src="/src/main.tsx"></script>
```

With the actual built file references (check the build output for exact filenames):
```html
<script type="module" src="/assets/index-[hash].js"></script>
<link rel="stylesheet" href="/assets/index-[hash].css">
```

### 3. Deploy to Cloudflare Pages
- Use `dist/public` as the build output directory
- Set build command to: `npm run build`
- Ensure `_headers` file is in the root for MIME type configuration

### 4. Alternative: Use the Build Script
```bash
./build-for-cloudflare.sh
```

This script handles the entire build process and file preparation.

## Files Created for Deployment
- `_headers` - MIME type configuration
- `wrangler.toml` - Cloudflare configuration
- `build-for-cloudflare.sh` - Automated build script
- `dist/public/_headers` - Headers in build directory

The key is that production must use pre-built JavaScript files, not source TypeScript files.