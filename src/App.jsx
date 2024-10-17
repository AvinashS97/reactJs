
// OR,  Behind the scene :-
// import React from "react"
// React.createElement('h1', null, "Hello, World!")

// import {Fragment } from "react";

// console.log(React.createElement('h1', null, "Hello, World!"))

//? Each JSX expressions must have one parent element, which means if you try to return multiple elements, React will throw an error.

//? Each JSX tags needs to be closed. You can use self-closing tags for elements that don't have children, eg., <img src="url" />


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

const NetflixSeries = () => {
  return (
    <div>
      <div>
        <img src="The Railway Man jpeg.jfif" alt="movie" width="20%" height="10%" />
      </div>
      <h2>Name: The Railway Man</h2>
      <h3>Rating: 8.5</h3>
      <p>Summary: After a deadly gas leaks from a factory in Bhopal, brave railway workers risk their lives to save others in the face of an unspeakable disaster.</p>
    </div>
  )
};


      // React Fragments:- It allow components to return multiple elements without adding extra nodes to the DOM.
            // import { Fragment } from "react";
            // return <Fragment>//</Fragment>