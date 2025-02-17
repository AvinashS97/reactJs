//* V71: React.momo()

import { useMemo, useState } from "react";
// import  Counts  from "./MemoCount";
import { Counts } from "./MemoCount";

export const ReactMemo = () => {
    const [count, setCount] = useState(0);

    //  Prevent re-render by caching the optimized value either object or expensive calculations.
    const myBioData = useMemo (()=> {
        return {
            name: "Avinash",
            age: 22,
        };
    },[]);

    return (
        <>
        <div className="flex flex-col justify-center items-center p-4 h-52 font-display tracking-wider">
            <h1>{count}</h1>
            <button className="bg-cyan-500 px-3 py-1 btn" onClick={() => setCount((prev) => prev + 1)}>
                Increment
            </button>
        </div>
        
        <Counts bioData = {myBioData} /> 
        {/* ye re-render hoga jbki iske re-render hone ki jarurat nhi h ... To prevent this, WE USE MEMO().*/}
        </>
    );
};