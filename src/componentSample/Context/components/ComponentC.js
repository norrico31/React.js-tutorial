import React, { useContext } from 'react'
import { CountContext } from '../GlobalContext';

const ComponentC = () => {
    const { countState, countDispatch } = useContext(CountContext)
    return (
        <>
            <h3>Component C Counter</h3>
            <button onClick={() => countDispatch({ type: 'INCREMENT' })}>Increment</button>
            <button onClick={() => countDispatch({ type: 'DECREMENT' })}>Decrement</button>
            <button onClick={() => countDispatch({ type: 'RESET' })}>Reset</button>
        </>
    )
}

export default ComponentC
