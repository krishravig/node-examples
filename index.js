const {read, readSync} = require('./filesystem/fileOperations');
const stream = require('./filesystem/streamOperations');
const _ = require('lodash');
const yargs = require('yargs');

yargs.version('1.0.0');

yargs.command({
    command: 'add',
    describe : 'Adding a note',
    handler : ()=> {
        console.log('Adding a new note');
    }
})

// this statement will process the yargs statements or need to use yargs.argv
yargs.parse();

let triple = (x)=> x*x*x;
const waffle = triple;
console.log(`i value : ${waffle(3)}`);

const test = function (elements, result) {
    console.log(typeof elements);
    console.log(elements);
    console.log(result.length);
    console.log(result);
}

const display = (name, city)=> { console.log('display name')};
test({name : 'ram', city: 'chennai'}, display);

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