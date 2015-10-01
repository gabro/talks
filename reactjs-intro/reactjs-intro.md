
## an introduction to
# [fit] _**reactjs**_
### gabriele petronella
#### software engineer @ buildo
#### twitter: __@gabro27__ / __@buildoHQ__

---

![inline](http://i.cubeupload.com/98PEr9.png)
## work@buildo.io

---

![inline](scala-meetup.png)

---

# HTML
![](http://thecomputerladyonline.com/wp-content/uploads/2014/10/html.jpg)

---
# HTML

```html
<!DOCTYPE html>
<html>
  <head>
    <title>This is a title</title>
  </head>
  <body>
    <p>Hello world!</p>
  </body>
</html>
```

^^
Web pages are just "structured text" o "hypertext"

---

![left](https://timenerdworld.files.wordpress.com/2012/09/berners_lee.jpg?w=600)

> I just had to take the __*hypertext*__ idea and connect it to the TCP and DNS ideas and — ta-da!— the _**World Wide Web**_
-- Tim Berners Lee

^^
It all began in the late 1990. Tim Berners Lee invents the World Wide Web

---
# The web, in the 90s

```

    ╔═══════════╗                       ┏----------┓
    ║           ║    gimme dat page     ┃          ┃
    ║           ║---------------------->┃          ┃
    ║  browser  ║                       ┃  server  ┃
    ║           ║   <html>...</html>    ┃          ┃
    ║           ║<----------------------┃          ┃
    ╚═══════════╝                       ┗----------┛
```

^^ Very simply architecture, get HTML pages by requesting them to the server

---

![fit](http://i.snag.gy/UfIMY.jpg)

---

# [fit] `<a href="/somewhere-fun">`Link!`</a>`

---

```
          ╔═══════════╗                       ┏━━━━━━┓
          ║           ║    gimme dat page     ┃          ┃
          ║           ║---------------------->┃          ┃
          ║           ║                       ┃          ┃
          ║           ║   <html>...</html>    ┃          ┃
          ║           ║<----------------------┃          ┃
          ║  browser  ║         ...           ┃  server  ┃
          ║           ║                       ┃          ┃
          ║           ║     do dat thing      ┃          ┃
          ║           ║---------------------->┃          ┃
          ║           ║                       ┃          ┃
          ║           ║   <html>...</html>    ┃          ┃
          ║           ║<----------------------┃          ┃
          ║           ║                       ┃          ┃
          ╚═══════════╝                       ┗━━━━━━┛
```
^^
web browsers are "stupid", whenever you click on a link, they just ask
for another page

---

![fit](http://cdn.wind8apps.com/wp-content/uploads/2012/12/amazon-for-windows-8-review-your-cart.png)

^^
Let's take an example, a cart

---
# Adding an element to a cart

```html



<ul>                          <ul>
  <li>An apple</li>             <li>An apple</li> 
  <li>A horse</li>    --->      <li>A horse</li>
</ul>                           <li>A dragon</li>
                              </ul>
```
^^
And very often, what a server does is a simple modification
What if browers can do the modification themselves?

---

![](http://i.giphy.com/QBpGFAXISSGCQ.gif)

---

# Javascript
### __(1995)__

---

![](http://i.imgur.com/wR3ZxfB.jpg)

^^
Not necessarily a pretty language, but it works

---
# Adding an element to a cart

```javascript

var ul = document.getElementById("cart");
var li = document.createElement("li");
li.appendChild(document.createTextNode("Four"));
ul.appendChild(li);
```

---

```
             ╔═══════════╗                       ┏━━━━━━┓
             ║           ║    gimme dat page     ┃          ┃
             ║           ║---------------------->┃          ┃
             ║           ║   <html>...</html>    ┃          ┃
             ║  browser  ║<----------------------┃          ┃
             ║           ║       script.js       ┃          ┃
             ║           ║<----------------------┃  server  ┃
             ║           ║─────┐                 ┃          ┃
             ╚═══════════╝     │                 ┃          ┃
                    ▲          │                 ┃          ┃
    <html>...</html>│          │add item         ┃          ┃
                    │          │                 ┃          ┃
               ┌────────┐      │                 ┃          ┃
               │        │      │                 ┗━━━━━━┛
               │ script │◀-----                             
               │        │                                    
               └────────┘         
```

---

![](http://i.giphy.com/1PFKJexfdpO7u.gif)

---

## So you say we can create **HTML** elements...

^^
we can do more. If I can modify an element, how about creating one?

---

# SPA
## Single-Page Applications
![](http://planethollywoodgoa.com/wp-content/uploads/2014/12/shutterstock_187218233.jpg)

---

```
                ╔═══════════╗                       ┏━━━━━━┓
                ║           ║    gimme dat page     ┃          ┃
                ║           ║---------------------->┃          ┃
                ║           ║   <html>...</html>    ┃          ┃
                ║  browser  ║<----------------------┃          ┃
                ║           ║        app.js         ┃          ┃
                ║           ║<----------------------┃          ┃
                ║           ╠─────┐                 ┃          ┃
                ╚═══════════╝     │                 ┃          ┃
                       ▲          │                 ┃  server  ┃
       <html>...</html>│          │do stuff         ┃          ┃
                       │          │                 ┃          ┃
                 ┌──────────┐     │                 ┃          ┃
                 │          │<-----                 ┃          ┃
                 │          │      gimme data       ┃          ┃
                 │  app.js  │---------------------->┃          ┃
                 │          │                       ┃          ┃
                 │          │ { data: "blah", ... } ┃          ┃
                 │          │<----------------------┃          ┃
                 └──────────┘                       ┗━━━━━━┛
```

---

# The usual suspects

![inline fit](https://d14jjfgstdxsoz.cloudfront.net/og-image-logo.png)![inline fill](http://www.invokemedia.com/wp-content/uploads/2015/07/angular.png)![inline fit](https://upload.wikimedia.org/wikipedia/en/6/69/Ember.js_Logo_and_Mascot.png)

---

# Sounds great but...

---

# Complexity!
![](https://aidontheedge.files.wordpress.com/2013/05/complexity.jpg)

---

# **Mutable** state
![](http://i.ytimg.com/vi/PTa8gs_e7qk/maxresdefault.jpg)

---

## Over the last **25 years** we've seen...

---
## Flush the page at every change

## **vs**

## Compute the changes locally
---

## Here's how the page should look like

## **vs**

## Here's how to make it

---

## In other words...

---

## Declarative

## **vs**

## Imperative

---

## and potentially...

---

## **D**eveloper E**x**perience

## **vs**

## **U**ser E**x**perience

---

# Meet **React**
![inline](https://cdn.auth0.com/blog/react-js/react.png)

^
2013

---

## DX **+** UX = **REACT**

---

# [fit] **Declarative** approach
### Conceptually re-rendering **everything** everytime

---

## [fit] **Imperative** experience
### Mutation happens behind the scene

---

# M**V**C

---

## **It's all about**
## Reusable
# [fit] Components

---

![fit](http://coenraets.org/blog/wp-content/uploads/2014/12/uimockscript.png)

---

# Our first component

```js
const Hello = React.createClass({
	render() {
	  return <div>Hello!</div>;
	}
});
```
---

# **Wait!**
# HTML inside Javascript?!

---

# Yes, almost...

---

# JSX

```html
<div>Hello</div>
```

gets translated to

```js
React.createElement("div", null, "Hello");
```

---

Details aside, there's no separation between
**templates** and **logic**

---

# Separate **CONCERNS** not **TECHNOLOGIES**

---

# Only **TWO** things can affect a component

- props 😊
- state 😖

---

# PROPS 😊

A generalization over HTML attributes

```html
<button className='button inactive'>Click</button>
```

gets translated to

```js
React.createElement(
  "button",
  { className: 'button inactive' }, // <--- props
  "Click"
);
```

---

## OUR FIRST COMPONENT ACCEPTING PROPS

```js
const Greeter = React.createClass({
  render() {
	return <div>Hello {this.props.name}!</div>;
  }                           ^
});                           |
                  just a javascript variable
```

---

## and then use it like

```js

<Greeter name='Gabriele' />
           ^
           |_____________ passing a prop

```

---

# Can this be **efficient**?

---

## You write

```js
render() {
  return (
    <div>
    	<span>Hello {this.props.userName}!</span>
    </div>
  );
}
```

---

## React computes

```js
renderA: <div><span>Hello Gabriele!</span></div>
renderB: <div><span>Hello Irina!</span></div>

=> [replaceAttribute textContent 'Hello Irina']

                         ^
                         |
                         |
                 a state mutation, i.e.
             the horrible thing you want to
                 avoid writing by hand
               

```

---

# State 😖

A component can have an internal state

# **Avoid** when you can!

---

## Our first **stateful** component 😖

---

```js
const Counter = React.createClass({
	getInitialState() { return { count: 0 }; },

	increaseCount() {
      this.setState({ count: this.state.count + 1 });
	},          ^
                |_______________ triggers a re-render 
	render() {
	  return (
		<div>
			<span>{this.state.count}</span>
			<button onClick={this.increaseCount}>Increase</button>
		</div>
	  );
	}
});
```
---

# THAT'S IT

---

# [fit] React RECAP

Everything is a **component**

Components accept **props**

Components can have a **state** 😖

---

# **DEMO**

---

# THANKS

---

# [fit] `<Speaker questions={?} />`
