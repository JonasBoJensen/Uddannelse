// from: http://eloquentjavascript.net/05_higher_order.html
  
// *** SUPPORTING FUNCTIONS ***  
// - array: array of ancestors objects
// - test: unary function that returns boolean
// => returns a new array containing only those elements 
//    of the input array that passed the test
function filter(array, test) {
  var passed = [];
  for (var i = 0; i < array.length; i++) {
    if (test(array[i]))
      passed.push(array[i]);
  }
  return passed;
}

// - array: array of ancestors objects
// - transform: unary function
// => returns a new array, where each element is the result of calling the 
//    transform function on the corresponding element of the input array
function map(array, transform) {
  var mapped = [];
  for (var i = 0; i < array.length; i++)
    mapped.push(transform(array[i]));
  return mapped;
}

function reduce(array, combine, start) {
  var current = start;
  for (var i = 0; i < array.length; i++)
    current = combine(current, array[i]);
  return current;
}
