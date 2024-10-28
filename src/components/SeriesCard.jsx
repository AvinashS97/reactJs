
export const SeriesCard = (props) =>{
    // console.log(props);
    
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
            
            const {id, img_url, name, rating, description, cast, genre, watch_url } = props.data; // Destructuring by storing the value from props.data...
    return ( 
          <li key={props}>
            <div>
              <img src={img_url} alt={name} width="40%" height="40%" />
            </div>
            <h2>Name: {name} </h2>
            <h3>Rating: {rating} </h3>
            <p> Summary: {description} </p>
            <p> Cast: {cast} </p>
            <p> Genre: {genre}</p>
            <a href= {watch_url} target="_blank">
              <button>Watch Now</button>
            </a>
          </li>)
}

// 05:39