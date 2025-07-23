#!/bin/bash

# Build script for Cloudflare Pages deployment
echo "Building Casa Benavides for Cloudflare Pages..."

# Install dependencies
npm install

# Build the client
npm run build

# Copy headers to build directory 
cp _headers dist/public/_headers 2>/dev/null || true
cp client/public/_headers dist/public/_headers 2>/dev/null || true

# Copy Cloudflare Functions
mkdir -p dist/functions/api
cp functions/api/* dist/functions/api/ 2>/dev/null || true

echo "Build complete. Ready for Cloudflare Pages deployment."