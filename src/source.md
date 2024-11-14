
export const App = () => {
  return (
    <h1> Hello, World! </h1>    
  )
}

OR

Behind the scene :-
import React from "react"
React.createElement('h1', null, "Hello, World!")
console.log(React.createElement('h1', null, "Hello, World!"))



Each JSX expressions must have one parent element, which means if you try to return multiple elements, React will throw an error.

Each JSX tags needs to be closed. You can use self-closing tags for elements that don't have children, eg., <img src="url" />

React Fragments:- It allow components to return multiple elements without adding extra nodes to the DOM.


Dynamic Values in JSX

1: Using Variables 
You can anbed any JavaScript variable within JSX by enclosing it in curly braces. The value of the variable will be inserted into the DOM at the respective location.

2: Expressions
JSX allows you to write JS expressions inside curly braces. This includes operations, functions calls and other JavaScript expressions that produce a value.

3: Functions Calls
Functions, especially those that return JSX, can be involved directly within your JSX.

Conditionals in JSX

Use conditional operator to show user can watch movie or not.
1 ---> Not recommended B/c it violet the DRY (Do not Repeat Yourself ) Rule.

2 Using Ternary Operators :- Inline COnditional Rendering

3 Conditional Attributes:

4 Using Conditional fns..

Import and Exports
  Default Export & Import ---> A File can have only one default export.

  Named Export & Import ---> A file can have multiple named export. While importing it, the import names must be same as export name.

  Mixed Export & Import ---> A file can have One Default & Multiple Named export called Mixed Export... 

Passing JSX as Props:-

JSX value should be either an expression or a quoted JSX text.
We can pass JSX as Props.
  To access the child of parent, have to call it by {props.children}

CSS Style in JSX
    Inline CSS ---> Inline styles are applied directly to the HTML elements via the style attribute. This approach uses JavaScript objects to define CSS properties and values.

# 1. JavaScript Object Syntax

Inline styles in React are specified using JavaScript objects. Property names are written in camelCase instead of the traditional Css kebab-case.

const style = {
  backgroundColor: 'blue',
  fontSize: '16px',
};

# 2. Units
For most numeric values, you need to specify units as a strong(e.g., '16px'). Some properties, like Z-Index, can take numeric values directly.

const style = {
  padding: '10px',
  z-index: 1,
}

# 3. Performance Considerations

Defining inline styles directly within he JSX can lead to performance issues a new object is created on every render. To avoid this, define styles outside of the render method or as constrants.

const buttonStyle = {
  backgroundColor: 'blue',
  color:'white',
}

function MyButton() {
  return <button style ={buttonStyle}> click Me </button>;
}

# CSS conditional stylings in React js

You can use ternary operators to add conditional stylings to your CSS.

* Styled Components in React.js
    <npm install styled-components>