import { useEffect, useState } from "react";

function Content() {
    const [show, setShow] = useState(false)
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(post => {
                setPosts(post)
            })
    }, [])


    return(
        
        <div>
            <button onClick={() => setShow(!show)}>togger</button>
            
            {show && <div>
                        <input 
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                        <ul>
                            {posts.map(post => (
                                <li key={post.id}>{post.title}</li>
                            ))}
                        </ul>
                    </div>
            }
        </div>
    )
}

export default Content;
