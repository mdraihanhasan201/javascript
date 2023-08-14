let clickme = document.getElementById("clickme");
let reset = document.getElementById("reset")


clickme.onclick = function(){
    var birthday = document.getElementById("get-age").value;
    if (birthday == ""){
        document.getElementById("fillup").innerHTML="enter your birthday"  ;
    } else{
        let age = 2023-birthday;
        document.getElementById("get-age").value="your current age is "+age;

    }



  
    
}
reset. onclick = function(){
    location.reload();
}
