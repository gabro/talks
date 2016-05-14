var props = {
  loading: true,
  onClick: function (e) {
    console.log(e.target.value);
  }
};

var loading = props.loading;
var onClick = props.onClick;
var bar = props.foo || 42;

console.log('OBJECT');
console.log(loading);
console.log(onClick);
console.log(bar);

var list = [42, 43];
var a = list[0] || 1;
var b = list[1] || 2;
var c = list[2] || 3;
var d = list[3];

console.log('\nARRAY');
console.log(a);
console.log(b);
console.log(c);
console.log(d);
