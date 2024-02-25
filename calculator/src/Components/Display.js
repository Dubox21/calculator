import React from 'react';
import styles from './Display.css';

export default function Display ({ value }) {
    return (
        <div className='component-display'>
            <div>{value}</div>
        </div>
    );
}

