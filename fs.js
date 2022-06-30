// import readdir from 'fs';
const fs = require('fs');

var path = 'C:/Users/surya/Desktop/node';
try {
  fs.readdir(path,(error,files)=>{
    if(error){console.log(`Error occured : ${error}`);}
    else{
      console.log(files);
      for (var file of files){
          fs.readFile(`${path}/${file}` ,(error ,data)=>{
            if(error) console.log(`Error occured : ${error}`);
            else{
              console.log(data);
            }
          })
      }
    }
  });
  
} catch (err) {
  console.error(err);
}