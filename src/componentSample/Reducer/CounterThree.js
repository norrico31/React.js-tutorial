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

const CounterThree = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState);
    return (
        <>
            <div>
                <h1>Count - {count}</h1>
                <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
                <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
                <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
            </div>
            <div>
                <h1>Count - {countTwo}</h1>
                <button onClick={() => dispatchTwo({ type: 'INCREMENT' })}>Increment</button>
                <button onClick={() => dispatchTwo({ type: 'DECREMENT' })}>Decrement</button>
                <button onClick={() => dispatchTwo({ type: 'RESET' })}>Reset</button>
            </div>
        </>
    )
}

export default CounterThree


// Multiple useReducers