const vowel =['a','e','i','o','u','A','E','I','O','U'];

function countvowels( sentence){
    let counter = 0;

    let letter = Array.from(sentence);
    letter.forEach(function(value){
        if (vowel.includes(value)){
            counter++
        }

    })
    console.log(counter);
    


    // for(let i=0; i<= letter.length;i++){
        
    // }
    
}
countvowels("hey dude i am rayhan islam tushar")

