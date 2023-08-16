// Listing 3-17. Extending a Class to Create a More Specific Class

class Shape {
    constructor(color) {
        this.color = color ;
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius ;
    }
}

const myCircle = new Circle("blue", 3);