import React, { useReducer, createContext, Children } from 'react'

export const CountContext = createContext();

const initialState = 0;
const reducer = (state, action) => {
    const { type, payload } = action;
    switch(type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'RESET':
            return initialState;
        default:
            return state;
    }
}

export const GlobalContext = ({ children }) => {
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
            {children}
        </CountContext.Provider>
    )
}

export default GlobalContext
