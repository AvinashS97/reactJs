
// OR,  Behind the scene :-
// import React from "react"
// React.createElement('h1', null, "Hello, World!")

// console.log(React.createElement('h1', null, "Hello, World!"))

//? Each JSX expressions must have one parent element, which means if you try to return multiple elements, React will throw an error.

//? Each JSX tags needs to be closed. You can use self-closing tags for elements that don't have children, eg., <img src="url" />


export const App = () =>{
  return <h2>Name: The Railway Man</h2>,
  <h3>Rating: 8.5</h3>
  <p>After a deadly gas leaks from a factory in Bhopal, brave railway workers risk their lives to save others in the face of an unspeakable disaster.</p>
}