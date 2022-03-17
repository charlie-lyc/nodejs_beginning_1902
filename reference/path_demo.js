const path = require('path')


console.log(__filename)

// Directory
console.log(path.dirname(__filename))

// Base
console.log(path.basename(__filename))

// Extension
console.log(path.extname(__filename))

// Create Path Object
console.log(path.parse(__filename))
console.log(path.parse(__filename).root)
console.log(path.parse(__filename).dir)
console.log(path.parse(__filename).base)
console.log(path.parse(__filename).ext)
console.log(path.parse(__filename).name)

// Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'))