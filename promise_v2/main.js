

const paymentSuccessfull = true;
const marks=80;


function enroll(){
    console.log("course inrollment is processing");

    let promice =new promice(function(resolve,reject){
        setTimeout(function(){
            if(paymentSuccessfull){
                resolve()
                }else{
                    reject("payment failed");
    
            }
        },2000);
       
    });

    return promice;

   

};


function progress(){

    console.log("progressing is processing");
    let promice =new promice(function(resolve,reject){
        setTimeout(function(){
            if(marks>=45){
                resolve()
                }else{
                    reject("failed to pass the examination");
                    }
    })
   
    },3000);
        
    return promice;
    
};

function getcertificate(){
    console.log("get certificate is processing");
    let promice=new promice(function(resolve){
        setTimeout(function(){
            resolve("congrats! you got the  certificate");
                   
        })
       
    },2000);

}

enroll()
     .then(progress)
     .then(getcertificate)
     .then(function(value){
    console.log(value);
})
.catch(function(err){
    console.error(err);
})








