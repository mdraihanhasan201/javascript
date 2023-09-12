const display =document.getElementById("display");


function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showposition);
    }
    else{
        display.innerHTML("geolocation is not avaleable");

    }
    function showposition(position){
        display.innerHTML="latitude:"+position.coords.latitude+ "<br/> longitude:"+
        position.coords.longitude;
    }
}

