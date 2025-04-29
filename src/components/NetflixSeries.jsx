import seriesData from '../api/seriesData.json'
import { SeriesCard } from './SeriesCard'

// const NetflixSeries = () => {
//   const name = "The Railway Men";
//   const rating = "8.5 / 10";
//   const summary = "After a deadly gas leaks from a factory in Bhopal, brave railway workers risk their lives to save others in the face of an unspeakable disaster.";
//   let age = 19;

//   const returnGenre = () => {
//     const genre = "Thrilling & Dangerous";
//     return genre;
//   }

//! Conditionals in JSX

// use conditional operator to show that user can watch movie or not.

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

//? 3 Conditional Attributes
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

//   const canWatch = () => {
//     if (age >= 18) return "Watch Now";
//     return "Not Available"
//   }

//   return (
//     <>
//       <div>
//         <img src="The Railway Man jpeg.jfif" alt="movie" width="20%" height="10%" />
//       </div>
//       <h2>Name: {name} </h2>
//       <h3>Year: {2020 + 3} </h3>
//       <h3>Rating: {rating} </h3>
//       <p>Summary: {summary} </p>
//       <p>Genre: {returnGenre()}</p >
//       <button> {canWatch()} </button>
//     </>
//   )
// };

//! Import and Export

//   const canWatch = () => {
//     if (age >= 18) return "Watch Now";
//     return "Not Available"
//   }

//   return (
//     <>
//       <div>
//         <img src="The Railway Man jpeg.jfif" alt="movie" width="20%" height="10%" />
//       </div>
//       <h2>Name: {name} </h2>
//       <h3>Year: {2020 + 3} </h3>
//       <h3>Rating: {rating} </h3>
//       <p>Summary: {summary} </p>
//       <p>Genre: {returnGenre()}</p >
//       <button> {canWatch()} </button>
//     </>
//   )
// };

// export const Header = () => {
//     return <h1> Netflix Series</h1>
// }

// export default NetflixSeries;

// export const Footer = () => {
//       return <p>copyright @AvinashS97 </p>
// }

//! Looping in JSX

const NetflixSeries = () => {
  return (
    <ul className='grid grid-three-cols'>
      {seriesData.map(curElem => (
        <SeriesCard key={curElem.id} data={curElem} />
      ))}
    </ul>
  );
};
export default NetflixSeries;
