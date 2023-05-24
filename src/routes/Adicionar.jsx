import React from 'react';
import Campo from '../components/Campo';
import styles from './Adicionar.module.css';
import { useState } from 'react';

// Simular um redirect que quando adicionar um usuário é redirecionado para a home
import { useNavigate } from 'react-router-dom';

// Importamos o que nos faz a conecção com a API
import pegarURL from '../axios/config';

export default function Adicionar() {
    const navigate = useNavigate()

    const [nome, setNome] = useState();
    const [email, setEmail] = useState();    
    const [celular, setCelular] = useState();
    const [website, setWebsite] = useState();

    const adicionarUsuario = async (evento) => {
        evento.preventDefault();

        const usuario = {nome, email, celular, website, userId: 1}

        console.log(usuario)

        // await pegarURL.post("/posts", {
        //     body: usuario,
        // })

        // navigate("/")
    }

    return (
        <form onSubmit={(evento) => adicionarUsuario(evento)} className={styles.container__adicionar}>
            <div className={styles.campo}>
                {/* <Campo
                    children="Nome"
                    key={nome}
                    value={nome}
                    type="text"
                    onChange={(evento) => setNome(evento.target.value)}
                    placeholder="Digite o nome"
                />

                <Campo
                    children="Email"
                    key={email}
                    value={email}
                    type="email"
                    onChange={(evento) => setEmail(evento.target.value)}
                    placeholder="Digite o email"
                />

                <Campo
                    children="Celular"
                    key={celular}
                    value={celular}
                    type="text"
                    onChange={(evento) => setCelular(evento.target.value)}
                    placeholder="Digite o número"
                />

                <Campo
                    children="Website"
                    key={website}
                    value={website}
                    type="text"
                    onChange={(evento) => setWebsite(evento.target.value)}
                    placeholder="Digite o website"
                /> */}

                <div className={styles.campo__adicionar}>
                    <label htmlFor="nome">Nome</label>
                    <input type="text" id='nome' placeholder='Digite o conteúdo' onChange={(evento) => setNome(evento.target.value)} />
                </div>

                <div className={styles.campo__adicionar}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' placeholder='Digite o conteúdo' onChange={(evento) => setEmail(evento.target.value)} />
                </div>

                <div className={styles.campo__adicionar}>
                    <label htmlFor="celular">Celular</label>
                    <input type="text" id='celular' placeholder='Digite o conteúdo' onChange={(evento) => setCelular(evento.target.value)} />
                </div>

                <div className={styles.campo__adicionar}>
                    <label htmlFor="website">Website</label>
                    <input type="text" id='website' placeholder='Digite o conteúdo' onChange={(evento) => setWebsite(evento.target.value)} />
                </div>

                <input type="submit" value="Enviar" />
            </div>
        </form>
    );
}