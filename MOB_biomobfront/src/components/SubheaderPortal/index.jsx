import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./style.css";

function SubHeader() {
    return (
        <nav className="menu-subheader">
            <div className="botoes">
                <div className="botao-cadAdmin">
                    <Link to="/admin-cadastro"> 
                    <button className="cadAdmin">Cadastro Admin</button>
                    </Link>
                </div>
                <div className="botao-cadBD">
                <Link to="/usuario-cadastro"> 
                    <button className="cadBD">Cadastro Beneficiario/Doador</button>
                    </Link>
                </div>
                <div className="botao-login">
                <Link to="/login">
                    <button className="entrar">Entrar</button>
                    </Link>
                </div>
            </div>
        </nav>
    );

}

export default SubHeader;