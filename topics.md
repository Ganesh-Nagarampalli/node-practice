# Why Node.js?

## What is Node.js?
- It is an environment to run JavaScript outside the browser.
- Built on Chrome's V8 JavaScript engine.
- V8 is the name of the JavaScript engine that powers Google Chrome. It's the thing that takes our JavaScript and executes it while browsing with Chrome. V8 is the JavaScript engine, i.e., it parses and executes JavaScript code.

## Things to be familiar with prior:
- HTML
- CSS
- JavaScript fundamentals
- ES6
- Callback functions
- Async/Await
- Promises

## Browser vs Server:
![Browser vs Server](images/browser_vs_server.png)

[why no dom in node.js](https://stackoverflow.com/questions/6657216/why-doesnt-node-js-have-a-native-dom#:~:text=Javascript%20as%20a%20language%20is,Hence%20no%20DOM.&text=Node%20is%20a%20runtime%20environment,a%20DOM%20like%20a%20browser.)

## Node.js Features:
- __dirname - path to the current directory

- __filename - file name

- require - function to use modules (CommonJS)

- module - info about current module (file)

- process - info about env where the program is being executed

## modules:
- to access things from a module, we need to export them from the module and import them in the file where we want to use them.

- this is done using the `module.exports` and `require` functions.

- `module.exports` is an object that will hold all the things that we want to export from a module.

- `require` is a function that we use to import things from a module.

- `module.exports` and `require` are part of the CommonJS module system.

- Every file in Node.js is a module.

- Modules are encapsulated and only share minimum details.

- refer 1.js and 2.js for example.

## built-in modules:

- fs - file system module
- http - http module
- os - os module
- path - path module
- util - util module
- v8 - v8 module

## sync vs async:

- synchronous - blocking
- asynchronous - non-blocking (better) using callbacks, promises, async/await refer 6-fs-async.js

## npm:

- npm is the world's largest software registry.

- node package manager

- npm i packageName     //for local

- npm install -g packageName     //for global

- package.json - manifest file (stores im info abt project/package)

- manual approach (create package.json in the root, create properties etc)

- npm init (step by step , press enter to skip)

- npm init -y  (everything default)

- node_modules folder stores all the dependencies

## gitignore:

- .gitignore file is used to specify files and directories that should be ignored by git.