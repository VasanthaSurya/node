const path = require('path');

console.log(path);
console.log(path.dirname('C:/Users/surya/Desktop/node'));
console.log(path.extname('./app.js'));

var pth = path.parse('C:/Users/surya/Desktop/node')
console.log(pth);
console.log(pth.dir);