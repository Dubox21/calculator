import React from 'react';
import Button from './Button';
import "./PanelButton.css";

export default function PanelButton({ clickHandle }) {

    const handleClick = nameButton => clickHandle(nameButton);

    return (
        <div className='component-button-panel'>
            <div>
                <Button name="AC" clickHandle={handleClick} />
                <Button name="+/-" clickHandle={handleClick} />
                <Button name="%" clickHandle={handleClick} />
                <Button name="/" clickHandle={handleClick} orange/>
            </div>
            <div>
                <Button name="7" clickHandle={handleClick} grey/>
                <Button name="8" clickHandle={handleClick} grey/>
                <Button name="9" clickHandle={handleClick} grey/>
                <Button name="X" clickHandle={handleClick} orange/>
            </div>
            <div>
                <Button name="4" clickHandle={handleClick} grey/>
                <Button name="5" clickHandle={handleClick} grey/>
                <Button name="6" clickHandle={handleClick} grey/>
                <Button name="-" clickHandle={handleClick} orange/>
            </div>
            <div>
                <Button name="1" clickHandle={handleClick} grey/>
                <Button name="2" clickHandle={handleClick} grey/>
                <Button name="3" clickHandle={handleClick} grey/>
                <Button name="+" clickHandle={handleClick} orange/>
            </div>
            <div>
                <Button name="0" clickHandle={handleClick} wide grey/>
                <Button name="." clickHandle={handleClick} grey/>
                <Button name="=" clickHandle={handleClick} orange/>
            </div>
        </div>
    );
}
