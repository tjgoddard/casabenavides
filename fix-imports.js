#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log('🔧 Fixing path aliases for build...');

// Function to convert @/ imports to relative imports
function convertImport(filePath, importPath) {
  // Remove @/ prefix
  const withoutAlias = importPath.replace('@/', '');
  
  // Get directory of current file relative to src
  const fileDir = path.dirname(path.relative('client/src', filePath));
  
  // Calculate relative path to src root
  let relativePath = path.relative(fileDir, '.');
  if (relativePath === '') relativePath = '.';
  
  return `${relativePath}/${withoutAlias}`;
}

// Find all TypeScript/React files
const clientSrcDir = path.join(__dirname, 'client/src');

function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      processDirectory(fullPath);
    } else if (entry.name.match(/\.(ts|tsx)$/)) {
      processFile(fullPath);
    }
  }
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;
  
  // Replace import statements
  content = content.replace(/import\s+([^"']*)\s+from\s+["']@\/([^"']+)["']/g, (match, importSpec, importPath) => {
    const newPath = convertImport(filePath, `@/${importPath}`);
    changed = true;
    return `import ${importSpec} from "${newPath}"`;
  });
  
  // Replace @assets imports
  content = content.replace(/import\s+([^"']*)\s+from\s+["']@assets\/([^"']+)["']/g, (match, importSpec, assetPath) => {
    // Assets are in attached_assets directory relative to project root
    const fileDir = path.dirname(path.relative('client/src', filePath));
    let relativePath = path.relative(fileDir, '../..');
    if (relativePath === '') relativePath = '../..';
    changed = true;
    return `import ${importSpec} from "${relativePath}/attached_assets/${assetPath}"`;
  });
  
  // Replace dynamic imports
  content = content.replace(/import\s*\(\s*["']@\/([^"']+)["']\s*\)/g, (match, importPath) => {
    const newPath = convertImport(filePath, `@/${importPath}`);
    changed = true;
    return `import("${newPath}")`;
  });
  
  if (changed) {
    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed: ${path.relative(__dirname, filePath)}`);
  }
}

processDirectory(clientSrcDir);
console.log('🎉 Path alias fixes complete!');