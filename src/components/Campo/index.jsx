import React from 'react';
import styles from './Campo.module.css';

export default function Campo({ children, type, placeholder, value }) {
    return (
        <div className={styles.campo}>
            <label htmlFor={children}>{children}</label>
            <input type={type} placeholder={placeholder} id={children} value={value} />
        </div>
    );
}