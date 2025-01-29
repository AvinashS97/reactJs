import { useRef } from "react";
// import { forwardRef } from "react";

import "./index.css";
import { useId } from "react";

export const ForwardRef = () => {
    const username = useRef(null);
    const password = useRef(null);

    const handleFormSubmit = (e) => { 
        e.preventDefault();
        console.log(username.current.value, password.current.value);
    }
    return (
        <form onSubmit={handleFormSubmit}>
            {/* <BeforeReact19Input label="username" ref={username} />
            <BeforeReact19Input label="password" ref={password} /> */}

            <AfterReact19Input label="username" ref={username} />
            <AfterReact19Input label="password" type="password" ref={password} />
            <button> Submit </button>
        </form>
    )
}

//? Before React V19

// const BeforeReact19Input = forwardRef((props, ref) => {
//     const id = useId();
//     return (
//         <div>
//             <label htmlFor={id}>{props.label}</label>
//             <input type="text" ref={ref} />
//         </div>
//     );
// })

// After React V19
const AfterReact19Input = ({ label, ref }) => {
    const id = useId();
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input type="text" ref={ref} />
        </div>
    );
};