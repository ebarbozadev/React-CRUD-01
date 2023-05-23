import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Navegacao.module.css';

export default function Navegacao(){
    return (
        <nav className={styles.navbar}>
            <h1><Link to={`/`}>CRUD React e Axios</Link></h1>
            <ul>
                <li><Link to={`/`}>Home</Link></li>
                <li><Link to={`/adicionar`}>Adicionar</Link></li>
            </ul>
        </nav>
    );
}