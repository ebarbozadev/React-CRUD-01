import React from 'react';
import styles from './Tabela.module.css';

export default function Tabela({ usuarios }) {
    return (
        <table className={styles.tabela}>
            <caption>Usuários cadastrados</caption>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>CELULAR</th>
                    <th>WEBSITE</th>
                    <th>OPÇOES</th>
                </tr>
            </thead>
            <tbody>
                {
                    usuarios.map((usuario) => (
                        <tr>
                            <td>{usuario.id}</td>
                            <td>{usuario.name}</td>
                            <td>{usuario.email}</td>
                            <td>{usuario.phone}</td>
                            <td>{usuario.website}</td>
                            <td>Alterar Excluir</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}