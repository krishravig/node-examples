const fs = require('fs');
//const userObj = require('./user.json');

const userObj = {"userName":"rammohan","country":"USA","address":{"city":"Milpitas","state":"California"},"phone_numbers":["12345","567890"]};


//const userObj = JSON.parse(userJSON);
userObj.country ='India';
userObj.address.city='Chennai';
userObj.address.state='TamilNadu';
userObj.phone_numbers.push('13596');
console.log(userObj);

const convertedJSON = JSON.stringify(userObj);
console.log(convertedJSON.userName);
fs.writeFile('./user.json', convertedJSON, (err)=> console.log(err));
