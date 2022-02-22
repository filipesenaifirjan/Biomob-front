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
  nomeItemSolicitado: "",
  obsNomeProjeto: "",
  quantidade: "",
  tipos: "EQUIPAMENTOS",
};

function SolicitarEquipamento() {
  const [userData, setUserData] = useState(userDataModel);

  const [solicitacao, setSolicitacao] = useState(solicitacaoModel);

  const id = 17;
  //aqui faz parte autencicacao
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    console.log(token);

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

          setUserData(userDataModel);
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
        <text className="titulo-solicitar-equipamento">
          Cadastre uma solicitação de Equipamentos Acessíveis
        </text>
      </div>
      <div className="formataForm">
        <ContainerForm>
          <Form
            className="formularioSolicEquipa"
            onSubmit={(e) => cadastrar(e)}
          >
            <div className="formSolicEquipa1">
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
                  className="formUFEq"
                  type="text"
                  value={userData.endereco.uf}
                  readOnly
                />
              </div>
            </div>

            <div className="formSolicEquipa2">
              <input type="text" value={userData.nomeEntidade} readOnly />

              <input type="text" value={userData.endereco.cep} readOnly />

              <input
                type="text"
                value={userData.endereco.complemento}
                readOnly
              />

              <input
                type="text"
                value={solicitacao.nomeItemSolicitado}
                onChange={(e) =>
                  handleSetSolicitacao("nomeItemSolicitado", e.target.value)
                }
                required
                placeholder="Nome do item que você precisa:"
              />
            </div>

            <div className="formSolicEquipa3">
              <input type="text" value={userData.celular} readOnly />

              <input
                type="text"
                value={userData.endereco.logradouro}
                readOnly
              />

              <input type="text" value={userData.endereco.bairro} readOnly />

              <div className="formsMenores2">
                <input
                  className="formQntd"
                  type="text"
                  value={solicitacao.quantidade}
                  onChange={(e) =>
                    handleSetSolicitacao("quantidade", +e.target.value)
                  }
                  required
                  placeholder="Quantidade:"
                />

                <input
                  className="formObsNomEp"
                  type="text"
                  value={solicitacao.obsNomeProjeto}
                  onChange={(e) =>
                    handleSetSolicitacao("obsNomeProjeto", e.target.value)
                  }
                  required
                  placeholder="Observação/Nome do Projeto:"
                />
              </div>
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
export default SolicitarEquipamento;
