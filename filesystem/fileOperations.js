const fs = require('fs');

// async file read
function readFile() {
    fs.readFile(`${__dirname}/sample.txt`, (err, data) => {
        if (err)
            console.log(err);
        console.log(`async file read operation:${data.toString()}`);
    });
}

//sync file read
function readFileSync() {
    const response = fs.readFileSync("./filesystem/sample.txt", {encoding: 'utf8'}, (err) => {
        if (err)
            console.log(err);
    });
    console.log(`sync file read operation:${response}`);
}

// file write operations
if ( !fs.existsSync(`${__dirname}/write.txt`)) {
    fs.writeFile(`${__dirname}/write.txt`, `
    New File write operation`, (err) => {
        if(err)
            console.log(err);
        console.log('Write operation completed');
    });
}
else {
    fs.appendFile(`${__dirname}/write.txt`, '\nAppend File add operation', (err) => {
        if(err)
            console.log(err);
        console.log('append operation completed');
    });
}

// create/remove dir

if (!fs.existsSync(`${__dirname}/test/`)) {
    let dirName = `${__dirname}/test/`;
    console.log(dirName);
    fs.mkdir(dirName, (err)=> {
        if ( err)
            console.log(err);
        console.log('test directory is created');
    });
}
else {
    fs.rmdir(`${__dirname}/test/`, (err) => {
        if ( err)
            console.log(err);
        console.log('test directory is deleted');
    })
}

module.exports = {
    read : readFile,
    readSync : readFileSync
};




