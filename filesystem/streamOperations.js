const fs = require('fs');

const readStream = fs.createReadStream(`${__dirname}/write.txt` , {encoding:'utf8'});

const writeStream = fs.createWriteStream(`${__dirname}/write2.txt` , {encoding:'utf8'});

readStream.on('data', (chunk) => {
    writeStream.write('\n NEW CHUNK');
    writeStream.write(chunk);
});
