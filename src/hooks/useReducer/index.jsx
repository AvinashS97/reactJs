import { useReducer } from 'react';
import './Reducer.css'; // Import CSS file

const reducer = (state, action) => {
    if (action.type === 'increment') {
        return { count: state.count + 1 };
    } else if (action.type === 'decrement') {
        return { count: state.count - 1 };
    } else if (action.type === 'reset') {
        return { count: 0 };
    } else {
        return state;
    }
};


const CounterReducer = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <div className="justify-center items-center p-4 w-screen h-screen">
            <h1>Count: {state.count}</h1>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    );
};

export default CounterReducer;
