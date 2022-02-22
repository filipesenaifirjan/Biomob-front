import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import './style.css';

function DoarCat() {

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
                <text className="titulo1">Selecione uma categoria para doar</text>
            </div>
            <div className='categoria-links'>
                <div className='doaDinheiro'>
                    <Link to="/doar-dinheiro">
                        <button className='botaoDoar'>Dinheiro</button>
                    </Link>
                </div>
                <div className='doarEquipamento'>
                    <Link to="/doar-equipamentos">
                        <button className='botaoDoar'>Equipamentos Acessíveis</button>
                    </Link>
                </div>
                <div className='doarCesta'>
                    <Link to="/doar-cesta">
                        <button className='botaoDoar'>Cesta Básica</button>
                    </Link>
                </div>
                <div className='doarOutros'>
                    <Link to="/doar-outros">
                        <button className='botaoDoar'>Outros</button>
                    </Link>
                </div>

            </div>
        </>
    );
}

export default DoarCat;