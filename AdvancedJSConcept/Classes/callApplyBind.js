class Cat {
  constructor(firstName) {
    this.firstName = firstName;
  }

  static getRandomCat() {
    console.log(this, 'Inside Static Method');
  }

  dance(style = 'tango') {
    console.log('this is in dance', this);
    return `Meow I am ${this.firstName} I like to ${style}`;
  }
}

const blue = new Cat('blue');
const red = new Cat('red');
const danceMethod = blue.dance;

// console.log(danceMethod.call(red));

const person1 = {
  name: 'Alice Johnson',
  address: {
    city: 'New York',
    pincode: 10001,
  },
  getNameAndPincode: function (city) {
    return `${this.name} - ${this.address.pincode} - ${city}`;
  },
};

const person2 = {
  name: 'Bob Smith',
  address: {
    city: 'Los Angeles',
    pincode: 90001,
  },
  getNameAndPincode: function () {
    return `${this.name} - ${this.address.pincode}`;
  },
};

let address1 = person1.getNameAndPincode.call(person1, 'mumbai'); // changes the context while calling
let address2 = person1.getNameAndPincode.apply(person2, ['mumbai']); // same but takes array of args
let address3 = person1.getNameAndPincode.bind(person2); // perma binds the context
let permaBindAddress3 = address3('Mumbai');

console.log(address1, 'address1');
console.log(address2, 'address2');
console.log(permaBindAddress3, 'address3');

// class Person {
//   constructor(name, city, pincode) {
//     this.name = name;
//     this.address = {
//       city: city,
//       pincode: pincode,
//     };
//   }

//   getNameAndPincode(additionalCity) {
//     return `${this.name} - ${this.address.pincode}${
//       additionalCity ? ' - ' + additionalCity : ''
//     }`;
//   }
// }

// // Create instances
// const person1 = new Person('Alice Johnson', 'New York', 10001);
// const person2 = new Person('Bob Smith', 'Los Angeles', 90001);

// // Demonstrate call()
// let address1 = person1.getNameAndPincode.call(person2, 'Mumbai');
// console.log(address1, 'address1'); // Bob Smith - 90001 - Mumbai

// // Demonstrate apply()
// let address2 = person1.getNameAndPincode.apply(person2, ['Delhi']);
// console.log(address2, 'address2'); // Bob Smith - 90001 - Delhi

// // Demonstrate bind()
// let boundGetNameAndPincode = person1.getNameAndPincode.bind(person2);
// let address3 = boundGetNameAndPincode('Kolkata');
// console.log(address3, 'address3'); // Bob Smith - 90001 - Kolkata

// // Additional demonstration with arrow function
// class PersonWithArrow {
//   constructor(name, city, pincode) {
//     this.name = name;
//     this.address = {
//       city: city,
//       pincode: pincode,
//     };
//   }

//   getNameAndPincodeArrow = (additionalCity) => {
//     return `${this.name} - ${this.address.pincode}${
//       additionalCity ? ' - ' + additionalCity : ''
//     }`;
//   };
// }

// const person3 = new PersonWithArrow('Charlie Brown', 'Chicago', 60601);

// // Demonstrating that arrow functions maintain their original 'this' binding
// let address4 = person3.getNameAndPincodeArrow.call(person2, 'Houston');
// console.log(address4, 'address4'); // Charlie Brown - 60601 - Houston
