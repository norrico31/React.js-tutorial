import React, { useState } from 'react'

function initialCount() {
    console.log('run everytime');
    return 0;
}

const Counter = () => {
    // arrow function in useState to run the initialCount only once
    // const [count, setCount] = useState(() => initialCount());

    const [state, setState] = useState(() => {
        return {
            count: 0,
            theme: 'blue'
        }
    });
    const { count, theme } = state;

    function incrementCount() {
        setState((addState) => {  // function in setState
            return {
                ...addState,
                count: addState.count + 1,
                theme: addState.theme = 'grey'
            }
        })
    };

    function decrementCount() {
        setState((minusState) => {  // function in setState
            return {
                ...minusState,
                count: minusState.count - 1,
                theme: minusState.theme = 'red'
            }
        })
    };

    return (
        <>
            <h1 style={{ color: theme }}>{count}</h1>
            <button onClick={decrementCount}>-</button>
            <button onClick={incrementCount}>+</button>
        </>
    )
}

export default Counter
