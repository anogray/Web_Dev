let fs = require("fs");
let frp = fs.promises.readFile("file1.txt");
function scb(data) {
    console.log("Inside ")
    console.log("sd" + data);
}
function fcb(err) {
    console.log("inside fcb")
    console.log(err);
    return 10;
}
frp.then(scb, fcb)
    .then(function (data) {
        console.log("also",data)
    }, function (err) {
        console.log("inside  second then fcb")
        console.log(err)
    });