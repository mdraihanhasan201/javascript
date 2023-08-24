// const car=function (name,model,price){
//     this.name =name;
//     this.model=model;
//     this.price=price;

//     this.full_details= function(){
//         return `Name: ${this.name} \n Model:${this.model}\n Price :${this.price}` ;

//     }
// }

// const car1= new car("toyota","r55v12",20000000000);
// const car2=new car("audi","mtr444v12",4444333);
// console.log(car2);

// car.prototype.mailes="Toyota vehicle is 200,000-250,000 miles";

// console.log(car1.mailes);




class person{
    constructor( name , age, birthday) {
        this.name=name;
        this.age=age;
        this.birthday=birthday;
        

        this.fullname=()=>{
            return console.log(`my name is ${name}and i am ${age} years old. my birthday is ${birthday}`);


        }
    }


}
const person1=new person("tuhin",24,1998);



console.log(person1);