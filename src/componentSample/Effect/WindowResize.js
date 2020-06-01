import React, { useState, useEffect } from 'react'

const WindowResize = () => {
    const [windowWidth, setwindowWidth] = useState(window.innerWidth);
    const handleResize = () => {
        setwindowWidth(window.innerWidth)
    }
    useEffect(() => {
        console.log('continues running')
        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        }
    }, [])

    return (
        <>
            <div>
                {windowWidth}
            </div>
        </>
    )
}

export default WindowResize
