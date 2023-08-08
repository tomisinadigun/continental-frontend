import React from 'react'
import Tag from './Tag'
import { useState } from 'react'

const Tags = ({children}) => {

    const tags = [
        {id:1, name:"Island"},
        {id:2, name:"Duplex"},
        {id:3, name:"Main land"},
        {id:4, name:"Industrial"},
        {id:5, name:"Commercial"},
        {id:6, name:"Craftsman"},
        {id:6, name:"Storybrook"},
        {id:6, name:"Mansion"},
        {id:6, name:"Beach Houses"},
        {id:6, name:"Ranch House"},
    ]

    const [buttonState, setButtonState] = useState(Array(tags.length).fill(false))

    const handleClick = (index) => {
        const updateButtonState = [...buttonState]
        updateButtonState[index] = !updateButtonState[index]
        setButtonState(updateButtonState)
    }

    return (
        <div className='tags'>
        
            {
                tags.map((data, index) => (
                    
                    <Tag 
                        data={data}
                        key={index}
                        isClicked={buttonState[index]}
                        onClick={() => handleClick(index)}
                    />
                        
                ))
            }
        </div>
    )
}

export default Tags