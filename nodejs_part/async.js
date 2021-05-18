const fs = require("fs");
const axios = require("axios");


const asynFxn = async() =>{

for(let i=0; i<5; i++){

    let promisedData = await fs.readFile("file1.txt","utf-8", (err,data)=> {

        if(err) throw err;
        
        console.log("Async First loop at",i, data)

        // for(let i=0; i<5; i++)
        //     {
        //         data = fs.readFileSync("file1.txt","utf-8");
        //         console.log("Sync Between Async For Loop at ",i,data);

        //     }

            console.log("\n")
    });
}

}

//asynFxn();


                                //Async-Await return as Promise 
// let arr = [2, 4, 5, 7];
// function cb(x) {
//     return x * x;
// }
// // array => tranform
// let narr = arr.map(cb);
// console.log(narr);

