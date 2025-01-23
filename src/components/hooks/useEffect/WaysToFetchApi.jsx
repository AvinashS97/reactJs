//! V55: How NOT to fetch API data in React:

import { useEffect, useState } from "react";
import "./Pokemon.css";

export const WayToFetchApi = () => {
    const [apiData, setApiData] = useState([]);

  // fetch('https://jsonplaceholder.typicode.com/posts')
  //   .then(res => res.json())
  //   .then(data => setApiData(data))
  //   .catch(error => console.log(error));

  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setApiData(data))
  })
  .catch((error) => console.log(error)
  )

  return (
    <div className='container effect-container'>
      <ul>data: 
        {
        apiData.map((curData)=> {
        return <li key={curData.id}> {curData.title} </li>
      })} </ul>
    </div>
  );
};
