import React, { useState, useEffect } from 'react'

const Resources = () => {
    const [resourceType, setResourceType] = useState('posts');
    const [items, setItems] = useState([]);

    useEffect(() => {
      console.log('resource changed');
  
      return () => {
        console.log('return from resource change');
      }
    })

    useEffect(() => {
          fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
          .then((response) => response.json())
          .then((json) => setItems(json))
        }, [resourceType])

    return (
        <>
            <button onClick={() => setResourceType('posts')}>Posts</button>
            <button onClick={() => setResourceType('users')}>Users</button>
            <button onClick={() => setResourceType('comments')}>Comments</button>

            {/* <h1>{items.map((item) => {
                return <pre>{JSON.stringify(item.title)}</pre>
            })}</h1> */}
        </>
    )
}

export default Resources
