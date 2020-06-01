import { useState } from 'react'

export const useCounter = (initialCount = 0, value) => {
    const [count, setCount] = useState(initialCount);

    const increment = () => {
        setCount((count) => count + value);
    }
    const decrement = () => {
        setCount((count) => count - value);
    }
    const reset = () => {
        setCount(initialCount);
    }
    return { count, increment, decrement, reset }; // object destructure
    // or array destructure
    // return [count, increment, decrement, reset];
}
