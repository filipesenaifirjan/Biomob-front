import React, { useEffect, useState } from "react";
import { Form, ContainerForm } from "./style";
import { Link } from "react-router-dom";

import "./style.css";

import api from "../../Service/api";
import DadosUsuario from "../../Mock/usuario.json";

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

function PerfilAdm() {
  const [userData, setUserData] = useState(userDataModel);

  const [beneficiarioData, setBeneficiarioData] = useState(
    mockBeneficiariosData
  );
  useEffect(() => {
    setUserData(DadosUsuario);
  }, []);

  return (
    <>
      <nav className="page">
        <div className="bemVindoAdm">
          <div className="perfilAdm">
            <text className="infoPerfilAdm">Olá {userData.nomeEntidade}</text>{" "}
            <text className="linkTrocaFotoAdm">Alterar foto de perfil</text>{" "}
            {/*puxar foto do back*/}
            <text className="sairAdm">Sair</text> {/*realizar Logout*/}
          </div>
          <div className="trocaFotoAdm">
            <img
              src="../assets/img/user.png"
              className="fotoNullAdm"
              alt="imagem de mockup de usuario sem foto pessoal"
            />
          </div>
        </div>
        <div className="corpoEsquerdaAdm">
          <div className="linkPortalUser">
            <Link to="/">
              <button className="acessoPortal">
                Acessar Portal da Transparência
              </button>
            </Link>
          </div>
          <div className="infoDoAdm">
            <div className="formataFormAdm">
              <ContainerForm>
                <Form className="formularioInfosDoAdm">
                  <div className="formDadosAdm">
                    <input type="text" value={userData.nomeEntidade} readOnly />

                    <input type="text" value={userData.celular} readOnly />

                    <input type="email" value={userData.email} readOnly />

                    <input type="text" value={userData.senha} readOnly />
                  </div>
                  <div className="botoesAlteraDadosAdm">
                    <button className="editarDadosAdm">Editar</button>
                  </div>
                </Form>
              </ContainerForm>
            </div>
          </div>
        </div>

        <div className="PesquisaEntidadesCadastradas">
          <div className="pesquisaEnt">
            <thead>
              <tr>
                <th className="titulosTabelaAdm" scope="col">
                  LISTA DE ENTIDADES CADASTRADAS
                </th>
              </tr>
            </thead>
            <tbody className="bodyEntAdm">
              {beneficiarioData.map((usuario, index) => {
                return (
                  <tr>
                    <td scope="col">{usuario.idUsuario}</td>
                  </tr>
                );
              })}
            </tbody>
          </div>
        </div>
        <div className="corpoDireitaAdm">
          <div className="botoesLinksAdm">
            <Link to="admin-validacoes">
              <button className="acessoBotAdm">VALIDAÇÕES</button>
            </Link>
          </div>
          <div className="botoesLinksAdm">
            <Link to="/admin-aprovados">
              <button className="acessoBotAdm">
                ITENS APROVADOS
              </button>
            </Link>
          </div>
          <div className="botoesLinksAdm">
            <Link to="/admin-comunicacoes">
              <button className="acessoBotAdm">
                COMUNICAÇÕES
              </button>
            </Link>
          </div>
          <div className="botoesLinksAdm">
            <Link to="/admin-distribuidos">
              <button className="acessoBotAdm">
                ITENS DISTRIBUIDOS
              </button>
            </Link>
          </div>
          <div className="botoesLinksAdm">
            <Link to="#">
              <button className="acessoBotAdm">
        {/* Acho que tem que inserir um função de enviar foto, não tem página sobre isso */}
                ENVIAR FOTO DA DOAÇÃO DISTRIBUIDA
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default PerfilAdm;
