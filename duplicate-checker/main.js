//  ##########duplicate number checker##########

const number =[1,2,3,4,5,7,4,7,8, 10,10]

var duplicates = number.filter (function(value , index,array){
    return array.indexOf( value) !==index;


} )
console.log(duplicates);




// ################# unique number checker ######

const numbers =[1,2,3,4,5,7,4,7,8, 10,10]

var uniquenumber=numbers.filter(function(value,index,array){
    return array.indexOf(value) == index
})
console.log("unique",uniquenumber );
