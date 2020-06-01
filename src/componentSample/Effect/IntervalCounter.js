import React, { useState, useEffect } from 'react'

const IntervalCounter = () => {
    const [count, setCount] = useState(0);

    // const tick = () => {
    //     setCount(count + 1);
    // }

    // useEffect(() => {
    //     const interval = setInterval(tick, 1000);

    //     return () => {
    //         clearInterval(interval);
    //     }

    // }, [count]) 

    // useEffect is not watching for changes in empty bracket instead put inside in the empty bracket what you want to see the change if you remove count in empty bracket the state won't change

    
    // ==============================================
    // 2nd option to fix the problem in the timer

    const tick = () => {
        setCount(addCount => addCount + 1); // make a callback function in the setCount and you don't have to include anything in empty bracket in useEffect
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000);

        return () => {
            clearInterval(interval);
        }

    }, [])



    // tip for using a function in useEffect. instead of declaring the function outside of useEffect DECLARE IT INSIDE USEFFECT
    // useEffect(() => {
    //     function doSomething() {
    //         console.log(props); // props is from other components
    //     }

    //     // invoke the function
    //     doSomething();    
    // }, [props]) // useEffect is watching what's inside of dependency array/bracket


    return (
        <>
            {count}
        </>
    )
}

export default IntervalCounter
