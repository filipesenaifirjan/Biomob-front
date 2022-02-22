import React, { useState, useEffect } from "react";
import { FormInput } from "./style";
import { Link, useHistory } from "react-router-dom";

import "./style.css";

import api from "../../Service/api";

const FormularioLogin = () => {
  const history = useHistory();

  const [emailPesquisa, setEmailPesquisa] = useState();
  const [senhaPesquisa, setSenhaPesquisa] = useState();

  console.log(emailPesquisa);
  console.log(senhaPesquisa);
  async function Login(e) {
    e.preventDefault();
//para remover o token anterior
    localStorage.removeItem("token");
    await api
      .post(`/login`, { email: emailPesquisa, senha: senhaPesquisa })
      .then((res) => {
        console.log(res.data);
        if (res.status === 200) {
            //aqui faz parte da rota autenticada
            console.log(1,localStorage.getItem("token"))
            localStorage.setItem("token", JSON.stringify(res.data.Authorization));
            api.defaults.headers.common["Authorization"] = res.data.Authorization;
          console.log(2,localStorage.getItem("token"))
          if (emailPesquisa.toLowerCase().includes("biomob.org")) {
            history.push("/perfil-adm");

          } else {
            console.log("dentro do else");
            history.push("/perfil-user"); //direcionar para tela de usuário comum
          }
        }
      })
      .catch((err) => {
        document.getElementById("teste").innerHTML =
          "Email e/ou senha incorretos";
      });
  }

  return (
    <>
      <div className="seta-voltar">
        <Link to="/">
          <button className="voltar">Voltar</button>
        </Link>
      </div>
      <FormInput onSubimit={Login}>
        <div className="titulo-login">
          <text className="titulo-login">Insira seu e-mail e senha para entrar </text>
        </div>
        <label htmlFor="login-email" className="item-oculto">
          Email
        </label>
        <input
          type="email"
          placeholder="Email"
          className="input-email"
          id="login-email"
          name="email"
          onChange={(e) => setEmailPesquisa(e.target.value)}          
        ></input>
        <label htmlFor="login-senha" className="item-oculto">
          Senha
        </label>
        <input
          type="password"
          placeholder="Senha"
          className="input-senha"
          id="login-senha"
          name="senha"
          onChange={(e) => setSenhaPesquisa(e.target.value)}
        ></input>

        <h4 id="teste" style={{ color: "red" }}></h4>

        <div className="recupera">
          <Link to="/recuperar-senha">Esqueceu a senha? Recupere aqui!</Link>
        </div>

        <button className="botEntrarLogin" type="submit" onClick={(e) => Login(e)}>
          Entrar
        </button>
      </FormInput>
    </>
  );
};

export default FormularioLogin;


