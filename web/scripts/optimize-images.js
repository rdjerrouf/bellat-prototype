#!/usr/bin/env node

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '../public/images/products');
const targetDir = path.join(__dirname, '../public/images/products');

async function optimizeImage(inputPath, outputPath) {
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    console.log(`Processing ${path.basename(inputPath)}...`);
    console.log(`Original: ${metadata.width}x${metadata.height}, ${metadata.format}, ~${Math.round(fs.statSync(inputPath).size / 1024)}KB`);
    
    // Generate WebP version
    await image
      .resize(800, 800, { fit: 'cover', position: 'center' })
      .webp({ quality: 80, effort: 6 })
      .toFile(outputPath.replace(path.extname(outputPath), '.webp'));
    
    // Generate AVIF version
    await image
      .resize(800, 800, { fit: 'cover', position: 'center' })
      .avif({ quality: 70, effort: 9 })
      .toFile(outputPath.replace(path.extname(outputPath), '.avif'));
    
    // Generate optimized JPEG fallback
    await image
      .resize(800, 800, { fit: 'cover', position: 'center' })
      .jpeg({ quality: 85, progressive: true })
      .toFile(outputPath.replace(path.extname(outputPath), '.jpg'));
    
    // Generate smaller thumbnail versions
    await image
      .resize(400, 400, { fit: 'cover', position: 'center' })
      .webp({ quality: 80, effort: 6 })
      .toFile(outputPath.replace(path.extname(outputPath), '-thumb.webp'));
      
    await image
      .resize(400, 400, { fit: 'cover', position: 'center' })
      .jpeg({ quality: 85, progressive: true })
      .toFile(outputPath.replace(path.extname(outputPath), '-thumb.jpg'));
    
    const webpStats = fs.statSync(outputPath.replace(path.extname(outputPath), '.webp'));
    console.log(`Generated WebP: ~${Math.round(webpStats.size / 1024)}KB`);
    
  } catch (error) {
    console.error(`Error processing ${inputPath}:`, error);
  }
}

async function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isFile() && /\.(jpg|jpeg|png)$/i.test(file)) {
      const outputPath = path.join(targetDir, file);
      await optimizeImage(filePath, outputPath);
    }
  }
}

// Check if sharp is installed
try {
  require.resolve('sharp');
} catch (e) {
  console.log('Installing sharp for image optimization...');
  const { execSync } = require('child_process');
  execSync('npm install sharp --save-dev', { stdio: 'inherit' });
}

console.log('Starting image optimization...');
processDirectory(sourceDir).then(() => {
  console.log('Image optimization complete!');
}).catch(console.error);