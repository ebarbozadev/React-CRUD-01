import React from 'react';
import Campo from '../components/Campo';
import styles from './Adicionar.module.css';

export default function Adicionar() {
    return (
        <div className={styles.container__adicionar}>
            <div className={styles.campo}>
                <Campo
                    children="Nome"
                    type="text"
                    placeholder="Digite o nome"
                />

                <Campo
                    children="Email"
                    type="email"
                    placeholder="Digite o email"
                />

                <Campo
                    children="Celular"
                    type="text"
                    placeholder="Digite o número"
                />

                <Campo
                    children="Website"
                    type="text"
                    placeholder="Digite o website"
                />

                <input type="submit" value="Adicionar" />
            </div>
        </div >
    );
}