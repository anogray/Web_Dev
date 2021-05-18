const fs = require("fs");


                        // Sync Blocking Data

let data = fs.readFileSync("file1.txt","utf-8")



console.log("result data",data)

 //  Async / Non-Blocking Code 

let dataasync = fs.readFile("file1.txt","utf-8", (err,data)=> {

    if(err) throw err;
    
    console.log("The Async Data Result", data)
})                                    


                        // Sync Blocking Data

data = fs.readFileSync("file1.txt","utf-8")
console.log("`````````````````````````````````````````````````")


console.log("result data  two",data)



for(let i=0; i<5; i++)
{
    data = fs.readFileSync("file1.txt","utf-8");
    console.log("First For Loop at ",i,data);

}



for(let i=0; i<5; i++)
{
    data = fs.readFileSync("file1.txt","utf-8");
    console.log("Second For Loop at ",i,data);

}

for(let i=0; i<5; i++){

    fs.readFile("file1.txt","utf-8", (err,data)=> {

        if(err) throw err;
        
        console.log("Async First loop at",i, data)

        for(let i=0; i<5; i++)
{
    data = fs.readFileSync("file1.txt","utf-8");
    console.log("Sync Between Async For Loop at ",i,data);

}
    });
}

// for(let i=0; i<5; i++)
// {
//     data = fs.readFileSync("file1.txt","utf-8");
//     console.log("Sync Between Async For Loop at ",i,data);

// }

for(let i=0; i<5; i++){

    fs.readFile("file1.txt","utf-8", (err,data)=> {

        if(err) throw err;
        
        console.log("Async Second For loop at",i, data)
    });
}
                                   

