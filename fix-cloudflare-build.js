#!/usr/bin/env node

// Post-build script to fix Cloudflare Pages compatibility
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log('🔧 Fixing Cloudflare Pages compatibility...');

// Path to built HTML
const htmlPath = path.join(__dirname, 'dist/public/index.html');

if (!fs.existsSync(htmlPath)) {
  console.error('❌ Built HTML file not found at:', htmlPath);
  process.exit(1);
}

// Read the HTML file
let html = fs.readFileSync(htmlPath, 'utf8');
console.log('📖 Read HTML file');

// Replace type="module" with a non-module approach
html = html.replace(
  /<script type="module" crossorigin src="([^"]+)"><\/script>/g,
  '<script crossorigin src="$1" defer></script>'
);

console.log('✅ Removed type="module" attributes');

// Write back the modified HTML
fs.writeFileSync(htmlPath, html);
console.log('💾 Saved modified HTML');

// Create a simple _headers file specifically for the assets directory
const headersContent = `# Cloudflare Pages Headers - Fixed for JS modules

/assets/*.js
  Content-Type: application/javascript

/*.js  
  Content-Type: application/javascript

/*.css
  Content-Type: text/css
`;

fs.writeFileSync(path.join(__dirname, 'dist/public/_headers'), headersContent);
console.log('📝 Created _headers file');

console.log('🎉 Cloudflare Pages compatibility fix complete!');
console.log('👉 Deploy the dist/public/ directory to Cloudflare Pages');