//  var clickme=document.getElementById("clickme");
//  let h1 = document.createElement("h1")
//  clickme.onclick=function(){
//     let brithday=prompt("enter your birthday")
   
//    let textnode=h1.innerHTML("your age is"+brithday);
//    h1.appendChild(textnode);

   



//  }birthday

function ageindays(){
    var birthday = prompt("enter your day")
    var ageindayss= (2023-birthday)*365;
    var h1 = document.createElement("h1");
    var textanswer=document.TEXT_NODE("your age is "+ageindays+"years old");
    h1.setAttribute("id","ageindays")
    h1.appendChild(textanswer);
    document.getElementById("get-age").appendChild(h1)

}