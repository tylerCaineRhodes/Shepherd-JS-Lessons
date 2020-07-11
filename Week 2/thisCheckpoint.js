// Problem 1
// Browser alerts don't allow for delays in setTimeout

var name = "Window";
var alice = {
  name: "Alice",
  sayHi: function() {
    alert(this.name + " says hi");
  }
};

var bob = { name: "Bob" };

// the method sayHi in the alice object is used for the bob object
//setTimeout(alice.sayHi.call(bob), 1000);

// ------------------------------------------
// Problem 2

var deckOfCards = {
  cardCount: 52,
  draw: function(number) {
    this.cardCount -= number;
  }
}

//var result = deckOfCards.cardCount;

deckOfCards.draw(10);
deckOfCards.draw(10);

var result = deckOfCards.cardCount; 

console.log(result);

// ------------------------------------------
// Problem 3

function isObject(other) {
  // return a boolean of whether or not isObject is the equivalent of the argument given to it
  return this === other;
}

var alex = { name: 'Alex', f: isObject };
var bob = { name: 'Alex', g: isObject };

var result1 = alex.f(alex);
var result2 = alex.f(bob);

console.log(result1);  
console.log(result2);

// --------------------------------------------
// Problem 4

// changed this from 10 to 100
var x = 100;

var puzzle = function(amount) {
  // this.x was never assigned to any value
  this.x += amount; // result
  return this.x;  // not part of original problem
};

var jane = {x: 10,
            f: puzzle};

console.log(puzzle(5));
console.log(jane.f(5));
jane.g = jane.f;
console.log(jane.g(5));

var output = jane.x;
console.log(output);

// -----------------------------------------
// Problem 5

// this is kind of unnecessary for this problem
// window simply declares a variable as global
//window.name = 'window';

var jenny = {
  name: 'Jenny',
  greet: function () {
    return "Hi I am " + this.name;
  }
}

var bobby = {
  name: 'Bobby',
  greet: jenny.greet
}

var result3 = jenny.greet();
console.log(result3);

var result4 = bobby.greet();
console.log(result4);

var result5 = jenny.greet.call(bobby);
console.log(result5);
