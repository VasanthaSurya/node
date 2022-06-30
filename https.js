const http = require('http');
const fs = require('fs');
// console.log(http);

const options = {}
http.createServer(options ,(req,res) =>{
    res.writeHead('200',{'Content-Type' : 'text/html'});
    fs.readFile('./index.html',(error,data)=>{
        if(error){
            res.writeHead(404);
            console.log('Error occured.');
        }else{
            res.write(data);
            // res.write(console.log(data));
        }
        res.end();
    });
}).listen(8000,(error) =>{
    if(error){
        console.log(`Error occured.All on developer.No worries. ${error}`);
    }else{
        console.log('Listening on port 8000');
    }
});