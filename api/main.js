const x=document.getElementById("demo");
const btn=document.getElementById("btn")

btn.onclick=function(){
    try{
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    catch{
        x.innerHTML=err;

    }
}

function showPosition(position){
    x.innerHTML="latitude:"+position.coords.latitude+"<br/> longitude:"+
    position.coords.longitude;

}