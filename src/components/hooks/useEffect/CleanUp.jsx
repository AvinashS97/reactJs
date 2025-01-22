
import { useEffect, useState } from "react";
import "./index.css";

export const CleanUp = () => {
    const [count, setCount] = useState(0);

    useEffect(()=> {
        const timer = setInterval(()=> {
            setCount((prev)=> prev +1);
        },1000);
        
        return () => clearInterval(timer);

    },[count])
    

    return (
        <div className="container">
            <div className="counter">
                <p>My Subscribers </p>
                <div className="odometer" id="odometer"> {count} </div>
                <h3 className="title">Subscribers <br /> Realtime Counter</h3>
            </div>
        </div>
    )
}
//05:33
//05:33