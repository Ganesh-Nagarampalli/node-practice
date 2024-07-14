const fetch = require('node-fetch')

const promise = fetch('https://jsonplaceholder.typicode.com/todos/1')

promise
    .then(res => res.json())
    .then(data => console.log(data))

console.log('hello world')