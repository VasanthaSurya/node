const fs = require('fs');

var path = 'C:/Users/surya/Desktop/node';

fs.readdir(path,(error,files)=>{
    if(error){
        console.log(`Error occured : ${error}`);
    }
    else{
      console.log(files);
    }
});

// document.getElementById("filepicker").addEventListener("change", function(event) {
//     let output = document.getElementById("listing");
//     let files = event.target.files;
  
//     for (let i=0; i<files.length; i++) {
//       let item = document.createElement("li");
//       item.innerHTML = files[i].webkitRelativePath;
//       output.appendChild(item);
//     };
//   }, false);