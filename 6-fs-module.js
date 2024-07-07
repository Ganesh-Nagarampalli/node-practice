const {readFileSync, writeFileSync} = require('fs')

const file = readFileSync('./content/sample.txt','utf8')
console.log(file)

writeFileSync('./content/result-sync.txt', 'Hello, World!')
// The above code will create a file called result-sync.txt if it is not exist in the content folder with the content Hello, World!.If exists it will overwrite the content of the file with Hello, World!.

writeFileSync('./content/result-sync.txt', 'appending new txt', {flag: 'a'})