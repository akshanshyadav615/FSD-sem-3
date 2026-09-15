const EventEmitter = require('events');
const myEmitter = new EventEmitter();
myEmitter.on('greet', (name) => {
  console.log(`HI, ${name}! WELCOME TO NODE.JS.`);
});
myEmitter.on('exit', () => {
  console.log('application closed');
});
myEmitter.emit('greet', 'AKSHANSH');
myEmitter.emit('exit');