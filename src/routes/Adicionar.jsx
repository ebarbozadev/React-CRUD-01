import React, { useState } from 'react';
import Campo from '../components/Campo';
import styles from './Adicionar.module.css';
import { useNavigate } from 'react-router-dom';
import pegarURL from '../axios/config';

export default function Adicionar() {
  const navigate = useNavigate();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [celular, setCelular] = useState('');
  const [website, setWebsite] = useState('');

  const adicionarUsuario = async (evento) => {
    evento.preventDefault();

    const usuario = { nome, email, celular, website, userId: 1 };

    await pegarURL.post('/posts', {
      body: usuario,
    });

    navigate('/'); // Redireciona para a página da tabela após adicionar o usuário
  };

  return (
    <form onSubmit={adicionarUsuario} className={styles.container__adicionar}>
      <div className={styles.campo}>
        <div className={styles.campo__adicionar}>
          <label htmlFor="nome">Nome</label>
          <input 
          type="text" 
          id="nome" 
          placeholder="Digite o conteúdo" 
          value={nome || ''} 
          onChange={(evento) => setNome(evento.target.value)} 
          required />
        </div>

        <div className={styles.campo__adicionar}>
          <label htmlFor="email">Email</label>
          <input 
          type="email" 
          id="email" 
          placeholder="Digite o conteúdo" 
          value={email || ''} 
          onChange={(evento) => setEmail(evento.target.value)} 
          required />
        </div>

        <div className={styles.campo__adicionar}>
          <label htmlFor="celular">Celular</label>
          <input 
          type="text" 
          id="celular" 
          placeholder="Digite o conteúdo" 
          value={celular || ''} 
          onChange={(evento) => setCelular(evento.target.value)} 
          required />
        </div>

        <div className={styles.campo__adicionar}>
          <label htmlFor="website">Website</label>
          <input 
          type="text" 
          id="website" 
          placeholder="Digite o conteúdo" 
          value={website || ''} 
          onChange={(evento) => setWebsite(evento.target.value)} 
          required />
        </div>

        <input type="submit" value="Enviar" />
      </div>
    </form>
  );
}