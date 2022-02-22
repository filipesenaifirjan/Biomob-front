import React, { useEffect, useState } from "react";
import { Form, ContainerForm } from "./style";
import { Link } from "react-router-dom";

import "./style.css";
import api from "../../Service/api";

const userDataModel = {
  cpfUsuario: "",
  nomeEntidade: "",
  celular: "",
  email: "",
  endereco: {
    cep: "",
    logradouro: "",
    numero: "",
    bairro: "",
    localidade: "",
    uf: "",
    complemento: "",
  },
};

const solicitacaoModel = {
  quantidade: "",
  obsNomeProjeto: "",
  tipos: "CESTABASICA",
};

function SolicitarCesta() {
  const [userData, setUserData] = useState(userDataModel);

  const [solicitacao, setSolicitacao] = useState(solicitacaoModel);

  //const id = 1;
  //aqui faz parte autencicacao
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));

    console.log(token);

    // faz parte da alteracao ID TOKEN !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // if (!token) {
    //   return null;
    // }
    // const tokenDecriptado = jwtDecode(token);
    // const id = tokenDecriptado?.idUsuario;

    api
      //.get(`/usuarios/${id}`)
      .get(`/usuarios/usuario-logado`)
      .then((response) => {
        if (response.status === 200) {
          setUserData(response.data);
        }
      })
      .catch((error) => {
        alert(`Erro ao realizar a requisição.${error}`);
      });
  }, []);

  function handleSetSolicitacao(key, value) {
    setSolicitacao({
      ...solicitacao,
      [key]: value,
    });
  }

  function cadastrar(e) {
    e.preventDefault();
    console.log(solicitacao);
    api

      .post("/solicitacoes", solicitacao)
      .then((response) => {
        if (response.status === 201) {
          const { data } = response;
          alert(`Solicitação realizada`);
        }
      })
      .catch((error) => {
        alert(`${error.message} - Solicitação nao realizada`);
      });
  }

  return (
    <>
      <div className="seta-voltar">
        <Link to="/solicitar-cat">
          <button className="voltar">Voltar</button>
        </Link>
      </div>
      <div className="titulo">
        <text className="titulo-solicitar-cesta">
          Cadastre uma solicitação de Cesta Básica
        </text>
      </div>
      <div className="formataForm">
        <ContainerForm>
          <Form className="formularioSolicCesta" onSubmit={(e) => cadastrar(e)}>
            <div className="formSolicCesta1">
              <input type="text" value={userData.cpfUsuario} readOnly />

              <input type="email" value={userData.email} readOnly />

              <input type="text" value={userData.endereco.numero} readOnly />

              <div className="formsMenores">
                <input
                  className="formCidadeMenor"
                  type="text"
                  value={userData.endereco.cidade}
                  readOnly
                />
                <input
                  className="formUFMenor"
                  type="text"
                  value={userData.endereco.uf}
                  readOnly
                />
              </div>
            </div>

            <div className="formSolicCesta2">
              <input type="text" value={userData.nomeEntidade} readOnly />

              <input type="text" value={userData.endereco.cep} readOnly />

              <input
                type="text"
                value={userData.endereco.complemento}
                readOnly
              />

              <input
                type="text"
                value={solicitacao.quantidade}
                onChange={(e) =>
                  handleSetSolicitacao("quantidade", +e.target.value)
                }
                placeholder="Quantidade"
                required
              />
            </div>

            <div className="formSolicCesta3">
              <input type="text" value={userData.celular} readOnly />

              <input
                type="text"
                value={userData.endereco.logradouro}
                readOnly
              />

              <input type="text" value={userData.endereco.bairro} readOnly />

              <input
                type="text"
                value={solicitacao.obsNomeProjeto}
                onChange={(e) =>
                  handleSetSolicitacao("obsNomeProjeto", e.target.value)
                }
                placeholder="Observações:"
                required
              />
            </div>
            <div className="SolicitaConfirma">
              <button type="submit" className="botSolicitar">
                Cadastrar Solicitação
              </button>
            </div>
          </Form>
        </ContainerForm>
      </div>
    </>
  );
}
export default SolicitarCesta;
