const path = require('path')

console.log(path.sep)

const filePath = path.join('/images', 'browser_vs_server.png')

console.log(filePath)
const base = path.basename(filePath)
console.log(base)