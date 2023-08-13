// Take the following steps to create a person class, and print instances of friends'
// names:
// a. Create a class for Person including the constructor for firstname and
// lastname.
// b. Create a variable and assign a value of the new Person object using your
// friend's first and last names.
// c. Now add a second variable with another friend's name using their first name
// and last name.
// d. Output both friends into the console with a greeting of hello.
class person{
    constructor (givenFirstName,givenLastName){
        this.firstName=givenFirstName;
        this.lastName=givenLastName;
    }
}
friend1=new person(" Syeda Aiman","Rashid");
console.log( `Hello! ${friend1}`);
friend2=new person("Nabiha","Jamali");
console.log(`Hello! ${friend2}`)