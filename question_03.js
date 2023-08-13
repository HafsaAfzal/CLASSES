// Write a class that represents a person with a name and an age. The class should
// have a constructor that takes the name and age as parameters, and a method that
// returns the person’s introduction.
class Person{
    constructor(givenName,givenAge){
        this.name=givenName;
        this.age=givenAge;
     }
     info(){
        return `Hi my name is ${this.name} and my age is ${this.age}`
     }
}
const person1=new Person("Hafsa",20);

console.log(person1.info());        
    
