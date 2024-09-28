class Cat {
  constructor(firstName) {
    this.firstName = firstName;
  }

  superGreet() {
    console.log(`#1 I am ${this.firstName}`);

    setTimeout(function () {
      console.log(`#2 I am ${this.firstName}`);
    });

    setTimeout(() => {
      console.log(`#3 I am ${this.firstName}`);
    });
  }
}

let kitty = new Cat('Jane');
kitty.superGreet();
