const sharp = require('sharp')
const path = require('path')
const fs = require('fs')

const avatarPath = path.join(__dirname, '..', 'public', 'static', 'images', 'avatar.png')
const faviconDir = path.join(__dirname, '..', 'public', 'static', 'favicons')

async function generateFavicons() {
  console.log('Generating favicons from avatar...')

  // favicon-16x16.png
  await sharp(avatarPath).resize(16, 16).png().toFile(path.join(faviconDir, 'favicon-16x16.png'))
  console.log('  ✅ favicon-16x16.png')

  // favicon-32x32.png
  await sharp(avatarPath).resize(32, 32).png().toFile(path.join(faviconDir, 'favicon-32x32.png'))
  console.log('  ✅ favicon-32x32.png')

  // apple-touch-icon.png (180x180)
  await sharp(avatarPath)
    .resize(180, 180)
    .png()
    .toFile(path.join(faviconDir, 'apple-touch-icon.png'))
  console.log('  ✅ apple-touch-icon.png')

  // android-chrome-96x96.png
  await sharp(avatarPath)
    .resize(96, 96)
    .png()
    .toFile(path.join(faviconDir, 'android-chrome-96x96.png'))
  console.log('  ✅ android-chrome-96x96.png')

  // mstile-150x150.png
  await sharp(avatarPath).resize(150, 150).png().toFile(path.join(faviconDir, 'mstile-150x150.png'))
  console.log('  ✅ mstile-150x150.png')

  // favicon.ico (32x32 png as ico fallback)
  await sharp(avatarPath).resize(32, 32).png().toFile(path.join(faviconDir, 'favicon.ico'))
  console.log('  ✅ favicon.ico')

  console.log('\n✨ All favicons generated from avatar!')
}

generateFavicons().catch(console.error)
