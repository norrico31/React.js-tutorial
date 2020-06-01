import React, { useRef, useEffect } from 'react'

const FocusInput = () => {
    const inputRef = useRef(null);
    useEffect(() => {
        // focus in the input element
        inputRef.current.focus();
    }, [])
    return (
        <>
            <input type="text" ref={inputRef}/>
        </>
    )
}

export default FocusInput
