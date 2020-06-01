import React, { useState, useEffect, useRef } from 'react'

const Timer = () => {
    const [timer, setTimer] = useState(0);
    const invervalRef = useRef();

    useEffect(() => {
        invervalRef.current = setInterval(() => {
            setTimer((addCount) => addCount + 1);
        }, 1000);

        return () => {
            clearInterval(invervalRef.current);
        }
    }, [timer]);

    return (
        <div>
            Hook Timer - {timer}
            <button onClick={() => clearInterval(invervalRef.current)}>Clear hook timer</button>
        </div>
    )
}

export default Timer
