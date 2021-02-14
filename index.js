const {read, readSync} = require('./filesystem/fileOperations');
const stream = require('./filesystem/streamOperations');
const _ = require('lodash');

const greet = _.once(()=> {
    console.log('hello');
})

greet();
greet();

const name = 'Ravi';
console.log(name);

// global object

// going to run only once after the timeout
setTimeout( ()=> {
    clearInterval(intervalMsg);
    console.log('Clear the interval');
}, 2000);

let i = 1;
// it will run for every one sec till you exit the program or clear the interval
const intervalMsg = setInterval( ()=> {
    console.log(i++);
}, 1000);

read();
readSync();