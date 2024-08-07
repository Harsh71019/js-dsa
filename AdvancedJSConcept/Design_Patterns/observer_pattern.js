class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter((o) => o !== fn);
  }

  notify(data) {
    this.observers.forEach((fn) => fn(data));
  }
}

const observers1 = (data) => console.log('Observer1', data);
const observers2 = (data) => console.log('Observer2', data);
const observers3 = (data) => console.log('Observer3', data);

const subject = new Subject();

subject.subscribe(observers1);
subject.subscribe(observers2);
subject.subscribe(observers3);
