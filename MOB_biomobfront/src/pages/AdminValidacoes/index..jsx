import React, { useEffect, useState } from "react";
import { Form, ContainerForm } from "./style";
import { Link } from "react-router-dom";

import "./style.css";
import "../../pequenosPadroes.css";

import api from "../../Service/api";
import DadosUsuario from "../../Mock/usuario.json";

const mockBeneficiariosData = [
  {
    idUsuario: "Ricardo Afonso",
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

function AdminValidacoes() {
  const [userData, setUserData] = useState(userDataModel);

  const [beneficiarioData, setBeneficiarioData] = useState(
    mockBeneficiariosData
  );
  useEffect(() => {
    setUserData(DadosUsuario);
  }, []);

  return (
    <>
      <div className="seta-voltar">
        <Link to="/perfil-adm">
          <button className="voltar">Voltar</button>
        </Link>
      </div>
      <div className="titulo-page">
        <text className="titulo">Validações</text>
      </div>
      <div className="sub-titulo">
        <text className="st1">Doações</text>
        <text className="st2">Solicitações</text>
      </div>
      <nav className="page">
        {/* CAMPO DOAÇÕES */}

        <div className="corpoEsquerdaValida">
          <div className="infoDoacoesFundo">
            <div className="formataFormValida">
              <ContainerForm>
                <Form className="formularioInfosValida">
                  <div className="formDadosValida">
                    <input
                      classNmame="espacoImagem"
                      type="image"
                      src="../assets/img/mock1.png"
                    />
                    <input
                      type="text"
                      /*value={userData.nomeEntidade}*/ placeholder="Nome Doador"
                      readOnly
                    />

                    <input
                      type="text"
                      /*value={userData.celular}*/ placeholder="Nome Item"
                      readOnly
                    />

                    <input
                      type="email"
                      /*value={userData.email}*/ placeholder="Categoria"
                      readOnly
                    />

                    <input
                      type="text"
                      /*value={userData.senha}*/ placeholder="Quantidade"
                      readOnly
                    />

                    <input
                      type="text"
                      /*value={userData.senha}*/ placeholder="Observação"
                      readOnly
                    />
                  </div>
                  <div className="botoesAlteraStatusValida">
                    <button className="statusAprova">Aprovar</button>
                    <button className="statusReprova">Reprovar</button>
                  </div>
                </Form>
              </ContainerForm>
              <div className="formataFormValida2">
                <ContainerForm>
                  <Form className="formularioInfosValida">
                    <div className="formDadosValida">
                      <input
                        classNmame="espacoImagem"
                        type="image"
                        src="../assets/img/mock1.png"
                      />
                      <input
                        type="text"
                        /*value={userData.nomeEntidade}*/ placeholder="Nome Doador"
                        readOnly
                      />

                      <input
                        type="text"
                        /*value={userData.celular}*/ placeholder="Nome Item"
                        readOnly
                      />

                      <input
                        type="email"
                        /*value={userData.email}*/ placeholder="Categoria"
                        readOnly
                      />

                      <input
                        type="text"
                        /*value={userData.senha}*/ placeholder="Quantidade"
                        readOnly
                      />

                      <input
                        type="text"
                        /*value={userData.senha}*/ placeholder="Observação"
                        readOnly
                      />
                    </div>
                    <div className="botoesAlteraStatusValida">
                      <button className="statusAprova">Aprovar</button>
                      <button className="statusReprova">Reprovar</button>
                    </div>
                  </Form>
                </ContainerForm>
                <div className="formataFormValida3">
                  <ContainerForm>
                    <Form className="formularioInfosValida">
                      <div className="formDadosValida">
                        <input
                          classNmame="espacoImagem"
                          type="image"
                          src="../assets/img/mock1.png"
                        />
                        <input
                          type="text"
                          /*value={userData.nomeEntidade}*/ placeholder="Nome Doador"
                          readOnly
                        />

                        <input
                          type="text"
                          /*value={userData.celular}*/ placeholder="Nome Item"
                          readOnly
                        />

                        <input
                          type="email"
                          /*value={userData.email}*/ placeholder="Categoria"
                          readOnly
                        />

                        <input
                          type="text"
                          /*value={userData.senha}*/ placeholder="Quantidade"
                          readOnly
                        />

                        <input
                          type="text"
                          /*value={userData.senha}*/ placeholder="Observação"
                          readOnly
                        />
                      </div>
                      <div className="botoesAlteraStatusValida">
                        <button className="statusAprova">Aprovar</button>
                        <button className="statusReprova">Reprovar</button>
                      </div>
                    </Form>
                  </ContainerForm>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CAMPO SOLICITAÇÕES */}
        <div className="corpoDireitaValida">
          <div className="infoSolicitacoesFundo">
            <div className="formataFormValidaSolic">
              <ContainerForm>
                <Form className="formularioInfosValida">
                  <div className="formDadosValida">
                    <input
                      classNmame="espacoImagem"
                      type="image"
                      src="../assets/img/user.png"
                    />
                    <input
                      type="text"
                      /*value={userData.nomeEntidade}*/ placeholder="Nome Beneficiário"
                      readOnly
                    />

                    <input
                      type="text"
                      /*value={userData.celular}*/ placeholder="Nome Item"
                      readOnly
                    />

                    <input
                      type="email"
                      /*value={userData.email}*/ placeholder="Categoria"
                      readOnly
                    />

                    <input
                      type="text"
                      /*value={userData.senha}*/ placeholder="Quantidade"
                      readOnly
                    />

                    <input
                      type="text"
                      /*value={userData.senha}*/ placeholder="Observação"
                      readOnly
                    />
                  </div>
                  <div className="botoesAlteraStatusValida">
                    <button className="statusAprova">Aprovar</button>
                    <button className="statusReprova">Reprovar</button>
                  </div>
                </Form>
              </ContainerForm>
            </div>
          </div>

          <div className="formataFormValidaSolic2">
            <ContainerForm>
              <Form className="formularioInfosValida">
                <div className="formDadosValida">
                  <input
                    classNmame="espacoImagem"
                    type="image"
                    src="../assets/img/user.png"
                  />
                  <input
                    type="text"
                    /*value={userData.nomeEntidade}*/ placeholder="Nome Beneficiário"
                    readOnly
                  />

                  <input
                    type="text"
                    /*value={userData.celular}*/ placeholder="Nome Item"
                    readOnly
                  />

                  <input
                    type="email"
                    /*value={userData.email}*/ placeholder="Categoria"
                    readOnly
                  />

                  <input
                    type="text"
                    /*value={userData.senha}*/ placeholder="Quantidade"
                    readOnly
                  />

                  <input
                    type="text"
                    /*value={userData.senha}*/ placeholder="Observação"
                    readOnly
                  />
                </div>
                <div className="botoesAlteraStatusValida">
                  <button className="statusAprova">Aprovar</button>
                  <button className="statusReprova">Reprovar</button>
                </div>
              </Form>
            </ContainerForm>
          </div>
        </div>

        <div className="formataFormValidaSolic3">
          <ContainerForm>
            <Form className="formularioInfosValida">
              <div className="formDadosValida">
                <input
                  classNmame="espacoImagem"
                  type="image"
                  src="../assets/img/user.png"
                />
                <input
                  type="text"
                  /*value={userData.nomeEntidade}*/ placeholder="Nome Beneficiário"
                  readOnly
                />

                <input
                  type="text"
                  /*value={userData.celular}*/ placeholder="Nome Item"
                  readOnly
                />

                <input
                  type="email"
                  /*value={userData.email}*/ placeholder="Categoria"
                  readOnly
                />

                <input
                  type="text"
                  /*value={userData.senha}*/ placeholder="Quantidade"
                  readOnly
                />

                <input
                  type="text"
                  /*value={userData.senha}*/ placeholder="Observação"
                  readOnly
                />
              </div>
              <div className="botoesAlteraStatusValida">
                <button className="statusAprova">Aprovar</button>
                <button className="statusReprova">Reprovar</button>
              </div>
            </Form>
          </ContainerForm>
        </div>
      </nav>
    </>
  );
}

export default AdminValidacoes;
