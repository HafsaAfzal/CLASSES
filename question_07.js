// Write a class that inherits from the rectangle class and represents a square with a
// side. The class should have a constructor that takes the side as a parameter, and two
// methods that override the area and perimeter of the rectangle to use the side
// instead of the width and height.
class square extends rectangle{
    constructor(givenSide){
        this.side=givenSide;
    }
    area(){
        super.area()
        return `area of a square ${(this.side)^4}`
    }
    perimeter(){
        super.perimeter();
        return `perimenter of a square ${(this.side)*4}`
    }
}