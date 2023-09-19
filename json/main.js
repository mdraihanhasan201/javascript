// #### json can transfer data server to web#########


// let text =`{"emoloyee":[
//     {"name":"rayhan","age","23","village":"batajur"}
// ]

// }`;

// const obj = JSON.parse(text);
// console.log(onj);

// console.log(JSON.parse(text));

let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

 const obj =(JSON.parse(text));
 var index = obj.employe[0];
 console.log(index)



 