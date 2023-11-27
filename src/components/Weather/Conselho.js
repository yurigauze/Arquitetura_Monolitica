import React, { useState } from 'react';
import { obterConselho } from '../../api/conselhoApi';
import './Weather.css';

const Conselho = () => {
    const [conselho, setConselho] = useState(null);

    const obterConselhos = async () => {
        try {
            const dados = await obterConselho();
            setConselho(dados);
        } catch (erro) {
            // Tratar o erro conforme necessário
        }
    };

    return (
        <div className="weather-container">
            <h2>Conselho do dia</h2>

            <button onClick={obterConselhos}>Obter Conselho</button>

            {conselho && (
                <div className="weather-info">
                    <h3>ID do consleho: {conselho.id}</h3>
                    <p>Conselho: {conselho.conselho}</p>
                
                </div>
            )};
        </div>
    );
};

export default Conselho;
