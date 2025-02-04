//! V53: React Hook Challenge: Dynamic State Management and Document Title update with useEffect

//* Description: In this challenge, you'll create a React component that dynamically manages state using `useState` and `useEffect` hooks. Your component wil include:
//? 1. A counter thtat increment when a button is clicked.
//? 2. An input field where users can type their name.
//? 3. The document title will update to show the current count.

import { useEffect, useState } from "react";
import "./index.css";

export const EffectChallenge = ()=> {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    // code to change title using side-effect.
    useEffect(()=> {
        document.title = `count: ${count}`;
    },[count]);


    useEffect(()=> {
        console.log(name);
    },[name])
    return (
        <div className="container effect-container">
            <h1>useEffect Challenge</h1>
            <p>Count: <span> {count} </span></p>
            <button onClick={()=> setCount(count + 1)}> Increment </button>
            <p>Name: <span> {name} </span></p>
            <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
        </div>
    );
};
