import { useState, useRef } from "react"

function TodoListF8() {
    const [job, setJob] = useState('')
    const [jobs, setJobs] = useState(() => {
        return JSON.parse(localStorage.getItem('jobs')) ?? []
    })
    const [indexUpdate, setIndexUpdate] = useState()
    const inputRef = useRef()

    const handleSetJob = (e) => {
        setJob(e.target.value)
    }

    const handleAddJobs = () => {
        if(job !== '') {
            setJobs(prev => {
                let newJobs = [...prev];    

                if(indexUpdate !== undefined) {
                    newJobs.splice(indexUpdate, 1, job);
                    setIndexUpdate(undefined)
                } else {
                    newJobs = [...prev, job];
                }
                
                
                //Add to localStorage
                localStorage.setItem('jobs', JSON.stringify(newJobs))
                
                return newJobs;
            });
            setJob('')
            inputRef.current.focus()
        }
    }

    const handleSubmit = () => {
        handleAddJobs()
    }

    const handleEnter = (e) => {
        if(e.which === 13) {
            handleAddJobs()
        }
    }

    const handleDelete = (id) => {
        const newJobs = jobs.filter((item, index) => index !== id)
        setJobs(newJobs)
        localStorage.setItem('jobs', JSON.stringify(newJobs));
    }

    const handleUpdate = (job, index) => {
        setJob(job)
        setIndexUpdate(index)
    }

    return <div>
        <input type="text" ref={inputRef} value={job} onChange={handleSetJob} onKeyDown={handleEnter} placeholder="Enter todo...."/>
        <button onClick={handleSubmit}>Submit</button>

        <ul>
            {jobs.map((job, index) =>
                (<li key={index}>
                    {job} 
                    <button style={{marginLeft: '10px'}} onClick={() => handleUpdate(job,index)}>Update</button>
                    <button style={{marginLeft: '10px'}} onClick={() => handleDelete(index)}>Delete</button>
                </li>)    
            )}
        </ul>
    </div>
}

export default TodoListF8;