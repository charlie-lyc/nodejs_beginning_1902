// const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active')
// console.log(myUrl)

//////////////////////////////////////////
const url = require('url')

const myUrl = new url.URL('http://mywebsite.com:5000/hello.html?id=100&status=active')


// Serialized URL
console.log(myUrl.href)

// Origin
console.log(myUrl.origin)

// Protocol
console.log(myUrl.protocol)
// Host
console.log(myUrl.host)

// Host Name
console.log(myUrl.hostname)
// Port Number
console.log(myUrl.port)

// Path
console.log(myUrl.pathname)

// Serialized Query (ex: ?query=string)
console.log(myUrl.search)
// Parameters Object
console.log(myUrl.searchParams)

// Get Parameters Iterator: { [name, value], ... }
console.log(myUrl.searchParams.entries())

// Add Parameter
myUrl.searchParams.append('abc', '123')
console.log(myUrl.searchParams)

// Loop through Parameters
myUrl.searchParams.forEach((value, name) => {
    console.log(`${name}: ${value}`)
})

// Delete Parameter
myUrl.searchParams.delete('abc')
console.log(myUrl.searchParams)