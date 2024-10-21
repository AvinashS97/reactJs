import data from "../api/data.json";


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


// export default NetflixSeries;

// export const Header = () => {
  //   return <h1> Netflix Series</h1>
  // }
  // export const Footer = () => {
    //   return <p>copyright @AvinashS97 </p>
// }

//! Looping in JSX



const NetflixSeries = () => {
  return (
    <ul>
    <li>
    <div>
      <img src={data[0].img_url} alt="image" width="40%" height="40%" />
    </div>
    <h2>Name: {data[0].name} </h2>
    <h3>Rating: {data[0].rating} </h3>
    <p> Summary: {data[0].description} </p>
    <p> Cast: {data[0].cast} </p>
    <p> Genre: {data[0].genre}</p>
    <a href= {data[0].watch_url} target="_blank">
      <button>Watch Now</button>
    </a>
    </li>

    <li>
    <div>
      <img src={data[1].img_url} alt="image" width="40%" height="40%" />
    </div>
    <h2>Name: {data[1].name} </h2>
    <h3>Rating: {data[1].rating} </h3>
    <p> Summary: {data[1].description} </p>
    <p> Cast: {data[1].cast} </p>
    <p> Genre: {data[1].genre}</p>
    <a href= {data[1].watch_url} target="_blank">
      <button>Watch Now</button>
    </a>
    </li>

    <li>
    <div>
      <img src={data[2].img_url} alt="image" width="40%" height="40%" />
    </div>
    <h2>Name: {data[2].name} </h2>
    <h3>Rating: {data[2].rating} </h3>
    <p> Summary: {data[2].description} </p>
    <p> Cast: {data[2].cast} </p>
    <p> Genre: {data[2].genre}</p>
    <a href= {data[2].watch_url} target="_blank">
      <button>Watch Now</button>
    </a>
    </li>

    <li>
    <div>
      <img src={data[3].img_url} alt="image" width="40%" height="40%" />
    </div>
    <h2>Name: {data[3].name} </h2>
    <h3>Rating: {data[3].rating} </h3>
    <p> Summary: {data[3].description} </p>
    <p> Cast: {data[3].cast} </p>
    <p> Genre: {data[3].genre}</p>
    <a href= {data[3].watch_url} target="_blank">
      <button>Watch Now</button>
    </a>
    </li>

    <li>
    <div>
      <img src={data[4].img_url} alt="image" width="40%" height="40%" />
    </div>
    <h2>Name: {data[4].name} </h2>
    <h3>Rating: {data[4].rating} </h3>
    <p> Summary: {data[4].description} </p>
    <p> Cast: {data[4].cast} </p>
    <p> Genre: {data[4].genre}</p>
    <a href= {data[4].watch_url} target="_blank">
      <button>Watch Now</button>
    </a>
    </li>

    <li>
    <div>
      <img src={data[5].img_url} alt="image" width="40%" height="40%" />
    </div>
    <h2>Name: {data[5].name} </h2>
    <h3>Rating: {data[5].rating} </h3>
    <p> Summary: {data[5].description} </p>
    <p> Cast: {data[5].cast} </p>
    <p> Genre: {data[5].genre}</p>
    <a href= {data[5].watch_url} target="_blank">
      <button>Watch Now</button>
    </a>
    </li>

    <li>
    <div>
      <img src={data[6].img_url} alt="image" width="40%" height="40%" />
    </div>
    <h2>Name: {data[6].name} </h2>
    <h3>Rating: {data[6].rating} </h3>
    <p> Summary: {data[6].description} </p>
    <p> Cast: {data[6].cast} </p>
    <p> Genre: {data[6].genre}</p>
    <a href= {data[6].watch_url} target="_blank">
      <button>Watch Now</button>
    </a>
    </li>

    </ul>
  )
}
export default NetflixSeries;