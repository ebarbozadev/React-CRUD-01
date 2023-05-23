import React from 'react';

export default function Tabela({ usuarios }) {
    return (
        <table>
            <caption>Usuários cadastrados</caption>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Celular</th>
                    <th>Site</th>
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
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}