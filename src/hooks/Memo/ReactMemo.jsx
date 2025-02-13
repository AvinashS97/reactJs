//* V71: React.momo()

import { useState } from "react"
// import  Counts  from "./MemoCount";
import { Counts } from "./MemoCount";

export const ReactMemo = () => {
    const [count, setCount] = useState(0);
    return (
        <>
        <div className="flex flex-col justify-end items-center p-4 h-52 font-display tracking-wider">
            <h1>{count}</h1>
            <button className="bg-cyan px-3 py-1 btn-500" onClick={() => setCount((prev) => prev + 1)}>
                Increment
            </button>
        </div>
        <Counts /> 
        {/* ye re-render hoga jbki iske re-render hone ki jarurat nhi h ... To prevent this, WE USE MEMO().*/}
        </>
    )
};