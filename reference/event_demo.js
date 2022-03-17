const EventEmitter = require('events')


// Create Class
class MyEmitter extends EventEmitter { }

// Instantiation
const myEmitter = new MyEmitter()

// Add On Event Listener
myEmitter.on('event', () => console.log('Event Fired!'))

// Call Event
myEmitter.emit('event')