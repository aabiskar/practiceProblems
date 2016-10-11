// fix the below to work as expected
function orderOfOps(val1, val2) {
  if(val1 === 'silly' && val2 === 'happy' || val2 === 'joyous') {
    return 'glee';
  } else {
    return 'dismay';
  }
}

// what do you think these produces???
function shortCircuitOperators1(val1, val2) {
  return val1 === 'short circuit operators are cool right?' && val2 || val1 === 'holla' && 'hey' || val1;
}
