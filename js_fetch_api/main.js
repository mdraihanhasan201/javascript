const display = document.getElementById("display");


function getData(){
    
    fetch("http://127.0.0.1:5500/js_fetch_api/data.txt").then(res => res.text())
    .then((data) =>{
        display.innerHTML=data;
    });
}