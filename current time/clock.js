function clock(){
     var res=document.getElementById("clock");

    var dateTime = new Date();

    var hour = dateTime.getHours();
    var minuts = dateTime.getMinutes();
    var second = dateTime.getSeconds();

     var result = hour+":"+minuts+":"+second;


res.innerHTML=result;







}
setInterval(clock,1000);