let fs = require("fs");
// catch suppresses the error 
// fsP.then(function (data) {
//     console.log(data);
// })
// syntax sugar
console.log("Before");
async function fn() {
    console.log("Inside fn");

    //let fsP = fs.promises.readFile("file1.txt","utf-8");


    // console.log(fsP)
    // fsP.then((data)=>{
    //     console.log(data)
    // })

    
    
    let fsP = fs.promises.readFile("file1.txt");
    let data = await fsP;

    console.log("After await");
    console.log("" + data);

    
    // console.log(data + " ");
    // console.log(dArr[0] + " ");
    // console.log(dArr[1] + " ");

}

async function fn2() {
    console.log("Inside f2");
    let sfp = fs.promises.readFile("file2.txt");
    let data = await sfp;
    console.log("after await");
    console.log("" + data);
}

async function fn3() {
    console.log("Inside f3");
    
}


const funct = async()=>{ 
    await fn();
    fn3()
 await fn2();
    
 console.log("`````````````````````");
}

 funct();

//  fn();
//  fn2();
// console.log("`````````````````````");
// console.log("After");