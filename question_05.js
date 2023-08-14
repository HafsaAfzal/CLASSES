//Write a class that represents a circle with a radius. The class should have a
// constructor that takes the radius as a parameter, and three methods that return the
// diameter, the circumference and the area of the circle.
class circle {
    constructor(givenRadius){
        this.radius=givenRadius;
    }
    diameter(){
         let dia=this.radius*2;
         return `diameter of a circle is ${dia}`
    }
    circumference(){
        let cir=2*3.142*this.radius;
        return `circumferenc of a circle is ${cir}`
    }
    area(){
        return `area of a circle is ${(3.142*(this.radius)^2)}`

    }
}
let circle1=new circle(4);
console.log(circle1.diameter());
console.log(circle1.circumference());
console.log(circle1.area());