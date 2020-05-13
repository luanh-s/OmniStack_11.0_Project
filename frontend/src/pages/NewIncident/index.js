import React from 'react'; 
import { Link } from 'react-router-dom';
import './styles.css';

//IMPORTANDO ARQUIVOS DE ICONES
import {FiArrowLeft} from 'react-icons/fi'

import logoImg from '../../assets/logo.svg';

export default function NewIncident(){
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver este problema.</p>

                    
                    <Link className="backlink" to="/profile">
                        <FiArrowLeft size="16" color="e02041"/>
                        Voltar para Home Page
                    </Link>
                </section>
                <form>
                    <input placeholder="Título do caso"/>
                    <textarea placeholder="Descrição"/>
                    <input placeholder="Valor em Reais"/>

                    {/* <div className="input-group">
                        <input type="text" placeholder="Cidade"/>
                        <input type="text" placeholder="UF" style={{ width: 80}}/>
                    </div> */}
                    <div className="button-group">
                        <button className="buttonCancelar" type="submit">Cancelar</button>
                        <button className="button" type="submit">Cadastrar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}