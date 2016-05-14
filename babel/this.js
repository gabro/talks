'use strict';


var x = {
  bar: function(cb) { cb(); }
}

var y = {
  foo: function() {
    console.log(this);
    x.bar(function() {
      console.log(this);
    });
  }
}

// class Foo {
//   foo() {
//     console.log(this);
//     x.bar(() => {
//       console.log(this);
//     });
//   }
// }

y.foo()


var bigRoom = {
  size: 'big',
  logSize: function () {
    console.log(this.size);
  }
};

var smallRoom = {
  size: 'small'
};

smallRoom.logSize = bigRoom.logSize;
bigRoom.logSize(); // ??
smallRoom.logSize(); // ??

var letters = ['a','b','c'];

for (var i = 0; i < letters.length; i++ ) {
   var letter = letters[i];
   setTimeout(function() {
     console.log(letter)
   }, 1000 * i);
}
