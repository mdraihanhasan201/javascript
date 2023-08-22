const guess =Math.floor(Math.random()*100) ;
console.log(guess);

function getmax(min ,max){
    console.log(Math.floor((Math.random()*(max- min + 1))+min ));
}
getmax(10,22);