const http = require('http')


// Create Server
http.createServer((req, res) => {
        // Write Response
        res.write('Hello World')
        res.end()
    }).listen(5000, () => {
        console.log('Sever running...')
    })