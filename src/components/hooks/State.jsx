// V26 React States - useState Hook
// V27 How React State Works

import { useState } from "react";

export const State = () =>{
    // let value = 0;
    // const handleButtonClick= () => {
    //     value++;
    //     console.log(value);
    // };
    // let array = useState()
    // console.log(array);

     
const [count, setCount] = useState(0);
console.log("Parent Component Rendered");
const handleButtonClick = () => {
    setCount(() => count + 1)
};

return (
    <>
    <section className="main-div">
    <h1>{count}</h1>
    <button onClick={handleButtonClick}>Increment</button>
    </section>
    <ChildComponent count = {count} />
    </>
)
}

function ChildComponent ({count }) {
    console.log("Child Component Rendered");
    return(
        <div className="main-div">
            <h2>Child Component - {count} </h2>
        </div>
    )
}

// 11:28
