import React, { useState, useEffect } from 'react'

const RunEffectOnce = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = (e) => {
        console.log('Mouse Event');
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(() => {
        console.log('useEffect called');
        window.addEventListener('mousemove', logMousePosition);

        // useEffect cleanUp removeEventListener
       return () => {
            console.log('Component Unmounted');
            window.removeEventListener('mousemove', logMousePosition);
       }
    }, [])

    return (
        <>
            Hook X - {x} Y - {y}
        </>
    )
}

export default RunEffectOnce
