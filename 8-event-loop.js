//1st example

console.log("Start")
setTimeout(()=>{
    console.log("2 sec timer")
}
, 2000)
setTimeout(()=>{
    console.log("0 sec timer")
}
, 0)
console.log("End")


//2nd example

const { readFile } = require('fs')
readFile('./content/sample.txt', 'utf8', (err, file) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(file)
})
console.log('File Read Initiated')
