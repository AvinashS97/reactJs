
// OR,  Behind the scene :-
// import React from "react"
// React.createElement('h1', null, "Hello, World!")
// console.log(React.createElement('h1', null, "Hello, World!"))


// import {Fragment } from "react";


//? Each JSX expressions must have one parent element, which means if you try to return multiple elements, React will throw an error.

//? Each JSX tags needs to be closed. You can use self-closing tags for elements that don't have children, eg., <img src="url" />



//! React Fragments:- It allow components to return multiple elements without adding extra nodes to the DOM.

// import { Fragment } from "react";
// return <Fragment>//</Fragment>

export const App = () => {

  return (
    <>
      <NetflixSeries />

      {/* <NetflixSeries /> */}
      {/* <NetflixSeries /> */}
      {/* <NetflixSeries /> */}

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


//! Conditionals in JSX

const NetflixSeries = () => {
  const name = "The Railway Men";
  const rating = "8.5 / 10";
  const summary = "After a deadly gas leaks from a factory in Bhopal, brave railway workers risk their lives to save others in the face of an unspeakable disaster.";
  let age = 9;

  const returnGenre = () => {
    const genre = "Thrilling & Dangerous";
    return genre;
  }

  // use conditional operator to show user can watch movie or not.
  //? 1 ---> Not recommended B/c it violet the DRY (Do not Repeat Yourself ) Rule.

  // if(age<16){
  //   return (
  //     <div>
  //       <div>
  //         <img src="The Railway Man jpeg.jfif" alt="movie" width="20%" height="10%" />
  //       </div>
  //       <h2>Name: {name} </h2>
  //       <h3>Year: {2020+3} </h3>
  //       <h3>Rating: {rating} </h3>
  //       <p>Summary: {summary} </p>
  //       <p>Genre: {returnGenre()}</p >
  //       <button>Not Available</button>
  //     </div>
  //   )
  // };


  //? 2 Using Ternary Operators :- Inline COnditional Rendering

  // return (
  //   <div>
  //     <div>
  //       <img src="The Railway Man jpeg.jfif" alt="movie" width="20%" height="10%" />
  //     </div>
  //     <h2>Name: {name} </h2>
  //     <h3>Year: {2020 + 3} </h3>
  //     <h3>Rating: {rating} </h3>
  //     <p>Summary: {summary} </p>
  //     <p>Genre: {returnGenre()}</p >
  //     {/* <button> {age >= 18 ? "Watch Now" : "Not Available"} </button> */}
  //   </div>
  // )

  //? 3 Conditional Attributes:

  // let canWatch = "Not Available";
  // if(age>= 16) canWatch = "Watch Now" ;


  // return (
  //   <div>
  //     <div>
  //       <img src="The Railway Man jpeg.jfif" alt="movie" width="20%" height="10%" />
  //     </div>
  //     <h2>Name: {name} </h2>
  //     <h3>Year: {2020 + 3} </h3>
  //     <h3>Rating: {rating} </h3>
  //     <p>Summary: {summary} </p>
  //     <p>Genre: {returnGenre()}</p >
  //     <button> {canWatch} </button>
  //   </div>
  // )




  //? 4 

  const canWatch = () => {
    if (age >= 18 ) return "Watch Now";
    return "Not Available"
  }

  return (
      <>
        <div>
          <img src="The Railway Man jpeg.jfif" alt="movie" width="20%" height="10%" />
        </div>
        <h2>Name: {name} </h2>
        <h3>Year: {2020 + 3} </h3>
        <h3>Rating: {rating} </h3>
        <p>Summary: {summary} </p>
        <p>Genre: {returnGenre()}</p >
        <button> {canWatch()} </button>
      </>
    )
};