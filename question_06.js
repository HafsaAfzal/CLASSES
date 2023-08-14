// Write a class that inherits from the person class and represents a student with a
// name, an age and a course. The class should have a constructor that takes the name,
// age and course as parameters, and a method that overrides the person’s
// introduction to include the course.
class student extends Person{
    constructor(givenName,givenAge,givenCourse){
    super(givenName,givenAge);
    this.course=givenCourse;
    }
    info(){
       let result= super.info();// it stores the method output
        return `${result} and course is ${this.course}` 
    }
}
let student1=new student("Hafsa",20,"Web Development");
console.log(student1.info());