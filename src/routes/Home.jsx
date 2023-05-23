import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Home.module.css';
import Tabela from '../components/Tabela';

export default function Home() {
    const [usuarios, setUsuarios] = useState([]);

    // Uma função asyncrona que vai resgatar os dados dos adicionados
    const getAdicionados = async () => {
        // Por ser uma função asyncrona ela pode falhar, por isso vamos colocar em um try catch
        try {
            // Armazena a resposta do get do axios que pega as informações da API
            const resposta = await axios.get("https://jsonplaceholder.typicode.com/users");

            // Como nós vimos no console.log(resposta) ele nos retorna um objeto e tem um "data" com as informações, queremos só ela então:
            const data = resposta.data;

            // Vamos setar os uduários com a nossa variável
            setUsuarios(data);
            console.log(usuarios)
        } catch (erro) {
            console.log(erro)
        }
    }

    // Controla a execução da função quantas vezes quiser
    // O array serve para executar apenas uma vez
    useEffect(() => {
        // Vamos executar e mostrar os adicionados
        getAdicionados()
    }, [])

    return (
        <div className='container'>
            {
                (usuarios.length === 0) ? <p>Não há usuários cadastrados</p>
                    : <Tabela usuarios={usuarios} />
            }
        </div>
    );
}