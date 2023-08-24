const prompt=require("prompt-sync")();




const paymentSuccess = prompt("payment successfully done? say in true and false  : ")





const marks = prompt("enter your marks:  ");

function enroll(callback) {
  console.log("cource enrollment is in progress....");

  setTimeout(function () {
    if (paymentSuccess) {
      callback();
    } else {
      console.log("Payment Failed");
    }
  }, 2000);
}

function progress(callback) {
  console.log("course on progress....");

  setTimeout(function () {
    if (marks >= 50) {
      callback();
    } else {
      console.log("you dont have  enough marks to get certificate");
    }
  }, 3000);
}

function getCertificate() {
  console.log("your certificate is processing");

  setTimeout(function () {
    console.log(" congrats!you got the certificate.")
  }, 2000);
}

enroll(function(){
    progress(getCertificate);
});
