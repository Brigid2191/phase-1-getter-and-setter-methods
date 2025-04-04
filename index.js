// index.js

class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    // Getter for diameter
    get diameter() {
      return this.radius * 2;
    }
  
    // Setter for diameter
    set diameter(diameter) {
      this.radius = diameter / 2;
    }
  
    // Getter for circumference
    get circumference() {
      return Math.PI * this.diameter;
    }
  
    // Setter for circumference
    set circumference(circumference) {
      this.radius = circumference / (Math.PI * 2);
    }
  
    // Getter for area
    get area() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  
    // Setter for area
    set area(area) {
      this.radius = Math.sqrt(area / Math.PI);
    }
  }
  
  // Creating an instance of Circle for testing
  const circle = new Circle(10);
  console.log(`Radius: ${circle.radius}`); // 10
  console.log(`Diameter: ${circle.diameter}`); // 20
  console.log(`Circumference: ${circle.circumference}`); // 62.83185307179586
  console.log(`Area: ${circle.area}`); // 314.1592653589793
  
  // Modifying the circle by setting diameter
  circle.diameter = 30;
  console.log(`New Radius: ${circle.radius}`); // 15
  console.log(`New Circumference: ${circle.circumference}`); // 94.247787
  
  // Modifying the circle by setting area
  circle.area = 706.858; // Approximate area for radius 15
  console.log(`New Radius after setting area: ${circle.radius}`); // ~15
  
  // Export class for testing
  module.exports = Circle;
  