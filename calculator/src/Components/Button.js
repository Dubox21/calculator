import React from 'react'

export default function Button({ clickHandle, name }) {

    const handleClick = () => clickHandle(name);

    return (
        <div>
            <button onClick={handleClick}>{name}</button>
        </div>
    )
}
