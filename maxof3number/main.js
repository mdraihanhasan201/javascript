const prompt = require('prompt-sync')();
function max (a,b,c){
    if(a>b && a>c){
        console.log(" a is max");


    }
    else if (b>c && b>a){
        console.log("b is max");



    }
    else if (c>a && c>b){
        console.log("c is max");
    }
}
max(300,10,6);