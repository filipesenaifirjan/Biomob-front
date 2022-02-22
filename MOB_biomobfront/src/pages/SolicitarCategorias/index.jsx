import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

function SolicitarCat() {

    return (
        <>
            <div className="seta-voltar">
            <Link to="/perfil-user">
            <button className="voltar">
                Voltar
            </button>
            </Link>
            </div>
            <div className="titulo-page">
                <text className="titulo1">Selecione uma categoria para solicitar</text>
            </div>
            <div className='categoria-links'>
                <div className='solicDinheiro'>
                    <Link to="solicitar-dinheiro">
                        <button className='botaoDoar'>Dinheiro</button>
                    </Link>
                </div>
                <div className='solicEquipamento'>
                    <Link to="solicitar-equipamento">
                        <button className='botaoDoar'>Equipamentos Acessíveis</button>
                    </Link>
                </div>
                <div className='solicCesta'>
                    <Link to="/solicitar-cesta">
                        <button className='botaoDoar'>Cesta Básica</button>
                    </Link>
                </div>
                <div className='solicOutros'>
                    <Link to="/solicitar-outros">
                        <button className='botaoDoar'>Outros</button>
                    </Link>
                </div>

            </div>
        </>
    );
}

export default SolicitarCat;