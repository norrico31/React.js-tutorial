import React, { useContext } from 'react'
import { CountContext } from '../GlobalContext';

const ComponentA = () => {
    const { countState, countDispatch } = useContext(CountContext)
    return (
        <>
            <h1>{countState}</h1>
            <h3>Component A Counter</h3>
            <button onClick={() => countDispatch({ type: 'INCREMENT' })}>Increment</button>
            <button onClick={() => countDispatch({ type: 'DECREMENT' })}>Decrement</button>
            <button onClick={() => countDispatch({ type: 'RESET' })}>Reset</button>
        </>
    )
}

export default ComponentA
