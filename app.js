const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url==='/')
        res.end('h')
})

server.listen(5000, ()=>{
    console.log('server is listening on port 5000')
})