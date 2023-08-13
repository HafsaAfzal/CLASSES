// Write a class that represents a rectangle with a width and a height. The class should
// have a constructor that takes the width and height as parameters, and two methods
// that return the area and the perimeter of the rectangle.
class rectangle{
    constructor(givenWidth,givenHeight){
        this.width=givenWidth;
        this.height=givenHeight;
    }
    area(){
        return `area of rectangle is  ${this.width*this.height}`
    }
    perimeter(){
        return `perimeter of rectangle is ${2(this.width+this.height)}`
    }
}
const rec = new rectangle(5,10);
console.log(rec.area(),rec.perimeter());