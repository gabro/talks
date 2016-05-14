// default arguments
function sum(x, y) {
  var y = y || 42;
  return x + y;
}

sum(2, 3); // 5
sum(2);    // 44

// varargs
function inc() {
  var args = Array.prototype.slice.call(arguments);
  return args.map(function(x) {
    return x + 1;
  });
};
console.log(inc(1, 2, 3, 4));

// spread operator
console.log(1, 2, 3);
console.log.apply(console, [1, 2, 3]);
