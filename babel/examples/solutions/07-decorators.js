function log(target, name, { value: f }) {
  target[name] = function (...args) {
    const ret = f(...args);
    console.log(ret);
    return ret;
  };
  return target[name];
};

class Calculator {
  @log
  sum(x, y) {
    return x + y;
  }

  @log
  sub(x, y) {
    return x - y;
  }
}

const calc = new Calculator()
calc.sum(40, 2);
calc.sub(40, 2);
