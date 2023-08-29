class car{

    constructor(name,year){
        this.name=name;
        this.year=year;

        
        
    }

}
const car1=new car("toyota",2020);
console.log(`car name is ${car1.name +car1.year}`);



class person{
    constructor(name,age,home_town){
        this.name=name;
        this.age=age;
        this.home_town=home_town;

        

    }

    Play(){
        console.log(`${this.name} is playing`)
    }



}
var person1= new person("rayhan",23,"mymenshingh");
console.log(person1.Play());