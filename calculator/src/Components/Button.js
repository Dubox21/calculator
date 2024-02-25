import React from 'react'
import "./Button.css";

export default function Button({ clickHandle, name, grey, orange, wide, green }) {
    const handleClick = () => clickHandle(name);

    const className = [
        "component-button",
        orange ? "orange" : "",
        wide ? "wide" : "",
        green ? "green" : "",
        grey ? "grey" : "",
    ]

    return (
        <div className={className.join(" ").trim()}>
            <button className='btn' onClick={handleClick}>{name}</button>
        </div>
    )
}
