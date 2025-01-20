//! V53: React Hook Challenge: Dynamic State Management and Document Title update with useEffect

//* Description: In this challenge, you'll create a React component that dynamically manages state using `useState` and `useEffect` hooks. Your component wil include:
//? 1. A counter thtat increment when a button is clicked.
//? 2. An input field where users can type their name.
//? 3. The document title will update to show the current count.

import "./index.css";

export const EffectChallenge = ()=> {
    return (
        <div className="containereffect-container">
            <h1>useEffect Challenge</h1>
            <p>Count: <span>0</span></p>
            <p>Name: <span> </span></p>
            <input type="text" />
        </div>
    );
};
