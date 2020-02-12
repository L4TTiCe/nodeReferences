const EventEmitter = require('events');

// Create Class
class MyEmitter extends EventEmitter { }

// Init Object
const myEmitter = new MyEmitter();

// Event Listener
myEmitter.on('event', () => console.log("Event Fired!"));

// Emit Event
myEmitter.emit('event');

