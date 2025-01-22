//! V55: How NOT to fetch API data in React:

import { useState } from "react";
import "./Pokemon.css";

export const NotToFetchApi = () => {
    const [apiData, setApiData] = useState([]);


  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setApiData(data))
    .catch(error => console.log(error));

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
