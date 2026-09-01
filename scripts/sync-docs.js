import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const docsTargetDir = path.join(root, 'src/docs');

if (!fs.existsSync(docsTargetDir)) {
  fs.mkdirSync(docsTargetDir, { recursive: true });
}

// 1. Copy CLI documentation files from spm-cli/docs
const cliDocsDir = path.join(root, '../spm-cli/docs');
if (fs.existsSync(cliDocsDir)) {
  const cliFiles = fs.readdirSync(cliDocsDir);
  for (const file of cliFiles) {
    if (file.endsWith('.md')) {
      fs.copyFileSync(path.join(cliDocsDir, file), path.join(docsTargetDir, file));
      console.log(`[sync-docs] Copied CLI doc: ${file}`);
    }
  }
}

// 2. Copy component manuals from spm-components/docs
const compBaseDocsDir = path.join(root, '../spm-components/docs');
if (fs.existsSync(compBaseDocsDir)) {
  const baseFiles = fs.readdirSync(compBaseDocsDir);
  for (const file of baseFiles) {
    if (file.endsWith('.md')) {
      fs.copyFileSync(path.join(compBaseDocsDir, file), path.join(docsTargetDir, file));
      console.log(`[sync-docs] Copied base component manual: ${file}`);
    }
  }
}

// 3. Copy detailed component specs from spm-components/docs/components
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
  console.log(`[sync-docs] Copied ${count} component spec markdown files.`);
}
