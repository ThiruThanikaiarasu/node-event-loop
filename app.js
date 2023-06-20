const events = require('events')
const eventEmitter = new events.EventEmitter();

myEventHandler = () =>{
    console.log("I hear a scream")
}

eventEmitter.on("scream",myEventHandler)
eventEmitter.emit("scream")


const myEventHandler = () =>{
    console.log('welcome to our shop');
}

myEventEmitter.once('welcome', myEventHandler)

myEventEmitter.emit('welcome')

console.log(osModule )