var letters = ['a', 'b', 'c'];

for (var i = 0; i < letters.length; i++ ) {
   var letter = letters[i];
   setTimeout(function() {
     console.log(letter)
   }, 1000 * i);
}


// var letters = ['a', 'b', 'c'];

// var _loop = function _loop(i) {
//    var letter = letters[i];
//    setTimeout(function () {
//       return console.log(letter);
//    }, 1000 * i);
// };

// for (var i = 0; i < letters.length; i++) {
//    _loop(i);
// }

