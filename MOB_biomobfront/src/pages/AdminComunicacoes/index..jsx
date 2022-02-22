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

function AdminComunicacoes() {
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
        <text className="tituloComunica">Comunicações - Match</text>
      </div>

      <nav className="pageComunica">
        {/* CAMPO DOAÇÕES */}

        <div className="corpoEsquerdaComunica">
          <div className="infoMatch1Fundo">
            <div className="formataFormDoador1">
              <ContainerForm>
                <Form className="formularioInfosComunica">{/*Igual em todos*/}
                  <div className="formDadosComunica">{/*Igual em todos*/}
                    <input
                      classNmame="espacoImagem"
                      type="image"
                      alt="imagem"
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
                  <div className="botoesAlteraStatusComunica">
                    <button className="statusAprova">Aprovar</button>
                    <button className="statusReprova">Reprovar</button>
                  </div>
                </Form>
              </ContainerForm>
            </div>

            <div className="formataFormBenef1">
              <ContainerForm>
                <Form className="formularioInfosComunica">
                  <div className="formDadosComunica">
                    <input
                      classNmame="espacoImagem"
                      type="image"
                      alt="imagem"
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
                  <div className="botoesAlteraStatusComunica">
                    <button className="statusAprova">Aprovar</button>
                    <button className="statusReprova">Reprovar</button>
                  </div>
                </Form>
              </ContainerForm>
            </div>
          </div>
        </div>
        {/* ------------------------ FIM DO PRIMEIRO QUADRADO ------------------------ */}

        {/* ------------------------ SEGUNDO QUADRADO ABAIXO------------------------ */}

        <div className="corpoDireitaComunica">
          <div className="infoMatch2Fundo">
            <div className="formataFormBenef2">
              <ContainerForm>
                <Form className="formularioInfosComunica">
                  <div className="formDadosComunica">
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
                  <div className="botoesAlteraStatusComunica">
                    <button className="statusAprova">Aprovar</button>
                    <button className="statusReprova">Reprovar</button>
                  </div>
                </Form>
              </ContainerForm>
            </div>
            <div className="formataFormDoador2">
              <ContainerForm>
                <Form className="formularioInfosComunica">
                  <div className="formDadosComunica">
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
                  <div className="botoesAlteraStatusComunica">
                    <button className="statusAprova">Aprovar</button>
                    <button className="statusReprova">Reprovar</button>
                  </div>
                </Form>
              </ContainerForm>
            </div>
          </div>          
        </div>

        {/* ------------------------ FIM DO SEGUNDO QUADRADO ------------------------ */}

        {/* ------------------------ TERCEIRO QUADRADO ABAIXO------------------------ */}

        <div className="infoMatch3Fundo">
        <div className="formataFormDoador3">
              <ContainerForm>
                <Form className="formularioInfosComunica">
                  <div className="formDadosComunica">
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
                  <div className="botoesAlteraStatusComunica">
                    <button className="statusAprova">Aprovar</button>
                    <button className="statusReprova">Reprovar</button>
                  </div>
                </Form>
              </ContainerForm>
              </div>


            <div className="formataFormBenef3">
              <ContainerForm>
                <Form className="formularioInfosComunica">
                  <div className="formDadosComunica">
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
                  <div className="botoesAlteraStatusComunica">
                    <button className="statusAprova">Aprovar</button>
                    <button className="statusReprova">Reprovar</button>
                  </div>
                </Form>
              </ContainerForm>
            </div>
          </div>
      </nav>
    </>
  );
}

export default AdminComunicacoes;
