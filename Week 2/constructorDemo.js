//use quokka for a clear demo of console logged values. Turn quokka on for this demo

//to demonstrate constructors, comment line 47 in and out and note how the value of line 49 changes.

//leave 47 commented out and comment out line 44, and explain those changes as well.

//comment the constructor assignments on 44 and 47 back in to see how you can create new subclasses based on them. 

//feel free to create new subclasses or instantiations to further demo this behavior.


// Shape - superclass--------------------------------------------------------------
function Shape() {
  this.x = 0;
  this.y = 0;
}

// superclass method-----------------------------------------------------------------------
Shape.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
  console.info('Shape moved.');
};
//--------------------------------------------------------------------------------------


// Rectangle - subclass -----------------------------------------------------------------
function Rectangle() {
  Shape.call(this); // call super constructor.
}
Rectangle.prototype = Object.create(Shape.prototype);
// Rectangle.prototype.constructor = Rectangle;----------------------------------------


function Circle() { //create circle class-----------------------------------------------------------------
  Rectangle.call(this);

  this.edges = 'none'
}
Circle.prototype = Object.create(Rectangle.prototype); //exend to Rectangle's methods
//------------------------------------------------------------------------------------------------------

var shap = new Shape();//Parent and superClass
console.log(shap)


var rect = new Rectangle();//didn't reset Rectangle.prototype.constructor = Rectangle
console.log(rect)


var circ = new Circle(); //circle is a subclass of Rectangle
console.log(circ)


Rectangle.prototype.constructor = Rectangle; //assign constructor to Rectangle

console.log(circ)

Circle.prototype.constructor = Circle; //Assign constructor to circle

console.log(circ)
