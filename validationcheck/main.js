const btn =document.getElementById("submit")
const demo=document.getElementById("demo")
const input = document.getElementById("input")

btn.onclick=function(){
    if(!input.checkValidity()){
        demo.innerHTML=input.validationMessage;
    }
    else{
        demo.innerHTML="your number is accepted!"

    }
}