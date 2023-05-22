import React from 'react';
import { Link } from 'react-router-dom';

export default function Navegacao(){
    return (
        <nav className='navbar'>
            <ul>
                <li><Link to={`/`}>Home</Link></li>
                <li><Link to={`/adicionar`}>Adicionar</Link></li>
            </ul>
        </nav>
    );
}