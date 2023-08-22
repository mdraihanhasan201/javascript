const person ={
    first_name :"rayhan",
    last_name:" islam",
      old:"23",

     full_name:function (){
        return "my name is "+this .first_name + this.last_name +" "+"i am "+this.old+" years old";

    }
}
console.log(person.full_name());