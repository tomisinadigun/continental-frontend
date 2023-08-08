import React, { useState } from 'react'

const Tag = ({ onClick, isClicked, data}) => {
    return (
        <>
            <div onClick={onClick} className={isClicked ? "tag-selected" : "tag-item"} >{data.name}</div>
        </>
    )
}

export default Tag