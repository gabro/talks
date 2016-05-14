// default arguments
function sum(x, y = 42) {
  return x + y;
}

sum(2, 3); // 5
sum(2);    // 44

// varargs
function inc(...args) {
  return args.map(x => x + 1);
}
console.log(inc(1, 2, 3, 4));

// spread operator
console.log(1, 2, 3);
console.log(...[1, 2, 3]);
