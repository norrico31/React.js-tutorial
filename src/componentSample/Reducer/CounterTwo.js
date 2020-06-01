import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 10
}
const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'INCREMENT':
            return {
                ...state,
                firstCounter: state.firstCounter + payload
            }
        case 'DECREMENT':
            return {
                ...state,
                firstCounter: state.firstCounter - payload
            }
        case 'INCREMENT2':
            return {
                ...state,
                secondCounter: state.secondCounter + payload
            }
        case 'DECREMENT2':
            return {
                ...state,
                secondCounter: state.secondCounter - payload
            }
        case 'RESET':
            return initialState;
        default: 
            return state;
    }
}

const CounterTwo = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    const { firstCounter, secondCounter } = count;
    return (
        <div>
            <h1>First Counter - {firstCounter}</h1>
            <h1>Second Counter - {secondCounter}</h1>
            <button onClick={() => dispatch({ type: 'INCREMENT', payload: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: 'DECREMENT', payload: 1 })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'INCREMENT', payload: 5 })}>Increment</button>
            <button onClick={() => dispatch({ type: 'DECREMENT', payload: 5 })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
            <div>
                <button onClick={() => dispatch({ type: 'INCREMENT2', payload: 1 })}>Increment Counter 2</button>
                <button onClick={() => dispatch({ type: 'DECREMENT2', payload: 1 })}>Decrement Counter 2</button>
            </div>
        </div>
    )
}

export default CounterTwo


// Complex state and action (Object state)