import React, { useState } from 'react'
import { useCounter } from './useCounter';

const CounterTwoCustom = () => {
    const { count, increment, decrement, reset } = useCounter(10, 5);
    // or if array destructure
    // const [count, increment, decrement, reset] = useCounter();

    return (
        <div>
            <h2>Count = {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Increment</button>
            <button onClick={reset}>Increment</button>
        </div>
    )
}

export default CounterTwoCustom
