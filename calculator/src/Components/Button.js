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

    const buttonStyle = name === '0' ? { textAlign: 'left', paddingLeft: '30px' } : {};

    return (
        <div className={className.join(" ").trim()}>
            <button className='btn' style={buttonStyle} onClick={handleClick}>{name}</button>
        </div>
    )
}
