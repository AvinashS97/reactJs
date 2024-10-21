
// OR,  Behind the scene :-
// import React from "react"
// React.createElement('h1', null, "Hello, World!")
// console.log(React.createElement('h1', null, "Hello, World!"))

// import NetflixSeries, {Footer, Header} from "./components/NetflixSeries";
import NetflixSeries from "./components/NetflixSeries";


// import {Fragment } from "react";


//? Each JSX expressions must have one parent element, which means if you try to return multiple elements, React will throw an error.

//? Each JSX tags needs to be closed. You can use self-closing tags for elements that don't have children, eg., <img src="url" />



//! React Fragments:- It allow components to return multiple elements without adding extra nodes to the DOM.
// import { Fragment } from "react";
// return <Fragment>//</Fragment>

export const App = () => {

  return (
    <>
      {/* <Header /> */}
      <NetflixSeries />
      {/* <Footer /> */}

    </>
  )
};

//! Dynamic Values in JSX
//* 1: Using Variables 
//? You can anbed any JavaScript variable within JSX by enclosing it in curly braces. The value of the variable will be inserted into the DOM at the respective location.

//* 2: Expressions
//? JSX allows you to write JS expressions inside curly braces. This includes operations, functions calls and other JavaScript expressions that produce a value.

//* 3: Functions Calls
//? Functions, especially those that return JSX, can be involved directly within your JSX.