// (function() {

//     var a = b = 5;
  
//   })();
  
  
  
//   console.log(b);

//   for (var i = 0; i < 3; i++) {

//     setTimeout(function() { console.log(i); }, 1000 + i);
  
//   }

  const fs = require('fs');
const exec = require('child_process').exec; 


// fs.writeFile("newfile.txt" ,"New File content", (err)=>{

// if(err) console.log(err);

// console.log("Content created");

// })

 const { execFile } = require('child_process');
const renderFile = exec("dir /b /A-D",(err,op,operr)=>{
if(err) console.log(err);

let str = op.replace("\n"," ")
console.log(str)
        
// let arr = op.split("\n")

// let str = arr.toString();
// console.log(str)
// // arr = arr.split("\r")



// // const ans = arr.split(".")

// let tarr = [1,2,3];


// console.log(arr,arr[0])
    
   // console.log(op)
})



// const child = execFile('dir', (err, op, stderr) => {
//     if (err) {
//       throw error;
//     }
//     console.log(op);
//   });

// console.log(null);