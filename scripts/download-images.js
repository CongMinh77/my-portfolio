/**
 * Script to download portfolio images from Unsplash
 * Run with: node scripts/download-images.js
 */
const fs = require('fs');
const path = require('path');
const https = require('https');

// Create directory if it doesn't exist
const imagesDir = path.join(__dirname, '../public/assets/images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// List of Unsplash images to download
const images = [
  {
    url: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
    filename: 'portfolio-1.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    filename: 'portfolio-2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
    filename: 'portfolio-3.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
    filename: 'portfolio-4.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    filename: 'portfolio-5.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
    filename: 'portfolio-6.jpg'
  }
];

// Download function
const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    const filePath = path.join(imagesDir, filename);
    const file = fs.createWriteStream(filePath);
    
    https.get(url, response => {
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${filename}`);
        resolve();
      });
      
      file.on('error', err => {
        fs.unlink(filePath, () => {}); // Delete the file if there's an error
        reject(err);
      });
    }).on('error', err => {
      fs.unlink(filePath, () => {}); // Delete the file if there's an error
      reject(err);
    });
  });
};

// Download all images
async function downloadAllImages() {
  console.log('Starting download of portfolio images...');
  
  try {
    for (const image of images) {
      await downloadImage(image.url, image.filename);
    }
    console.log('All images downloaded successfully!');
  } catch (error) {
    console.error('Error downloading images:', error);
  }
}

downloadAllImages();
