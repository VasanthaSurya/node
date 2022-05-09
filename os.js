const os = require('os');

console.log(os.arch());
console.log(os.platform());
console.log(os.release());
console.log(os.type());
console.log(os.version());

console.log(os.constants);

console.log(os.cpus());

console.log("Free memory =  " + os.freemem()/(1024*1024*1024));
console.log("Total memory = " + os.totalmem()/(1024*1024*1024));
console.log("Used memory = " + (os.totalmem()-os.freemem())/(1024*1024*1024));

console.log(os.homedir());
console.log(os.hostname());

console.log(os.loadavg());
console.log(os.networkInterfaces());

console.log(os.uptime());
console.log(os.userInfo());