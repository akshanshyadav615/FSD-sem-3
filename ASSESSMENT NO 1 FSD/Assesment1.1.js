
const EventEmitter = require('events');

// Custom SessionManager class
class SessionManager extends EventEmitter {
    trigger(command, ...args) {
        if (command === 'greet' || command === 'exit') {
            this.emit(command, ...args);
        } else {
            console.log(`Unknown event: ${command}`);
        }
    }
}

// Create object
const session = new SessionManager();

// greet event
session.on('greet', (username) => {
    console.log(`Hello, ${username}! Welcome.`);
});

// exit event
session.on('exit', (code) => {
    console.log(`Session closed with code ${code}. Goodbye!`);
});

// once listener - runs only first time
session.once('greet', () => {
    console.log('First login of the day!');
});

// Error listener
session.on('error', (message) => {
    console.log(`Error: ${message}`);
});

// Emit greet three times
session.trigger('greet', 'Akshansh');
session.trigger('greet', 'Yadav');
session.trigger('greet', 'bhais');

// Current listener count for greet
console.log(`Greet listener count: ${session.listenerCount('greet')}`);

// Emit exit
session.trigger('exit', 0);

// Unknown event
session.trigger('login');

// Emit error event
session.trigger('error', 'Invalid session detected!');
