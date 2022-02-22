import React, { useState, useEffect, useContext } from "react";
import "./style.css";

function Header() {
    return (
        <header>
            <nav className="menu-container">
                <a href="https://biomob.app.br">
                    <img src="./assets/img/logo1.png" className="menu-imagem" alt="Logo escrito Instituto BIOMOB" />
                </a>
            </nav>
        </header>
    );

}

export default Header;