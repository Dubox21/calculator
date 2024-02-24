import React from 'react';
import styles from './Display.css';

export default function Display ({ value }) {
    return (
        <div>
            <div className={styles.value}>{value}</div>
        </div>
    );
}

