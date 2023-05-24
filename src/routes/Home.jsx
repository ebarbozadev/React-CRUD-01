import React, { useState, useEffect } from 'react';
import styles from './Home.module.css';
import Tabela from '../components/Tabela';
import pegarURL from '../axios/config';

export default function Home() {
  const [usuarios, setUsuarios] = useState([]);

  const getUsuarios = async () => {
    try {
      const resposta = await pegarURL.get('/users');
      const data = resposta.data;
      setUsuarios(data);
    } catch (erro) {
      console.log(erro);
    }
  };

  useEffect(() => {
    getUsuarios();
  }, []);

  const handleAlterarUsuario = (usuario) => {
    // Lógica para alterar o usuário
    console.log('Alterar usuário:', usuario);
  };

  const handleExcluirUsuario = (usuario) => {
    // Lógica para excluir o usuário
    console.log('Excluir usuário:', usuario);
  };

  return (
    <div className="container">
      {usuarios.length === 0 ? (
        <p>Não há usuários cadastrados</p>
      ) : (
        <Tabela
          usuarios={usuarios}
          onAlterarUsuario={handleAlterarUsuario}
          onExcluirUsuario={handleExcluirUsuario}
        />
      )}
    </div>
  );
}