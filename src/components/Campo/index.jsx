import React from 'react';
import styles from './Campo.module.css';

export default function Campo(props){
    return(
        <div className={styles.campo}>
            <label htmlFor={props.children}>{props.children}</label>
            <input type={props.type} placeholder={props.placeholder} id={props.children} />
        </div>
    );
}