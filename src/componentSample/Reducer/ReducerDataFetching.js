import React, { useReducer, useEffect } from 'react'
import axios from 'axios';

const initialState = {
    loading: true,
    post: {},
    error: ''
}
const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                post: payload,
                error: ''
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                post: {},
                error: 'Something went wrong!'
            }
        default: 
            return state;
    }
}

const ReducerDataFetching = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { post, loading, error } = state;

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then((res) => {
                dispatch({
                    type: 'FETCH_SUCCESS',
                    payload: res.data,
                });
            })
            .catch((err) => {
                dispatch({
                    type: 'FETCH_ERROR',
                    payload: err.response.data.msg
                });
            })
    }, [])

    return (
        <>
            {loading ? 'Loading' : post.title}
            {error ? error : null}
        </>
    )
}

export default ReducerDataFetching
