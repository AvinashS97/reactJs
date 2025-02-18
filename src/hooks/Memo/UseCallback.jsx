import { memo, useCallback, useState } from "react";

const Button = memo(({ onClick, children}) => {
    console.log(`Rendering button: ${children}`);

    return (
        <button className={`mb-4 px-5 py-2 text-black ${children === "Increment" ? "bg-green-400": "bg-red-400" }`} onClick = {onClick}>
            {children}
        </button>
    )
});

export default function UseCallback() {
    const [count, setCount] = useState(0);

    //  Memoize the increment function
    // const increment = () => {
        
    // }

    const increment = useCallback(()=> {
        console.log("increment inside");
        setCount((prevCount) => prevCount +1);
    })

    //  Memoize the decrement function
    const decrement = () => {
        console.log("decrement inside");
        setCount((prevCount) => prevCount -1);
    }

    return (
        <div className="flex flex-col justify-center items-center bg-black p-4 h-lvh font-display text-white tracking-wider">
            <h1 className="mb-4">Count: {count} </h1>
            <Button onClick={increment}>Increment</Button>
            <Button onClick={decrement}>Decrement</Button>
        </div>
    )
}

// 08:39 