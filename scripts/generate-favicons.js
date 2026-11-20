// Generates every favicon size from the master SVG: public/static/favicons/favicon.svg
// Run with: node scripts/generate-favicons.js
const sharp = require('sharp')
const path = require('path')
const fs = require('fs')

const faviconDir = path.join(__dirname, '..', 'public', 'static', 'favicons')
const svgPath = path.join(faviconDir, 'favicon.svg')
const CREAM = '#FBF7F0'

// Transparent PNG at the given size
const png = (size) => sharp(svgPath, { density: 384 }).resize(size, size).png().toBuffer()

// Apple and Windows tiles fill transparent corners with black, so give them a cream backdrop
const solidPng = (size) =>
  sharp(svgPath, { density: 384 })
    .resize(size, size)
    .flatten({ background: CREAM })
    .png()
    .toBuffer()

// Real multi-size .ico file. ICO entries may hold PNG data directly.
function buildIco(images) {
  const header = Buffer.alloc(6)
  header.writeUInt16LE(0, 0) // reserved
  header.writeUInt16LE(1, 2) // type: icon
  header.writeUInt16LE(images.length, 4)

  const entries = []
  let offset = 6 + images.length * 16
  for (const { size, data } of images) {
    const entry = Buffer.alloc(16)
    entry.writeUInt8(size >= 256 ? 0 : size, 0) // width
    entry.writeUInt8(size >= 256 ? 0 : size, 1) // height
    entry.writeUInt8(0, 2) // palette colors
    entry.writeUInt8(0, 3) // reserved
    entry.writeUInt16LE(1, 4) // color planes
    entry.writeUInt16LE(32, 6) // bits per pixel
    entry.writeUInt32LE(data.length, 8)
    entry.writeUInt32LE(offset, 12)
    offset += data.length
    entries.push(entry)
  }
  return Buffer.concat([header, ...entries, ...images.map((i) => i.data)])
}

async function generateFavicons() {
  console.log('Generating favicons from favicon.svg...')

  const outputs = [
    ['favicon-16x16.png', () => png(16)],
    ['favicon-32x32.png', () => png(32)],
    ['android-chrome-96x96.png', () => png(96)],
    ['android-chrome-192x192.png', () => png(192)],
    ['android-chrome-512x512.png', () => png(512)],
    ['apple-touch-icon.png', () => solidPng(180)],
    ['mstile-150x150.png', () => solidPng(150)],
  ]
  for (const [name, make] of outputs) {
    fs.writeFileSync(path.join(faviconDir, name), await make())
    console.log(`  ✅ ${name}`)
  }

  const ico = buildIco([
    { size: 16, data: await png(16) },
    { size: 32, data: await png(32) },
    { size: 48, data: await png(48) },
  ])
  fs.writeFileSync(path.join(faviconDir, 'favicon.ico'), ico)
  console.log('  ✅ favicon.ico (16, 32, 48)')

  console.log('\n✨ All favicons generated!')
}

generateFavicons().catch((err) => {
  console.error(err)
  process.exit(1)
})
