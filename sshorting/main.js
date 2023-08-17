const names =["rayhan","korim","aman","nodi"]
let stort =names.sort();
console.log(stort);


const nuber = ["10","9","8","7","6","5","4","3","2","1"]
console.log(nuber.sort(function(a,b){
    return(a-b);
    

}));
console.log(nuber.sort(function(a,b){
    return(b-a);
}));


// ###############leap year #########


function leapyear(year){
    if((year% 4 == 0 && (year %  100 != 0)) || ((year) % 400==0)){
        console.log(`${year} is a Leap Year`);
    }
    else{
        console.log(` ${year} isn't a Leap Year ` );
    }

}
 leapyear(2028);



