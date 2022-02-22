import React, { useEffect, useState } from "react";
import { Form, ContainerForm } from "./style";
import { Link } from "react-router-dom";

import "./style.css";
import api from "../../Service/api";


const mockBeneficiariosData = [
  {
    idUsuario: "Ricardo Afonso",
    valor: 200,
  },

  {
    idUsuario: "Nayla Resende Garrau",
    valor: 300,
  },

  {
    idUsuario: "Milena Inês",
    valor: 200,
  },
];

const userDataModel = {
  cpfUsuario: "",
  nomeEntidade: "",
  celular: "",
  email: "",
  senha: "",
  endereco: {
    cep: "",
    logradouro: "",
    numero: "",
    bairro: "",
    cidade: "",
    uf: "",
    complemento: "",
  },
};

function PerfilUser() {
  const [userData, setUserData] = useState(userDataModel);

  const [beneficiarioData, setBeneficiarioData] = useState(
    mockBeneficiariosData
  );

  
  //aqui faz parte autencicacao
  useEffect(() => {
    //const token = JSON.parse(localStorage.getItem("token"));
    

    api
    .get(`/usuarios/usuario-logado`) 
      .then((response) => {
        console.log(response.data)
        if (response.status === 200) {
          setUserData(response.data);
        }
      })
      .catch((error) => {
        alert(`Erro ao realizar a requisição.${error}`);
      });
  }, []);

  return (
    <>
    <nav>
      <div className="bemVindoUser">
        <div className="perfilUser">
          <text className="infoPerfilUser">Olá {userData.nomeEntidade}</text>{" "}
          <text className="linkTrocaFoto">Alterar foto de perfil</text>{" "}
          {/*adicionar função para trocar a foto e enviar pro banco*/}
          <text className="sair">Sair</text> {/*realizar Logout*/}
        </div>
        <div className="trocaFoto">
          <img
            src="../assets/img/user.png"
            className="fotoNull"
            alt="imagem de mockup de usuario sem foto pessoal"
          />
        </div>
      </div>
      <div className="corpoEsquerda">
        <div className="linkPortalUser">
          <Link to="/">
            <button className="acessoUserPortal">
              Acessar Portal da Transparência
            </button>
          </Link>
        </div>
        <div className="infoDoBenef">
          <div className="formataFormUser">
            <ContainerForm>
              <Form className="formularioInfosDoBenef">
                <div className="formDadosUser">
                  <input type="text" value={userData.cpfUsuario} readOnly />

                  <input type="text" value={userData.nomeEntidade} readOnly />

                  <input type="text" value={userData.celular} readOnly />

                  <input type="email" value={userData.email} readOnly />

                  {/* <input type="text" value={userData.senha} readOnly /> */}

                  <input type="text" value={userData.endereco.cep} readOnly />

                  <input
                    type="text"
                    value={userData.endereco.logradouro}
                    readOnly
                  />

                  <div className="formsUserMenores">
                    <input
                      className="formNumeroUser"
                      type="text"
                      value={userData.endereco.numero}
                      readOnly
                    />

                    <input
                      className="formBairroUser"
                      type="text"
                      value={userData.endereco.bairro}
                      readOnly
                    />

                    <input
                      className="formCidade"
                      type="text"
                      value={userData.endereco.cidade}
                      readOnly
                    />

                    <input
                      className="formUFUser"
                      type="text"
                      value={userData.endereco.uf}
                      readOnly
                    />

                    <input
                      type="text"
                      value={userData.endereco.complemento}
                      readOnly
                    />
                  </div>
                </div>
                <div className="botoesAlteraDados">
                  <Link to="/usuario-atualizacao">
                    <button className="editarDados">Editar</button>
                  </Link>
                </div>
              </Form>
            </ContainerForm>
          </div>
        </div>
      </div>

      <div className="infoDoacoes">
        <div className="userDoacoesAprovadas">
          <div className="infoUserDoacaoAprovada">
            <thead>
              <tr className="titulosTabela">
                <th scope="col">Doação</th>
                <th scope="col">Valor/Item</th>
              </tr>
            </thead>
            <tbody className="bodyEnt">
              {beneficiarioData.map((usuario, index) => {
                return (
                  <tr>
                    <td scope="col">{usuario.idUsuario}</td>
                    <td scope="col">
                      R$ {usuario.valor.toFixed(2).replace(".", ",")}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </div>
        </div>
        <div className="userSolicitacoesAprovadas">
          <div className="infoUserSolicitacaoAprovada">
            <thead>
              <tr className="titulosTabela">
                <th scope="col">Solicitação</th>
                <th scope="col"></th>
                <th scope="col">Valor/Item</th>
              </tr>
            </thead>
            <tbody className="bodyEnt">
              {beneficiarioData.map((usuario, index) => {
                return (
                  <tr>
                    <td scope="col">{usuario.idUsuario}</td>
                    <td scope="col"></td>
                    <td scope="col">
                      R$ {usuario.valor.toFixed(2).replace(".", ",")}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </div>
        </div>
      </div>

      <div className="corpoDireita">
        <div className="cadastroDoacao">
          <Link to="/doar-cat">
            <button className="acessoDoacao">Cadastrar uma doação</button>
          </Link>
        </div>
        <div className="cadastroSolicitacao">
          <Link to="/solicitar-cat">
            <button className="acessoSolicitacao">
              Cadastrar uma solicitação
            </button>
          </Link>
        </div>
      </div>
      </nav>
    </>
  );
}

export default PerfilUser;
