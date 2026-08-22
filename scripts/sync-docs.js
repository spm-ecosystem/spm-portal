import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const docsTargetDir = path.join(root, 'src/docs');

if (!fs.existsSync(docsTargetDir)) {
  fs.mkdirSync(docsTargetDir, { recursive: true });
}

// 1. Copy manifest_schema.md from spm-cli/docs
const cliDocPath = path.join(root, '../spm-cli/docs/manifest_schema.md');
if (fs.existsSync(cliDocPath)) {
  fs.copyFileSync(cliDocPath, path.join(docsTargetDir, 'manifest_schema.md'));
  console.log('[sync-docs] Copied manifest_schema.md');
}

// 2. Copy component docs from spm-components/docs/components
const compDocsDir = path.join(root, '../spm-components/docs/components');
if (fs.existsSync(compDocsDir)) {
  const files = fs.readdirSync(compDocsDir);
  let count = 0;
  for (const file of files) {
    if (file.endsWith('.md')) {
      fs.copyFileSync(path.join(compDocsDir, file), path.join(docsTargetDir, file));
      count++;
    }
  }
  console.log(`[sync-docs] Copied ${count} component doc files.`);
}
