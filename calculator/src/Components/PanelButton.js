import React from 'react';
import Button from './Button';

export default function PanelButton({ clickHandle }) {

    const handleClick = nameButton => clickHandle(nameButton);

    return (
        <div>
            <div>
                <Button name="AC" clickHandle={handleClick} />
                <Button name="+/-" clickHandle={handleClick} />
                <Button name="%" clickHandle={handleClick} />
                <Button name="/" clickHandle={handleClick} />
            </div>
            <div>
                <Button name="7" clickHandle={handleClick} />
                <Button name="8" clickHandle={handleClick} />
                <Button name="9" clickHandle={handleClick} />
                <Button name="X" clickHandle={handleClick} />
            </div>
            <div>
                <Button name="4" clickHandle={handleClick} />
                <Button name="5" clickHandle={handleClick} />
                <Button name="6" clickHandle={handleClick} />
                <Button name="-" clickHandle={handleClick} />
            </div>
            <div>
                <Button name="1" clickHandle={handleClick} />
                <Button name="2" clickHandle={handleClick} />
                <Button name="3" clickHandle={handleClick} />
                <Button name="+" clickHandle={handleClick} />
            </div>
            <div>
                <Button name="0" clickHandle={handleClick} />
                <Button name="." clickHandle={handleClick} />
                <Button name="=" clickHandle={handleClick} />
            </div>
        </div>
    );
}
