import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../Service/api";
import { Form, ContainerForm } from "./style";

import './style.css';

const adminDataModel = {
  
    celular: "",
    email: "",
    nomeCompleto: "",
    senha: "",
    //imagem: "",  
};

function AdminCadastro() {
  const [adminData, setAdminData] = useState(adminDataModel);

  const [confirmarSenha, setConfirmarSenha] = useState();

  //para inserir imagem
  // const [imagem, setImage] = useState("");

  // const uploadImage = async (e) => {
  //   console.log("Upload Imagem");
  // };

  function handleSetAdminData(key, value) {
    setAdminData({
      ...adminData,
      [key]: value,
    });
  }
  
  function cadastrar(e) {
    e.preventDefault();
    //faz parte da alt
    if (adminData.senha.length !== 6)
      return alert("Senha deve conter 6 digitos");
    if (adminData.senha !== confirmarSenha) return alert("Senhas não conferem");

    api({
      method: "post",
      url:"/administradores", 
      data: adminData, 
      headers: {"Content-Type": "application/json" },
      transformRequest: [(data, headers) => {
        delete headers.common.Authorization;
     console.log("tr", data)
        return JSON.stringify(data);
     }] })
     
      .then((response) => {
        if (response.status === 201) {
          const { data } = response;
          alert(`Cadastro realizado`);

          setAdminData(adminDataModel);
          setConfirmarSenha("")
        }
      })
      .catch((error) => {
        alert(`${error.message} - Cadastro nao realizado`);
      });
  }

  return (
    <>
    <div className="seta-voltar">
        <Link to="/">
          <button className="voltar">
            Voltar
          </button>
        </Link>
      </div>
      <div className="titulo-pageConta">
        <text className="tituloConta">Crie uma conta de Administrador</text>
      </div>
      <div className="formataForm">
      <ContainerForm>
        <Form className="formularioCadastro" onSubmit={(e) => cadastrar(e)}>

        <div className="formCadastro1">

          <input className="inputCadAdm"
            type="text"
            value={adminData.nomeCompleto}
            onChange={(e) => handleSetAdminData("nomeCompleto", e.target.value)}
            placeholder="Nome Completo do Administrador"
          />

          <input className="inputCadAdm"
            type="text"
            value={adminData.celular}
            onChange={(e) => handleSetAdminData("celular", e.target.value)}
            placeholder="Celular com DDD e Whatsapp"
          />

          <input className="inputCadAdm"
            type="email"
            value={adminData.email}
            onChange={(e) => handleSetAdminData("email", e.target.value)}
            placeholder="Email"
          />

          <input className="inputCadAdm"
            type="password"
            value={adminData.senha}
            onChange={(e) => handleSetAdminData("senha", e.target.value)}
            placeholder="Senha"
            //aqui faz parte da config senha
            minLength="6"
            maxLength="6"

          />

          <input className="inputCadAdm"
            type="password"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha( e.target.value)}
            placeholder="Confirme a senha"
            //aqui faz parte da config senha
            minLength="6"
            maxLength="6"
          />
          </div>

          <div className="confirmaCadastro">
          <button className="botCadastraAdm" type="submit">Cadastrar Administrador</button>
          </div>
        </Form>

        {/* faz parte do envio da foto cadastro */}
          {/* <Form  onSubmit={uploadImage}>
          <div className="avisoUpload">
            <label>FAÇA UPLOAD DA SUA FOTO:</label>
          </div> */}
          {/* NAIARA ESTILIZAR ESTA LABLE NO STYLE.CSS */}
          {/* <label >
            ENVIAR FOTO
            <input
              type="file"
              name="imagem"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </label>
          
        </Form> */}


      </ContainerForm>
      </div>
    </>
  );
}
export default AdminCadastro;
