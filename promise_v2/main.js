const paymentSuccessful = true;
const marks = 80;

function enroll() {
    console.log("course enrollment is processing");

    let promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (paymentSuccessful) {
                resolve();
            } else {
                reject("payment failed");
            }
        }, 2000);
    });

    return promise;
}

function progress() {
    console.log("progressing is processing");
    let promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (marks >= 45) {
                resolve();
            } else {
                reject("failed to pass the examination");
            }
        }, 3000);
    });

    return promise;
}

function getCertificate() {
    console.log("get certificate is processing");
    let promise = new Promise(function(resolve) {
        setTimeout(function() {
            resolve("congrats! you got the certificate");
        }, 2000);
    });

    return promise;
}

enroll()
    .then(progress)
    .then(getCertificate)
    .then(function(value) {
        console.log(value);
    })
    .catch(function(err) {
        console.error(err);
    });
