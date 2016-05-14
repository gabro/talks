const letters = ['a','b','c'];

for (let i = 0; i < letters.length; i++ ) {
   const letter = letters[i];
   setTimeout(() => console.log(letter), 1000 * i);
}
