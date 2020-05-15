import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

//IMPORTANDO ARQUIVOS DE ICONES
import {FiLogIn} from 'react-icons/fi'

import './styles.css';
import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon(){
    // const [id, setId] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();
        
        try {
            const response = await api.post('sessions', {email, password});

            localStorage.setItem('ongId', response.data.id);
            localStorage.setItem('ongEmail', email);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');
        } catch (error) {
            alert('Login Incorreto!');
        }
    }

    return (
        <div className="logon-container">

            <section className="form"> 
                <img src={logoImg} alt="Be The Hero"/>

                <form onSubmit={handleLogin} action="">
                    <h1>Faça seu Logon:</h1>
                    {/* <input 
                        placeholder="Sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    ></input> */}
                    <input 
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    ></input>
                    <input 
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    ></input>
                    <button className="button" type="submit">Entrar</button>

                    <Link className="backlink" to="/register">
                        <FiLogIn size="16" color="e02041"/>
                        Não tenho cadastro...
                    </Link>
                </form>
            </section>
            
            <img src={heroesImg} alt="Heroes"/>
        </div>
    );
}