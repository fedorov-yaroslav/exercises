import { useState, useEffect } from 'react'

function ApiPractice(){
  const [ posts, setPosts ] = useState([])

  useEffect(() => {
    async function getPosts() {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await response.json()
      setPosts(data)
    }

    getPosts()
  }, [])

  return (
      <>
        <div className = 'container'>
          {posts.slice(0, 9).map((post) =>
          <div className = 'post' key = {post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
          )}
        </div>
      </>
  )
}

export default ApiPractice