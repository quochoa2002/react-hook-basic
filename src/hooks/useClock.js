import React, { useState, useEffect } from 'react';


// độc lập khỏi components
function formatDate(date) {
    const hours = `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);
    const seconds = `0${date.getSeconds()}`.slice(-2);
    
    return `${hours}:${minutes}:${seconds}`;
}

function useClock() {
    const [timeString, setTimeString] = useState('');

    useEffect(() => {
        const clockInterval = setInterval(() => {
            // lấy thời gian hiện tại bằng cách sử dụng new Date() 
            const now = new Date();
            
            // hàm formatDate để chuyển đổi thời gian thành chuỗi với định dạng HH/mm/ss
            const newTimeString = formatDate(now);
            setTimeString(newTimeString)
        }, 1000);    
        
        return () => {
            // cleanup
            console.log('clock cleanup')
            clearInterval(clockInterval)
        }

    }, []);

    return { timeString };
}

export default useClock;