const EventEmitter = require('events')
const { v4: uuidv4 } = require('uuid')


// console.log(uuidv4())

class Logger extends EventEmitter {
    log(msg) {
        // Call Event
        this.emit('message', { id: uuidv4(), msg })
    }
}

module.exports = Logger