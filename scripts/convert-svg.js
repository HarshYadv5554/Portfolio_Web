const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const directories = [
    { input: 'public/tech', output: 'public/tech' },
    { input: 'public/projectimg', output: 'public/projectimg' },
    { input: 'public/company', output: 'public/company' }
];

async function convertSvgToWebp(inputPath, outputPath) {
    try {
        await sharp(inputPath)
            .webp({ quality: 80 })
            .toFile(outputPath);
        console.log(`Converted ${inputPath} to ${outputPath}`);
    } catch (error) {
        console.error(`Error converting ${inputPath}:`, error);
    }
}

async function processDirectory(dir) {
    const files = fs.readdirSync(dir.input);
    
    for (const file of files) {
        if (file.endsWith('.svg')) {
            const inputPath = path.join(dir.input, file);
            const outputPath = path.join(dir.output, file.replace('.svg', '.webp'));
            await convertSvgToWebp(inputPath, outputPath);
        }
    }
}

async function main() {
    for (const dir of directories) {
        await processDirectory(dir);
    }
    console.log('Conversion complete!');
}

main().catch(console.error); 