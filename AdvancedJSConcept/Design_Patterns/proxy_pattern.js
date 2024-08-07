let cat = {
  name: 'cattie',
  age: 5,
  breed: 'socctitsh',
};

let handler = {
  get: function (obj) {
    return 'lol';
  },

  set: function (obj, property, value) {
    obj[property] = 'nope';
  },
};

let catProxy = new Proxy(obj, handler);
