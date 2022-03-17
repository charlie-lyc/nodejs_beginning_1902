const fs = require('fs')
const path = require('path')


// Create Folder: asynchronously

// fs.mkdir(
//     path.join(__dirname, 'test'), 
//     { 
//         // recursive: true 
//     }, err => {
//         if (err) throw err
//         console.log('Folder Created...')
// })

//////////////////////////////////////////////////
// Create Folder: synchronously

// fs.mkdirSync()

//////////////////////////////////////////////////
// Create and Write to File: asynchronously

// fs.writeFile(
//     path.join(__dirname, 'test', 'hello.txt'), 
//     'Hello World', 
//     err => {
//         if (err) throw err
//         console.log('File Written...')
//     }
// )

// AND

// fs.appendFile(
//     path.join(__dirname, 'test', 'hello.txt'), 
//     '\nI Love NodeJS', 
//     err => {
//         if (err) throw err
//         console.log('File Written...')
//     }
// )

// OR

// fs.writeFile(
//     path.join(__dirname, 'test', 'hello.txt'), 
//     '\nI Love NodeJS', 
//     {
//         // encoding: 'utf8', // Default
//         // flag: 'w', // Default
//         flag: 'a'
//     },
//     err => {
//         if (err) throw err
//         console.log('File Written...')
//     }
// )

//////////////////////////////////////////////////
// Refactoring

// fs.writeFile(
//     path.join(__dirname, 'test', 'hello.txt'), 
//     'Hello World', 
//     err => {
//         if (err) throw err
//         console.log('File Written...')
//         fs.appendFile(
//             path.join(__dirname, 'test', 'hello.txt'), 
//             '\nI Love NodeJS', 
//             err => {
//                 if (err) throw err
//                 console.log('File Written...')
//             }
//         )
//     }
// )

//////////////////////////////////////////////////
// Read File

// fs.readFile(
//     path.join(__dirname, 'test', 'hello.txt'),
//     {
//         // encoding: null, // Default
//         // flag: 'r', // Default
//         encoding: 'utf8'
//     },
//     (err, data) => {
//         if (err) throw err
//         console.log(data)
//     }
// )

// OR

// fs.readFile(
//     path.join(__dirname, 'test', 'hello.txt'),
//     'utf8',
//     (err, data) => {
//         if (err) throw err
//         console.log(data)
//     }
// )

//////////////////////////////////////////////////
// Rename File

// fs.rename(
//     path.join(__dirname, 'test', 'hello.txt'),
//     path.join(__dirname, 'test', 'helloworld.txt'),
//     (err) => {
//         if (err) throw err
//         console.log('File Renamed...')
//     }
// )