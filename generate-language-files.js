import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const args = process.argv.slice(2);
const languageCode = args[0];

if (!languageCode) {
  console.error('Please provide the language code.');
  process.exit(1);
}

const sourceFolder = 'src/pages';
const targetFolder = `src/${languageCode}`;
const sourcePath = path.join(process.cwd(), sourceFolder);
const targetPath = path.join(process.cwd(), targetFolder);

if (!fs.existsSync(targetPath)) {
  fs.mkdirSync(targetPath, {recursive: true});
}

let filesCopied = 0;
let filesSkipped = 0;

fs.readdirSync(sourcePath).forEach(file => {
  const sourceFile = path.join(sourcePath, file);
  const targetFile = path.join(targetPath, file);

  if (fs.lstatSync(sourceFile).isFile()) {
    if (fs.existsSync(targetFile)) {
      console.log(`File ${targetFile} already exists. Skipping...`);
      filesSkipped++;
      return;
    }

    const content = fs.readFileSync(sourceFile, 'utf8');
    const parsed = matter(content);

    // Prepend the language code to the existing permalink in the front matter
    if (parsed.data.permalink) {
      parsed.data.permalink = `/${languageCode}${parsed.data.permalink}`;
    }

    // Add translated: false to the front matter
    parsed.data.translated = false;

    // Write the updated content to the target file
    const updatedContent = matter.stringify(parsed.content, parsed.data);
    fs.writeFileSync(targetFile, updatedContent);
    filesCopied++;
  }
});

console.log(`Files copied: ${filesCopied}`);
console.log(`Files skipped: ${filesSkipped}`);
