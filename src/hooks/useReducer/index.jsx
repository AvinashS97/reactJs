//* V69: useReducer Hook in ReactJs
//* V70: Improved useReducer

import { useReducer } from 'react';
import './Reducer.css'; // Import CSS file

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count + 1 };
        case 'decrement':
            return { ...state, count: state.count - 1 };
        case 'reset':
            return { ...state, count: 0 };
        default:
            return state;
    };
};

const initialState = {
    count : 0,
    inc : 2,
    dec : 2,
};

const CounterReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

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
