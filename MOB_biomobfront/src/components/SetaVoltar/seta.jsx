import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import './style.css';

function SetaVoltar() {

    return (
        <>
            <div className="seta-voltar">
                <Link to="/perfil-user">
                    <button className="voltar">
                        Voltar
                    </button>
                </Link>
            </div>
        </>
    );
}

export default SetaVoltar;