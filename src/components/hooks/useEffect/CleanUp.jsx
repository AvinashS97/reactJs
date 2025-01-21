
import { useState } from "react";
import "./index.css";

export const CleanUp = () => {
    const [count, setCount] = useState(0);

    

    return (
        <div className="container">
            <div className="counter">
                <p>My Details</p>
                <div className="odometer" id="odometer"> {count} </div>
                <h3 className="title">Subscribers <br /> Realtime Counter</h3>
            </div>
        </div>
    )
}