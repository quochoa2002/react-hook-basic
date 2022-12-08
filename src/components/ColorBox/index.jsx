import React from 'react';
import { useState } from 'react'

ColorBox.propTypes = {
    
};

function getRandomColor() {
    const colorsList = ['deeppink', 'green', 'yellow', 'black', 'blue'];
    const randomIndex = Math.floor(Math.random() * colorsList.length)
    return colorsList[randomIndex];
}

function ColorBox() {
    const [color, setColor] = useState('deeppink')
    function handleBoxClick() {
        // get radom color --> set color
        const newColor = getRandomColor()
        setColor(newColor)
    }

    return (
        <div 
            className="color-box" 
            style={{ backgroundColor: color }} 
            onClick={handleBoxClick}
            >
            <button>color</button>
        </div>
    );
}

export default ColorBox;