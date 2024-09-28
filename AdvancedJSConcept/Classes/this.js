// Object with methods
const person = {
  name: 'Conan',
  city: 'Los Angeles',
  sing() {
    return `${this.name} is singing in ${this.city}`;
  },
  // Arrow function to demonstrate lexical 'this'
  greet: () => {
    console.log(this); // 'this' refers to the global object or undefined in strict mode
    return `Hello from ${this.name}`; // Will not work as expected
  },
};

console.log(person.sing()); // Conan is singing in Los Angeles

// Demonstrating 'this' binding issue
let singMethod = person.sing;
console.log(singMethod()); // undefined is singing in undefined

// Fixing 'this' binding
let boundSing = person.sing.bind(person);
console.log(boundSing()); // Conan is singing in Los Angeles

// Global function
function greet() {
  console.log(this); // In browser: Window, in Node: global
  return 'Hi there!';
}

console.log(greet());

// Object method to demonstrate 'this'
const obj = {
  name: 'Test Object',
  whatIsThis() {
    console.log('Inside whatIsThis, this is:', this);
    return this.name;
  },
};

console.log(obj.whatIsThis()); // Inside whatIsThis, this is: {name: 'Test Object', whatIsThis: ƒ}
// Test Object

// Class definition
class Cat {
  constructor(firstName) {
    this.firstName = firstName;
  }

  static getRandomCat() {
    console.log('Inside static method, this is:', this);
    return new Cat('Random' + Math.floor(Math.random() * 100));
  }

  dance(style = 'tango') {
    return `Meow, I am ${this.firstName}, and I like to ${style}`;
  }
}

let meowCat = new Cat('Einstein');
console.log(meowCat.dance('salsa')); // Meow, I am Einstein, and I like to salsa

// Demonstrating 'this' binding issue with class methods
let catDanceMethod = meowCat.dance;
console.log(catDanceMethod('hiphop')); // Meow, I am undefined, and I like to hiphop

// Fixing 'this' binding for class methods
let boundDance = meowCat.dance.bind(meowCat);
console.log(boundDance('hiphop')); // Meow, I am Einstein, and I like to hiphop

// Static method call
console.log(Cat.getRandomCat()); // Inside static method, this is: class Cat {...}
// Cat {firstName: "Random<some number>"}

// Demonstrating 'this' in different contexts
function demonstrateThis() {
  console.log('In global function:', this);

  const obj = {
    method() {
      console.log('In object method:', this);

      const arrow = () => {
        console.log('In arrow function:', this);
      };
      arrow();
    },
  };

  obj.method();

  class MyClass {
    constructor() {
      console.log('In constructor:', this);
    }

    method() {
      console.log('In class method:', this);
    }
  }

  const instance = new MyClass();
  instance.method();
}

demonstrateThis();
