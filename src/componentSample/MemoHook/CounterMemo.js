import React, { useState, useMemo } from 'react'

const CounterMemo = () => {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const incrementOne = () => {
        setCounterOne(counterOne + 1);
    };

    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1);
    };

    
    const isEven = useMemo(() => {
        let i = 0;
        while (i < 2000000) i++;
        console.log(i);
        return counterOne % 2 === 0;
    }, [counterOne]);

    return (
        <>
            <div>
                <button onClick={incrementOne}>Count One - {counterOne}</button>
    <span>{isEven ? ' Even' : ' Odd'}</span>
            </div>
            <div>
                <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
            </div>
        </>
    )
}

export default CounterMemo

// useMemo hook invokes the provided function and caches the result
