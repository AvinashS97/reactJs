
// OR,  Behind the scene :-
// import React from "react"
// React.createElement('h1', null, "Hello, World!")

// import {Fragment } from "react";

// console.log(React.createElement('h1', null, "Hello, World!"))

//? Each JSX expressions must have one parent element, which means if you try to return multiple elements, React will throw an error.

//? Each JSX tags needs to be closed. You can use self-closing tags for elements that don't have children, eg., <img src="url" />



// React Fragments:- It allow components to return multiple elements without adding extra nodes to the DOM.
      
            // import { Fragment } from "react";
            // return <Fragment>//</Fragment>

export const App = () => {

  return (
    <>
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
    </>
  )
};

//Dynamic Values in JSX


// Using Variables, Using Expressions
const NetflixSeries = () => {
  const name = "The Railway Men";
  const rating= "8.5 / 10";
  const summary = "After a deadly gas leaks from a factory in Bhopal, brave railway workers risk their lives to save others in the face of an unspeakable disaster.";



  return (
    <div>
      <div>
        <img src="The Railway Man jpeg.jfif" alt="movie" width="20%" height="10%" />
      </div>
      <h2>Name: {name} </h2>
      <h3>Year: {2020+3} </h3>
      <h3>Rating: {rating} </h3>
      <p>Summary: {summary} </p>
    </div>
  )
};





  