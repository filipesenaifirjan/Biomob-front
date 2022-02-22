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

function AdminDstribuidos() {
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
        <text className="tituloComunica">Itens Distribuidos</text>
      </div>

      <nav className="pageComunica">


        <div className="corpoEsquerdaComunica">
          <div className="infoDistribuido1Fundo">
            <div className="formataFormDoador1">
              <ContainerForm>
                <Form className="formularioInfosComunica">{/*Igual em todos*/}
                  <div className="formDadosComunica">{/*Igual em todos*/}
                    <input
                      type="text"
                      /*value={userData.nomeEntidade}*/ placeholder="Nome Doador"
                      readOnly
                    />
                    <input
                      type="text"
                      /*value={userData.celular}*/ placeholder="Nome Beneficiario"
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
                      /*value={userData.senha}*/ placeholder="Data da Distribuição"
                      readOnly
                    />
                  </div>
                  <div className="botoesAlteraStatusComunica">
                    <button className="encerraProcesso">Encerrar Processo</button>
                  </div>
                </Form>
              </ContainerForm>
            </div>
          </div>
        </div>
        {/* ------------------------ FIM DO PRIMEIRO QUADRADO ------------------------ */}

        {/* ------------------------ SEGUNDO QUADRADO ABAIXO------------------------ */}

        <div className="infoDistribuido2Fundo">
            <div className="formataFormDoador1">
              <ContainerForm>
                <Form className="formularioInfosComunica">{/*Igual em todos*/}
                  <div className="formDadosComunica">{/*Igual em todos*/}
                    <input
                      type="text"
                      /*value={userData.nomeEntidade}*/ placeholder="Nome Doador"
                      readOnly
                    />
                    <input
                      type="text"
                      /*value={userData.celular}*/ placeholder="Nome Beneficiario"
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
                      /*value={userData.senha}*/ placeholder="Data da Distribuição"
                      readOnly
                    />
                  </div>
                  <div className="botoesAlteraStatusComunica">
                    <button className="encerraProcesso">Encerrar Processo</button>
                  </div>
                </Form>
              </ContainerForm>
            </div>
          </div>

              {/* ------------------------ FIM DO SEGUNDO QUADRADO ------------------------ */}

        {/* ------------------------ TERCEIRO QUADRADO ABAIXO------------------------ */}

        <div className="infoDistribuido3Fundo">
            <div className="formataFormDoador1">
              <ContainerForm>
                <Form className="formularioInfosComunica">{/*Igual em todos*/}
                  <div className="formDadosComunica">{/*Igual em todos*/}
                    <input
                      type="text"
                      /*value={userData.nomeEntidade}*/ placeholder="Nome Doador"
                      readOnly
                    />
                    <input
                      type="text"
                      /*value={userData.celular}*/ placeholder="Nome Beneficiario"
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
                      /*value={userData.senha}*/ placeholder="Data da Distribuição"
                      readOnly
                    />
                  </div>
                  <div className="botoesAlteraStatusComunica">
                    <button className="encerraProcesso">Encerrar Processo</button>
                  </div>
                </Form>
              </ContainerForm>
            </div>
          </div>

          {/* ------------------------ FIM DO TERCEIRO QUADRADO ------------------------ */}

        {/* ------------------------ QUARTO QUADRADO ABAIXO------------------------ */}

        <div className="infoDistribuido4Fundo">
            <div className="formataFormDoador1">
              <ContainerForm>
                <Form className="formularioInfosComunica">{/*Igual em todos*/}
                  <div className="formDadosComunica">{/*Igual em todos*/}
                    <input
                      type="text"
                      /*value={userData.nomeEntidade}*/ placeholder="Nome Doador"
                      readOnly
                    />
                    <input
                      type="text"
                      /*value={userData.celular}*/ placeholder="Nome Beneficiario"
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
                      /*value={userData.senha}*/ placeholder="Data da Distribuição"
                      readOnly
                    />
                  </div>
                  <div className="botoesAlteraStatusComunica">
                    <button className="encerraProcesso">Encerrar Processo</button>
                  </div>
                </Form>
              </ContainerForm>
            </div>
          </div>

                  {/* ------------------------ FIM DO QUARTO QUADRADO ------------------------ */}

        {/* ------------------------ QUINTO QUADRADO ABAIXO------------------------ */}

        <div className="infoDistribuido5Fundo">
            <div className="formataFormDoador1">
              <ContainerForm>
                <Form className="formularioInfosComunica">{/*Igual em todos*/}
                  <div className="formDadosComunica">{/*Igual em todos*/}
                    <input
                      type="text"
                      /*value={userData.nomeEntidade}*/ placeholder="Nome Doador"
                      readOnly
                    />
                    <input
                      type="text"
                      /*value={userData.celular}*/ placeholder="Nome Beneficiario"
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
                      /*value={userData.senha}*/ placeholder="Data da Distribuição"
                      readOnly
                    />
                  </div>
                  <div className="botoesAlteraStatusComunica">
                    <button className="encerraProcesso">Encerrar Processo</button>
                  </div>
                </Form>
              </ContainerForm>
            </div>
          </div>
    
 

      </nav>
    </>
  );
}

export default AdminDstribuidos;
