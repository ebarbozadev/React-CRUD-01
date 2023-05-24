import React from 'react';
import styles from './Tabela.module.css';

export default function Tabela({ usuarios }) {
  const handleAlterar = (id) => {
    // Lógica para alterar usuário com o ID especificado
  };

  const handleExcluir = (id) => {
    // Lógica para excluir usuário com o ID especificado
  };

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
          <th>OPÇÕES</th>
        </tr>
      </thead>
      <tbody>
        {usuarios.map((usuario) => (
          <tr key={usuario.id}>
            <td>{usuario.id}</td>
            <td>{usuario.name}</td>
            <td>{usuario.email}</td>
            <td>{usuario.phone}</td>
            <td>{usuario.website}</td>
            <td>
              <button onClick={() => handleAlterar(usuario.id)}>Alterar</button>
              <button onClick={() => handleExcluir(usuario.id)}>Excluir</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}