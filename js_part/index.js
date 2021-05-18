function callingStack(){
    let x=12;
    function fxnone(){
    x=199;
console.log("mrindia is here",x);

function fxntwo(){
    let y=99;

    console.log("fxntwo is here",x,y);

}

fxntwo();

}

fxnone();
console.log("coming last stack fxn",x)
}

callingStack();

