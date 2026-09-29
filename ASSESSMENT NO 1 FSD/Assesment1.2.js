const EventEmitter = require('events');

class Element extends EventEmitter {
    constructor(name, parent = null) {
        super();
        this.name = name;
        this.parent = parent;
    }

    addEventListener(type, handler) {
        this.on(type, handler);
    }

    removeEventListener(type, handler) {
        this.removeListener(type, handler);
    }

    dispatchEvent(type, data = {}) {
        const event = {
            type: type,
            target: this,
            currentTarget: this,
            data: data,
            stopped: false,

            stopPropagation() {
                this.stopped = true;
            }
        };

        let current = this;

        // Bubble event through parents
        while (current) {
            event.currentTarget = current;

            current.emit(type, event);

            if (event.stopped) {
                break;
            }

            current = current.parent;
        }
    }
}

const documentElement = new Element('document');
const form = new Element('form', documentElement);
const button = new Element('button', form);

function buttonHandler(event) {
    console.log(
        `Button handler: target=${event.target.name}, currentTarget=${event.currentTarget.name}`
    );
}


function formHandler(event) {
    console.log(
        `Form handler: target=${event.target.name}, currentTarget=${event.currentTarget.name}`
    );
}


function documentHandler(event) {
    console.log(
        `Document handler: target=${event.target.name}, currentTarget=${event.currentTarget.name}`
    );
}

button.addEventListener('click', buttonHandler);
form.addEventListener('click', formHandler);
documentElement.addEventListener('click', documentHandler);

console.log('\n--- Scenario A ---');

button.dispatchEvent('click', {
    message: 'Button clicked'
});

form.removeEventListener('click', formHandler);


function formStopHandler(event) {
    console.log(
        `Form handler: target=${event.target.name}, currentTarget=${event.currentTarget.name}`
    );

    event.stopPropagation();
}

form.addEventListener('click', formStopHandler);

console.log('\n--- Scenario B ---');

button.dispatchEvent('click', {
    message: 'Button clicked again'
});


console.log('\n--- Scenario C ---');


button.removeEventListener('click', buttonHandler);

button.dispatchEvent('click', {
    message: 'Button clicked after removing listener'
});



form.addEventListener('keypress', (event) => {
    console.log(
        `Keypress handler: target=${event.target.name}, currentTarget=${event.currentTarget.name}, key=${event.data.key}`
    );
});

console.log('\n--- Keypress Event ---');

form.dispatchEvent('keypress', {
    key: 'Enter'
});