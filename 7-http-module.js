const http = require('http')

const server = http.createServer((req,res) => {
    //console.log(req)
    // res.write('Welcome to our home page')
    // res.end()
    if(req.url==='/'){
        res.end('welcome to hell')
    }
    if(req.url==='/about'){
        res.end('This is about page')
    }
    res.end(
        `<h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back home</a>`
    )
    
})

server.listen(5000)