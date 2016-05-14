function log(x) {
  console.log(x);
  return x;
}

var Calculator = {};
Calculator.prototype.sum = function(x, y) {
  return log(x + y);
Calculator.prototype.sub = function(x, y) {
  return log(x - y);
};

var calc = new Calculator;
calc.sum(40, 2);
calc.sub(40, 2);
