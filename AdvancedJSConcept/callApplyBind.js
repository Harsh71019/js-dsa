const conan = {
  name: 'Harsh',
  city: 'los angeles',
  sing: function () {
    return `${this.name}`;
  },
};

let lisa = {
  name: 'lisa',
  city: 'mumbai',
};

conan.sing.bind(lisa);
