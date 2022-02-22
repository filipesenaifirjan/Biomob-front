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
  valor: "",
  obsNomeProjeto: "",
  pix: "",
  nomeTransf: "",
  nomeBancoTransf: "",
  numAgenciaTransf: "",
  numContaTransf: "",
  dadoCpfCnpjTransf: "",
  nomeDepo: "",
  nomeBancoDepo: "",
  numAgenciaDepo: "",
  numContaDepo: "",
  dadoCpfCnpjDepo: "",
  tipos: "DINHEIRO",
};

function SolicitarDinheiro() {
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
        <text className="titulo-solicitar-dinheiro">
          Cadastre uma solicitação de Dinheiro
        </text>
      </div>
      <div className="formataForm">
        <ContainerForm>
          <Form
            className="formularioSolicDinheiro"
            onSubmit={(e) => cadastrar(e)}
          >
            <div className="formSolicDinheiro1">
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

            <div className="formSolicDinheiro2">
              <input type="text" value={userData.nomeEntidade} readOnly />

              <input type="text" value={userData.endereco.cep} readOnly />

              <input
                type="text"
                value={userData.endereco.complemento}
                readOnly
              />

              <input
                //rever o tipe para formatacao em centavos e em $Real!!!
                type="text"
                value={solicitacao.valor}
                onChange={(e) => handleSetSolicitacao("valor", +e.target.value)}
                placeholder="Qual valor você precisa?"
                required
              />
            </div>

            <div className="formSolicDinheiro3">
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
                placeholder="Observação/Nome do projeto"
                required
              />
            </div>
            <div className="formSolicDinheiro4">
              <div>
                <text>Informe seus dados bancários nos campos abaixo:</text>
              </div>
            </div>
            <div className="solicitaPix">
              <input
                className="dadosPix"
                type="text"
                value={solicitacao.pix}
                onChange={(e) => handleSetSolicitacao("pix", e.target.value)}
                placeholder="Insira sua chave PIX"
              />
            </div>

            <div className="solicitaTransf">
              <input
                className="nomeTransf"
                type="text"
                value={solicitacao.nomeTransf}
                onChange={(e) =>
                  handleSetSolicitacao("nomeTransf", e.target.value)
                }
                placeholder="Nome do titular da conta"
              />

              <input
                className="nomeBancoTransf"
                type="text"
                value={solicitacao.nomeBancoTransf}
                onChange={(e) =>
                  handleSetSolicitacao("nomeBancoTransf", e.target.value)
                }
                placeholder="Nome banco"
              />

              <input
                className="numAgenciaTransf"
                type="text"
                value={solicitacao.numAgenciaTransf}
                onChange={(e) =>
                  handleSetSolicitacao("numAgenciaTransf", e.target.value)
                }
                placeholder="Número agência"
              />

              <input
                className="numContaTransf"
                type="text"
                value={solicitacao.numContaTransf}
                onChange={(e) =>
                  handleSetSolicitacao("numContaTransf", e.target.value)
                }
                placeholder="Número da conta e dígito"
              />

              <input
                className="dadoCpfCnpjTransf"
                type="text"
                value={solicitacao.dadoCpfCnpjTransf}
                onChange={(e) =>
                  handleSetSolicitacao("dadoCpfCnpjTransf", e.target.value)
                }
                placeholder="CPF ou CNJP só números"
              />
            </div>

            <div className="solicitaDeposito">
              <input
                className="nomeDepo"
                type="text"
                value={solicitacao.nomeDepo}
                onChange={(e) =>
                  handleSetSolicitacao("nomeDepo", e.target.value)
                }
                placeholder="Nome do titular da conta"
              />

              <input
                className="nomeBancoDepo"
                type="text"
                value={solicitacao.nomeBancoDepo}
                onChange={(e) =>
                  handleSetSolicitacao("nomeBancoDepo", e.target.value)
                }
                placeholder="Nome banco"
              />

              <input
                className="numAgenciaDepo"
                type="text"
                value={solicitacao.numAgenciaDepo}
                onChange={(e) =>
                  handleSetSolicitacao("numAgenciaDepo", e.target.value)
                }
                placeholder="Número agência"
              />

              <input
                className="numContaDepo"
                type="text"
                value={solicitacao.numContaDepo}
                onChange={(e) =>
                  handleSetSolicitacao("numContaDepo", e.target.value)
                }
                placeholder="Número da conta e dígito"
              />

              <input
                className="dadoCpfCnpjDepo"
                type="text"
                value={solicitacao.dadoCpfCnpjDepo}
                onChange={(e) =>
                  handleSetSolicitacao("dadoCpfCnpjDepo", e.target.value)
                }
                placeholder="CPF ou CNJP só números"
              />
            </div>

            <div className="SolicitaConfirmaDinheiro">
              <button type="submit" className="botSolicitar">
                Cadastrar Solicitação
              </button>
            </div>
          </Form>
        </ContainerForm>

        <div className="categoriasRecebimento">
          <div className="recebePix">
            <p>PIX</p>
          </div>
          <img
            src="../../assets/img/setapreta.png"
            className="setaDinheiro"
            alt="seta apontando para a direita, para a opção pix"
          />

          <div className="recebeTransf">
            <p>Transferência</p>
          </div>
          <img
            src="../../assets/img/setapreta.png"
            className="setaDinheiro"
            alt="seta apontando para a direita, para a opção pix"
          />

          <div className="recebeDeposito2">
            <p>Depósito</p>
          </div>
          <img
            src="../../assets/img/setapreta.png"
            className="setaDinheiro"
            alt="seta apontando para a direita, para a opção pix"
          />
        </div>
      </div>
    </>
  );
}
export default SolicitarDinheiro;
