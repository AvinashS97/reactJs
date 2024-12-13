import { useState } from "react";
import { requestFormReset } from "react-dom";

export const LiftingState = () => {
    return (
        <>
        <InputComponent />
        <DisplayComponent />
        </>
    );
};

const InputComponent = () => {
    const [inputValue, setInputValue] = useState("")
    return (
    <>
    <input type="text" placeholder="Enter Your Name" value={inputValue} onChange={(e)=> setInputValue (e.target.value)}></input>
    </>
    );
};


const DisplayComponent = () => {
    return <p>The Current input Value is: </p> 
};