// Example state object
let state = {
    signals: {
        signal1: true,
        signal2: false,
        signal3: true,
    },
    otherProperty: "someValue"
};

// Assigning state.signals to signals
let signals = state.signals;

// Now you can use the signals variable to refer to state.signals
console.log(signals.signal1); // Output: true
console.log(signals.signal2); // Output: false
