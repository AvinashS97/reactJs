import "../Hooks.css";

export const Counter = () => {
    return (
        <div className="containerstate-container" style={{textAlign:"center"}}>
            <h1>useState Hook!</h1><br />
            <p>Count</p>
            <button className="state-button">Increment</button>
        </div>
    );
};