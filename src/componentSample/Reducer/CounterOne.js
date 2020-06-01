import React, { useReducer } from 'react'

const initialState = 0
const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        case 'RESET':
            return initialState;
        default: 
            return state;
    }
}

const CounterUseReducer = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h1>Count - {count}</h1>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
        </div>
    )
}

export default CounterUseReducer

// Simple state and action