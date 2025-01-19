//! V52: useEffect Hook with Dependency Array.

import { useEffect, useState } from "react";
import "./index.css";

export const ReactUseEffect = () => {
    //* Example: 1

    // const [count, setCount] = useState(0);
    // useEffect(()=> {
    //     console.log("Count value is:", count);
    // }, [count]);
    // return (
    //     <div className="container effect-container">
    //         <h1>useEffect Hook </h1>
    //         <p>Count: {count}</p>
    //         <button onClick={()=> setCount(count +1)}>Increment</button>
    //     </div>
    // );

    //* Example: 2

    const [date, setDate] = useState(0);

    useEffect(() => {
        setInterval(()=> {
            const updatedDate = new Date();
            setDate(updatedDate.toLocaleTimeString());
        }, 1000)
    },[]);

    return (
        <div className="container effect-container">
            <h1>Date: {date}</h1>
        </div>
    );
};

// 18:35