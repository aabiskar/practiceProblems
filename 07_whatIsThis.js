const obj = {
  value: 5,
  increment: function(logVal) {
    console.log(logVal);
    this.value++; // shorthand for 'this.value = this.value + 1'
  }
};

const obj2 = {
  value: 7,
  decrement: function(logVal) {
    console.log(logVal);
    this.value--; // shorthand for 'this.value = this.value - 1'
  }
}

obj1.increment();
console.log(obj1.value);

obj2.decrement();
console.log(obj2.value);

// call, invoke function with explicitly altered context
obj1.increment.call(obj2, 'log me!');

// apply, 'call' with arguments in array
obj2.decrement.apply(obj1, ['log me too!']);

// bind, a function saved for later where 'this' is set and provided arguments as well
const boundFunc = obj1.increment.bind(this, 'log me, I\'m bound!');
boundFunc();

// when you run "new" on a class what do you think the "this" is in the constructor?
