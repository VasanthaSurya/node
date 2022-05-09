const dns = require('dns');

const Resolver = new dns.Resolver();

for (let i = 3000; i < 5000 ; i++){
    dns.lookupService('127.0.0.1', i, (err, hostname, service) => {
        if (i != service){
            console.log(`port number = ${i} -> ${service}`);
        }
  });
}
