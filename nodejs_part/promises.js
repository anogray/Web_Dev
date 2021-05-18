const axios = require("axios");
const fs = require("fs");


            //Promises return  with async-await
async function fn() {
    console.log("I am async");
    let val = await axios.get("https://jsonplaceholder.typicode.com/users");
    // console.log("val",val.data);
            
         // return promise;

        if(val.data.length>0){
            return val.data
        }
        return "";
    
//     return 10
 }

//  let rVal=fn();
// rVal.then(function (data) {
//     console.log(data)
//     })

//  console.log("Promise Status ",rVal)

// OR 

// fn().then(function (data) {
//     console.log(data)
//     })


                    //Promises return with Then

 function thenfn(){

    console.log("I am then async");

    return  new Promise((resolve,reject)=>{

        axios.get("https://jsonplaceholder.typicode.com/users").then((val)=>{

        if(val.data.length > 0){
            //console.log(val.data)
            resolve(val.data)
        }
            
        reject("No data found")
        })
      
    })
 }

// let promiseRec = thenfn();
// promiseRec.then((data)=>{
//     console.log("thendata",data);
// })
// console.log("Promise Status ",promiseRec)

// OR
// promiseRec().then((data)=>{
//     console.log("thendata",data);
// })



                    // Async-Await Promised returning with order of files

const asynFxn = async() =>{

    let f1  = fs.promises.readFile("file1.txt",'utf-8');
    let f2 = fs.promises.readFile("file2.txt",'utf-8');

    let promiseArr = await Promise.all([f1,f2]);
    //console.log("Content of files with arrays added inorder",promiseArr);
    return promiseArr;
  
    }

let fxnPromised = asynFxn(); 

// asynFxn().then((data)=>{
//     console.log(data);
// })


                    // Then-catch Promised returning with order of async files
                    
function ThenFxn()
{
    let f1  = fs.promises.readFile("file1.txt",'utf-8');
    let f2 = fs.promises.readFile("file2.txt",'utf-8');

    //Type of Way await

    // let promiseArr = await Promise.all([f1,f2]);
    // console.log(promiseArr)
    // return promiseArr


    //Type of Way Then

    // let ans = Promise.all([f1,f2]).then((promiseArr)=>{
    //     return promiseArr
    // })
    // //console.log(ans)// As ans becomes Promise pending
    // return ans;
    

    return Promise.all([f1,f2]).then((promiseArr)=>{
   //console.log("Content of files with arrays added inorder",promiseArr);
        return promiseArr
    })


 
}

 //let fxnThenPromised = ThenFxn();  

//  ThenFxn().then((data)=>{
//     console.log("data",data);
// })


    //Issue with for loops haing async calls

//Issue 1    
//If we render then the o/p shows random async calls o/p
const loopFxn = async() =>{

for(let i=0; i<5; i++){

    await fs.readFile("file1.txt","utf-8", (err,data)=> {
        if(err) throw err;
        
        console.log("Async First loop at",i, data)
/*The o/p of "Async First loop indexes will come out of the await process
as for loop is synchornous and hence these fs.readFiles are enqueued
to the microtasks and which one will come out is not inorder sequence
*/
        // for(let i=0; i<5; i++)
        //     {
        //         data = fs.readFileSync("file1.txt","utf-8");
        //         console.log("Sync Between Async For Loop at ",i,data);

        //     }

            console.log("\n")
    });
}

}

//loopFxn();

//Resolution with Async-Await

const textFxn = async()=>
{
    for(let i=0; i<10; i++){
        console.log("before",i);
        let val = await axios.get("https://jsonplaceholder.typicode.com/users")
        
        console.log("after",i);
        //console.log("after",val.data[`${i}`],i);
    }
}

//Above We can use for loop having async calls serially/synchronously
textFxn(); 

const loopFxnAwait = async() =>{

    for(let i=0; i<5; i++){
    
        let pending =  await fs.promises.readFile(`file${i+1}.txt`,"utf-8")
    
/*
Now we saw in Issue 1 we can use fs.promises and get the promises reference/
promises pending as inorder coming from for loop synchronously
*/
        let resolvedVal = await pending;
/*
Here we use with await above which we stored in above let pending 
 and now awating to go and resolve the value of pending variable
, now for loop execution would have stopped as we used to await keyword
smartly
*/ 
        console.log(resolvedVal)
    }
    
    }

//loopFxnAwait();

//Resolution with Promise.all

const loopFxnSeq = async() =>{

    let promiseSeqArr = [];

    for(let i=0; i<5; i++){
    
        promiseSeqArr[i] = fs.promises.readFile(`file${i+1}.txt`,"utf-8")

/* Now as before in Issue 1 we can use the sequence inorder of getting asynchronous
data from as in the for loop by returning the promises of each of
the index with fs.promises which are stored in the array
promiseSeqArr , since we get the just the reference of each index
and stored in the array of pending each of the promise we work as
synchronously and hence later we execute for loop synchronously
we return the Promise.all inorder which has the promises reference/
status inorder as added to promiseSeqArr[i]
*/ 
    }
    return Promise.all(promiseSeqArr)
    
    }

    // loopFxnSeq().then((data)=>{
    //     console.log("datass",data);
    // })
    // .catch(err=>{
    //     console.log(err)
    // });

      


