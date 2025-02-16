import { useMemo, useState } from "react";

const ExpensiveComponent = () => {
    const sum = () => {
        console.log("Calculating sum...");
        let i= 0;
        for (i=0; i<= 1000000000; i++) {
            i = i+1;
        }
        return i;
    };
    const total = useMemo(() => sum(), [])

    // const total = sum();

    return <p> sum: {total} </p>
};

const MemoParentComponent = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="flex flex-col justify-center items-center bg-black p-4 w-lvw h-lvh font-display text-white tracking-wider">
            <ExpensiveComponent />
            <button onClick={()=> setCount(count +1)} className="bg-cyan-400 px-3 py-6 rounded-sm">
                Re-Render Parent
            </button>
            <p>Parent re-renders: {count} </p>
        </div>
    )
}

export default MemoParentComponent;