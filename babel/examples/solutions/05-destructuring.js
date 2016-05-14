const props = {
  loading: true,
  onClick: ({ target: { value: text } }) => {
    console.log(text);
  }
}

const { loading, onClick, foo: bar = 42 } = props;

console.log('OBJECT');
console.log(loading);
console.log(onClick);
console.log(bar);

const list = [42, 43];
const [a = 1, b = 2, c = 3, d] = list;

console.log('\nARRAY');
console.log(a);
console.log(b);
console.log(c);
console.log(d);
