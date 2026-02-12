const fs = require('fs')
const path = require('path')

const dirsToRemove = ['.next', '.contentlayer', 'node_modules/.cache']

console.log('🧹 Clearing cache directories...\n')

dirsToRemove.forEach((dir) => {
  const dirPath = path.join(process.cwd(), dir)

  if (fs.existsSync(dirPath)) {
    try {
      fs.rmSync(dirPath, { recursive: true, force: true })
      console.log(`✅ Removed: ${dir}`)
    } catch (error) {
      console.log(`⚠️  Could not remove ${dir}: ${error.message}`)
    }
  } else {
    console.log(`ℹ️  Directory not found: ${dir}`)
  }
})

console.log('\n✨ Cache cleared! Run "npm run dev" to start fresh.\n')
