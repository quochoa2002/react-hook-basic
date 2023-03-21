import { useEffect, useState } from "react";

function Content({ getData }) {

    const [comments, setComments] = useState([])

    useEffect(() => {
        getData('comments')
            .then((res) => res.json())
            .then((res) => {
                const comments = res.data;
                setComments(comments)
            })
    }, [getData])

    return(
        <div>
            <p>content Component</p>
            <p>{JSON.stringify(comments)}</p>
        </div>
    )
}

export default Content;