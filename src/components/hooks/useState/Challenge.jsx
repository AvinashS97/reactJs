import "../Hooks.css";

const CounterChallenge = () => {
    return (
        <div className="container state-container">
            <h1>useState Challenge</h1>
            <p>Count : <span> 0 </span></p>

            <div>
                <label>
                    Step:
                    <input type="number"/>
                </label>
            </div>

            <div className="grid-three-cols">
                <button>Increment</button>
                <button>Decrement</button>
                <button>Reset</button>
            </div>
        </div>
    );
};

export default CounterChallenge;