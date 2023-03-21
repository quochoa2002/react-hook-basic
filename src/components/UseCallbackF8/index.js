import { useState } from "react";
import Content from "./content";

function HandleCancel() {
    const [users, setUsers] = useState([])

    const getData = (type) => {
        return fetch(`https://reqres.in/api/${type}`)
    }

    const handleClick = () => {
        getData('users')
            .then((res) => res.json())
            .then((res) => {
                const users = res.data;
                setUsers(users)
            })
    }

    return(
        <div>
            <p>Data</p>
            <button onClick={handleClick}>get Users Data</button>
            <p>{JSON.stringify(users)}</p>
            <Content getdata={getData} />
        </div>
    )
}

export default HandleCancel;