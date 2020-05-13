import React from 'react';
import logoImg from '../../assets/logo.svg';


import { Link } from 'react-router-dom';

//IMPORTANDO ARQUIVOS DE ICONES
import {FiPower, FiTrash2} from 'react-icons/fi'

import './styles.css';
import heroesImg from '../../assets/heroes.png';

export default function Logon(){
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero"/>
                <span>Bem vinda, APAE</span>

                <Link className="button" to="/incidents/new">Cadastrar Novo Caso</Link>
                <button type="button">
                    <FiPower size={18} color="#e02041"></FiPower>
                </button>
            </header>

            <h1>Casos cadastrados</h1>
            <ul>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"></FiTrash2>
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"></FiTrash2>
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"></FiTrash2>
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"></FiTrash2>
                    </button>
                </li>
            </ul>
        </div>
    );
}