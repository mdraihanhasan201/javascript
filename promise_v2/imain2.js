const paymentSuccessful = true;
const marks =80;


function enroll(){
    console.log("enrollment is processing....")


    const myPromice =new promice(function(resolve,reject){
       setTimeout(function(){
        if (paymentSuccessful) {
            resolve();

        }
        else{
            reject("payment failed")
        }
           

       })

    })
    return myPromice;
}