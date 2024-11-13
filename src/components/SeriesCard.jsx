
export const SeriesCard = ({ data }) =>{
    // console.log(data);
    
// Without Desctructuring

//     return ( 
//           <li key={props.key}>
//             <div>
//               <img src={props.data.img_url} alt={props.data.name} width="40%" height="40%" />
//             </div>
//             <h2>Name: {props.data.name} </h2>
//             <h3>Rating: {props.data.rating} </h3>
//             <p> Summary: {props.data.description} </p>
//             <p> Cast: {props.data.cast} </p>
//             <p> Genre: {props.data.genre}</p>
//             <a href= {props.data.watch_url} target="_blank">
//               <button>Watch Now</button>
//             </a>
//             </li>)
// }


            {/*  After Destructuring */}
            
    const {img_url, name, rating, description, cast, genre, watch_url } = data; // Destructuring by storing the value from props.data...

    // Inline CSS

    const btn_style = {
      padding:"1.2rem 2.4rem", 
      border:"none",
      fontSize:"20px",
      backgroundColor:`${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
      color:"var(--btn-color)",
      borderRadius: "5px",
      fontWeight:"bold",
      cursor:"pointer",
    }

    const ratingClass = rating >= 8.5 ? "super_hit" : "average";

    return ( 
          <li className="card">
            <div>
              <img src={img_url} alt={name} width="40%" height="40%" />
            </div>
            <div className="card-content">  
              <h2>Name: {name} </h2>

              <h3>Rating:<span className={`rating ${ratingClass}`} >{rating} </span></h3>

              <p > Summary: {description} </p>
              <p > Genre: {genre.join(", ")}</p>
              <p > Cast: {cast.join(", ")} </p>
              <a href= {watch_url} target="_blank">
                <button style={btn_style}> Watch Now </button>
              </a>
            </div>
          </li>)
}
