import React, { useState } from 'react'
import { useCounter } from './useCounter';

const CounterOneCustom = () => {
    const { count, increment, decrement, reset } = useCounter(0, 1);

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

export default CounterOneCustom
