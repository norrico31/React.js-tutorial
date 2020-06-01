import React, { useState, useEffect } from 'react'
import axios from 'axios';

const DataFetching = () => {
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [idFromButtonClick, setIdFromButtonClick] = useState(1);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(res => {
                console.log(res);
                setPost(res.data);
            })
            .catch(err => {
                console.log(err)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [idFromButtonClick])

    const handleClick = () => {
        setIdFromButtonClick(id);
    }

    return (
        <div>
            <input type="number" value={id} onChange={e => setId(e.target.value)} />

            <button type="button" onClick={handleClick}>Fetch Post</button>
            <div>{post.title}</div>

            <ul>
                {/* {post.map(post => (<li key={post.id}>{post.title}</li>))} */}
            </ul>
        </div>
    )
}

export default DataFetching
