// what will scoping1, scoping2 and scoping3 return respectively, what about the second time all three are run?
var j = 'heyyy';

function scoping1() {
  var j = 'yo';
  var i = ' boo!';
  return j + i;
}

function scoping2() {
  j = 'yo';
  return j;
}

function scoping3() {
  return j;
}

// what will the result of running the below code?
for(var i = 4; i > 0; i--) {
  console.log(i);
}

console.log(i);

for(k = 2; k > 0; k--) {
  console.log(k);
}

console.log(k);

// will this work, why not?
if(true) {
  const blah = 'blah';
  let hey = 'hey';
}
console.log(blah, hey);

// sidenote, when might you still want to use 'var' in ES6?
