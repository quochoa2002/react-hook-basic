import React, { useState } from 'react';
import './Reward.scss'

const gifts = [
    'TÀI',
    'XỈU',
]

const courses = [
    {
        id: 1, 
        name:'máy bay'
    },

    {
        id: 2, 
        name:'xe máy'
    },

    {
        id: 3, 
        name:'tàu hỏa'
    },
]

function Reward() {

    const [gift, setGift] = useState('chua co phan thuong');
    const [checked, setChecked] = useState([]);


    const getRewarded = () => {
        const index = Math.floor(Math.random()*gifts.length)
        setGift(gifts[index])
    }

    const handleSubmit = () => {
        // call api
        console.log({id: checked})
    }

    const handleCheck = (id) => {

        setChecked(prev => {
            const isChecked = checked.includes(id)

            if(isChecked) {
                // unchecked
                return checked.filter(item => item !== id)
            }else{
                // checked
                return [...prev, id]
            }
        })

    }

    console.log(checked)

    return (
        <div className='reward-ccss'>
            {gift}
            <button onClick={getRewarded}>Lật Hủ</button>
            <div  className='reward-ccss__1'>
                {courses.map(course => (
                    <div key={course.id}>
                        <input 
                            checked={checked.includes(course.id)}
                            type="checkbox" 
                            onChange={() => handleCheck(course.id)}
                        />
                        {course.name}
                    </div>
                ))}
                <button onClick={handleSubmit}>Change</button>
            </div>
        </div>
    );
}

export default Reward;