import { useState } from "react";

export const State = () =>{
    // let value = 0;
    // const handleButtonClick= () => {
    //     value++;
    //     console.log(value);
    // };

    // let array = useState()
    // console.log(array);
     
    const [count, setCount] = useState()

    return (
        <>
        <section className="main-div">
        <h1>{count}</h1>
        <button >Increment</button>
        </section>
        </>
    )
}

// 15:05