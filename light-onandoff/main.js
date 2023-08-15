var left=document.getElementById("left")
var image = document.getElementById("my-image")

left.onclick = function(){
    
    image.src="./download.jpeg";
}

var right=document.getElementById("right")
right.onclick = function(){
   
    image.src="./light-bulb-2-1427493.jpg";
    // document.getElementById("my-image").src="/download.jpeg";
}