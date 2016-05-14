# [fit] _**ES2015**_
## and beyond
-
### gabriele petronella
#### software engineer @ buildo
#### twitter: __@gabro27__ / __@buildoHQ__

---

![fit](http://i.cubeupload.com/98PEr9.png)

---
# _ME_

![](http://snag.gy/ESmtd.jpg)

## [fit] Objective-C, Scala, Swift
### (JS?)

---

# Terminology

## *ECMAScript* (ES)
sounds like a skin desease, it's actually a standard

## *Javascript* (JS)
a language that implements the said standard

---

## **standard**
# [fit] Since June 2015
## **ES2015** (ES6)

---

# So, what's __wrong__ with JS?

---

# [fit] **a lot**
### like in any (used) language, to be fair

---

![inline](https://s-media-cache-ak0.pinimg.com/736x/30/b1/6e/30b16eaa7d85f22dbe976c70fe6d4ec2.jpg)

[https://www.destroyallsoftware.com/talks/wat](https://www.destroyallsoftware.com/talks/wat)

^
but to be fair, that's true for any (used) language

---

### more honest question:
## what
# *surprised me*
## as a beginner

---

# [fit] **SCOPING**

---

# POP QUIZ!

```js
var b = 4;
a = 38 + b;
var a;

console.log(a);
```

---

# What's the output?

```
a) undefined
b) 42
c) 'ReferenceError: a is not defined'
```

^
answer is b, but what it SHOULD be?

---

# What's the output?

```

b) 42

```

---

# pop quiz 2!

```js
var letters = ['a','b','c'];

for (var i = 0; i < letters.length; i++ ) {
   var letter = letters[i];
   setTimeout(function() {
     console.log(letter)
   }, 1000 * i);
}
```

---

# What's the output

```
a) a a a
b) a b c
c) c c c
```

---

# What's the output

```


c) c c c
```

---

# [fit] __this__

---

```js
								
var x = {								
  bar: function(cb) { cb(); }								
}								
var y = {
  foo: function() {
    console.log(this);   // <-----     this
    x.bar(function() {   //             !=
      console.log(this); // <-----     this
    });
  }
}

y.foo();
```

---

```js
var y = {
  foo: function() {
    console.log(this);
    var self = this; // <---- self is a way cooler name
    x.bar(function() {
      console.log(self);
    });
  }
}
```

---

![inline center](http://snag.gy/pQk7H.jpg)

---

# **a simple rule**

Whenever a function is called, we must look at the immediate left side of the brackets / parentheses “()”. If on the left side of the parentheses we can see a reference, then the value of “this” passed to the function call is exactly of which that object belongs to, otherwise it is the global object.

# [fit] [http://davidshariff.com/blog/javascript-this-keyword/](http://davidshariff.com/blog/javascript-this-keyword/)

---

![fit](http://cdn.niketalk.com/5/5c/900x900px-LL-5c617b83_Not-Sure-If-Fry-Meme-Gif.gif)

---

# Simple, right?

---

```js
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
```

---

# ES**2015**

---

## forget about **`var`**
# **`let`**
## is the new var

---

# block scoping with let

```js
for (let i = 0; i < letters.length; i++ ) {
   let letter = letters[i];
   setTimeout(function() {
     console.log(letter) // a b c
   }, 1000 * i);
}
```
---

# [fit] fat _`=>`_ beautiful

---

# `this` binding with `=>` 

```js
let y = {
  foo: function() {
    console.log(this);   // <--- this
    x.bar(() => {        //       =
      console.log(this); // <--- this
    });
  }
}
```

---

# bonus: syntax!

```js
[1, 2, 3].map(x => x + 2);
```

```
- implicit return (if single expression)
- no parenthesis (if single argument)
```

Equivalent to

```js
[1, 2, 3].map(function (x) {
  return x + 2;
});
```

---

# DEMO

---

# THANK YOU

---

# QUESTIONS?

---