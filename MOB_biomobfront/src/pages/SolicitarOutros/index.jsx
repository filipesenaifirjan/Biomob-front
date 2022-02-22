import React, { useEffect, useState } from "react";
import { Form, ContainerForm } from "./style";
import { Link } from "react-router-dom";

import "./style.css";
import api from "../../Service/api";
import jwtDecode from "jwt-decode";

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
  quantidade: "",
  obsNomeProjeto: "",
  tipos: "OUTROS",
};

function SolicitarOutros() {
  const [userData, setUserData] = useState(userDataModel);

  const [solicitacao, setSolicitacao] = useState(solicitacaoModel);

  //const id = 1;
  //aqui faz parte autencicacao
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));

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
        <text className="titulo-solicitar-dinheiro">
          Cadastre uma solicitação de outros
        </text>
      </div>
      <div className="formataForm">
        <ContainerForm>
          {/* Naiara, verificar os nomes do form "className"abaixo já estou mudando todos, estava como dinheiro... */}
          {/* Leandro, os nomes estavam iguais de propósito, pra puxar a mesma formatação e não ter que redigitar o código de novo, já que a formatação é exatamente a mesma. Por conta dessas mudanças que perdemos muito da formatação da estilização. :) */}
          <Form
            className="formularioSolicOutros"
            onSubmit={(e) => cadastrar(e)}
          >
            <div className="formSolicOutros1">
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

            <div className="formSolicOutros2">
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

            <div className="formSolicOutros3">
              <input type="text" value={userData.celular} readOnly />

              <input
                type="text"
                value={userData.endereco.logradouro}
                readOnly
              />

              <input type="text" value={userData.endereco.bairro} readOnly />

              <div className="formsMenores2">
                <input
                  className="formQntdOutros"
                  type="text"
                  value={solicitacao.quantidade}
                  onChange={(e) =>
                    handleSetSolicitacao("quantidade", +e.target.value)
                  }
                  required
                  placeholder="Quantidade:"
                />

                <input
                  className="formObsNomOutros"
                  type="text"
                  value={solicitacao.obsNomeProjeto}
                  onChange={(e) =>
                    handleSetSolicitacao("obsNomeProjeto", e.target.value)
                  }
                  required
                  placeholder="Observação/Nome do Projeto"
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
export default SolicitarOutros;
