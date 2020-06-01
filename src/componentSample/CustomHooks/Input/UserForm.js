import React, { useEffect, useRef } from 'react'
import { useInput } from './useInput';

const UserForm = () => {
    
    const [firstName, bindFirstName, resetFirstName]  = useInput('');
    const [lastName, bindLastName, resetLastName] = useInput('');

    const submitHandler = (e) => {
        e.preventDefault();
        alert(`Hello ${firstName} ${lastName}`);
        resetFirstName();
        resetLastName();
    }

    const focusInput = useRef(null);
    useEffect(() => {
        // focus in the input element
        focusInput.current.focus();
    }, []);

    return (
        <>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="name">First Name</label>
                    <input type="text" ref={focusInput} {...bindFirstName} />
                </div>
                <div>
                    <label htmlFor="name">Last Name</label>
                    <input type="text" {...bindLastName} />
                </div>
                <div>
                    <input type="submit" placeholder="Submit"/>
                </div>
            </form>
        </>
    )
}

export default UserForm
