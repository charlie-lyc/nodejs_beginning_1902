// console.log('Hello from Node.js')
//////////////////////////////////////////////////////////////////////
// Module: Object

// const person = require('./person')
// console.log(person)
// console.log(person.name)
// console.log(person.age)

//////////////////////////////////////////////////////////////////////
// Module: Class

// const Person = require('./person')
// const person1 = new Person('John Doe', 36)
// console.log(person1)
// console.log(person1.name)
// console.log(person1.age)
// person1.greeting()

//////////////////////////////////////////////////////////////////////
// Module: Event Emitter

// const Logger = require('./logger')
// const logger = new Logger()
// logger.on('message', (data) => {
//     console.log('Called Listener: ', data)
// })
// logger.log('hello world')
// logger.log('i love nodejs')

//////////////////////////////////////////////////////////////////////
/********************************************************************/
const http = require('http')
const path = require('path')
const fs = require('fs')
const { join } = require('path')


const server = http.createServer((req, res) => {
    // res.end('<h1>Home</h1>')
    /////////////////////////////////////////////////////////
    // console.log(req.url)
    // if (req.url === '/') {
    //     res.writeHead(200, { 'Content-Type': 'text/html' })
    //     res.end('<h1>Home</h1>')
    // }
    /////////////////////////////////////////////////////////
    // if (req.url === '/') {
    //     fs.readFile(
    //         path.join(__dirname, 'public', 'index.html'), 
    //         // 'utf8', 
    //         (err, content) => {
    //             if (err) throw err
    //             res.writeHead(200, { 'Content-Type': 'text/html' })
    //             res.end(content)
    //         }
    //     )
    // }
    // if (req.url === '/about') {
    //     fs.readFile(
    //         path.join(__dirname, 'public', 'about.html'),
    //         (err, content) => {
    //             if (err) throw err
    //             res.writeHead(200, { 'Content-Type': 'text/html' })
    //             res.end(content, 'utf8')
    //         }
    //     )
    // }
    // if (req.url === '/api/users') {
    //     // Hard Code for JSON
    //     const users = [
    //         { name: 'John Doe', age: 46 },
    //         { name: 'Pete Mitchell', age: 22 },
    //         { name: 'Ethan Hunt', age: 34 }
    //     ]
    //     res.writeHead(200, { 'Content-Type': 'application/json' })
    //     res.end(JSON.stringify(users))
    // }
    /////////////////////////////////////////////////////////
    // Build File Path
    const filePath = path.join(
        __dirname,
        'public',
        req.url === '/' ? '/index.html' : req.url
    )
    // Get Extension of File
    const extensionName = path.extname(filePath)
    // Declare Content Type
    // let contentType
    let contentType = 'text/html'
    // Check Extension and Set Content Type
    switch (extensionName) {
        // case '.html':
        //     contentType = 'text/html'
        //     break
        case '.json':
            contentType = 'application/json'
            break
        case '.css':
            contentType = 'text/css'
            break
        case '.js':
            contentType = 'text/javascript'
            break
        case '.txt':
            contentType = 'text/plain'
            break
        case '.png':
            contentType = 'image/png'
            break
        case '.jpg':
            contentType = 'image/jpg'
            break
        // default:
        //     contentType = 'text/html'
        //     break
    }
    // Read File and Response
    fs.readFile(filePath, (err, content) => {
        if (err) {
            // Page Not Found
            if (err.code === 'ENOENT') {
                fs.readFile(
                    path.join(__dirname, 'public', '404.html'), 
                    (err, cont) => {
                        res.writeHead(200, { 'Content-Type': 'text/html' })
                        res.end(cont)
                    }
                )
            // Some Server Error
            } else {
                res.writeHead(500)
                res.end(`Server Error: ${err.code}`)
            }
        } else {
            // Success
            res.writeHead(200, { 'Content-Type': contentType })
            res.end(content)
        }
    })
    
})

const PORT = process.env.PORT || 5000
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})