import React, { useEffect, useState } from "react";
import { Form, ContainerForm } from "./style";
import { Link } from "react-router-dom";
import api from "../../Service/api";
import "./style.css";
import jwtDecode from "jwt-decode";

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
    idUsuario: "Klara Grangeia ",
    valor: 300,
  },

  {
    idUsuario: "Simona Batata",
    valor: 200,
  },

  {
    idUsuario: "Adonai Tavares",
    valor: 300,
  },

  {
    idUsuario: "Fernanda Granjeiro",
    valor: 200,
  },

  {
    idUsuario: "Liliane Lários Canedo",
    valor: 300,
  },

  {
    idUsuario: "Giovana Morão ",
    valor: 200,
  },

  {
    idUsuario: "Arina Souto Maior ",
    valor: 300,
  },

  {
    idUsuario: "Estevão Fraga ",
    valor: 400,
  },
];

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
    cidade: "",
    uf: "",
    complemento: "",
  },
};
//faz parte da alt
const doacaoModel = {
  valor: "",
  obsNomeProjeto: "",
  desejaIdentificar: "TRUE",
  tipos: "DINHEIRO",
};

function DoarDinheiro() {
  const [userData, setUserData] = useState(userDataModel);
  //faz parte da alt
  const [doacao, setDoacao] = useState(doacaoModel);
  //lista doador abaixo
  const [beneficiarioData, setBeneficiarioData] = useState(
    mockBeneficiariosData
  );

  console.log(doacao);
  console.log(cadastrar);

  //const id = 1;
  //aqui faz parte autencicacao
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    console.log(token);

    // faz parte da alteracao ID TOKEN 
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

  function handleSetDoacao(key, value) {
    setDoacao({
      ...doacao,
      [key]: value,
    });
  }

  function cadastrar(e) {
    e.preventDefault();

    api

      .post("/doacoes", doacao)
      .then((response) => {
        if (response.status === 201) {
          const { data } = response;
          alert(`Cadastro realizado`);

          setUserData(userDataModel);
        }
      })
      .catch((error) => {
        alert(`${error.message} - Cadastro nao realizado`);
      });
  }

  return (
    <>
      <div className="seta-voltar">
        <Link to="/doar-cat">
          <button className="voltar">Voltar</button>
        </Link>
      </div>
      <div className="titulo">
        <text className="titulo-doar-dinheiro">
          Cadastre uma doação de dinheiro
        </text>
      </div>
      <div className="formataForm">
        <ContainerForm>
          <Form
            className="formularioDoaDinheiro"
            onSubmit={(e) => cadastrar(e)}
          >
            <div className="formDoaDinheiro1">
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

            <div className="formDoaDinheiro2">
              <input type="text" value={userData.nomeEntidade} readOnly />

              <input type="text" value={userData.endereco.cep} readOnly />

              <input
                type="text"
                value={userData.endereco.complemento}
                readOnly
              />

              {/* //faz parte da alt ABNER */}
              <input
                type="text"
                value={doacao.valor}
                onChange={(e) => handleSetDoacao("valor", +e.target.value)}
                placeholder="Valor"
                required
              />
            </div>

            <div className="formDoaDinheiro3">
              <input type="text" value={userData.celular} readOnly />

              <input
                type="text"
                value={userData.endereco.logradouro}
                readOnly
              />

              <input type="text" value={userData.endereco.bairro} readOnly />

              <input
                type="text"
                value={doacao.obsNomeProjeto}
                onChange={(e) =>
                  handleSetDoacao("obsNomeProjeto", e.target.value)
                }
                placeholder="Observação/Nome do Projeto ou Beneficiario"
                required
              />
            </div>

            <div className="formDoaDinheiro4">
              <text>Visualize abaixo as entidades beneficiárias:</text>
            </div>

            <div class="form-check-dinheiro">
              <input
                className="checkboxInput"
                name="isGoing"
                type="checkbox"
                id="checkAnonimo"
                onChange={() =>
                  handleSetDoacao(
                    "desejaIdentificar",
                    doacao.desejaIdentificar ? "TRUE" : "FALSE"
                  )
                }
              />
              <label for="checkAnonimo">
                Não desejo me identificar para o beneficiario!
              </label>
            </div>

            <div className="doaConfirma">
              <button type="submit" className="botDoar">
                Cadastrar Doação
              </button>
            </div>
          </Form>
        </ContainerForm>

        <div className="botoesPagamento">
          <a href="#openModal1">
            <button className="infoBotaoDoa">PIX</button>
          </a>
          <div id="openModal1" className="modalDialog1">
            <div>
              <a href="#close" title="Close" className="close">
                X
              </a>
              <br></br>
              <h3>Informações de PIX</h3>
              <br></br>
              <p>PIX Biomob </p>
              <br></br>
              <p>Tipo de chave: CNPJ </p>
              <br></br>
              <p>24502538000162 </p>
              <br></br>
            </div>
          </div>

          <a href="#openModal2">
            <button className="infoBotaoDoa">Transferência</button>
          </a>
          <div id="openModal2" className="modalDialog2">
            <div>
              <a href="#close" title="Close" className="close">
                X
              </a>
              <h3>Informações para Transferência</h3>
              <br></br>
              <p>CNPJ: 24.502.538/0001-62 </p>
              <p>Banco: Bradesco </p>
              <p>Tipo de conta: Corrente </p>
              <p>Agência: 0026 </p>
              <p>Conta: 19.241 </p>
              <p>Dígito: 4 </p>
              <br></br>
            </div>
          </div>

          <a href="#openModal3">
            <button className="infoBotaoDoa">Depósito</button>
          </a>
          <div id="openModal3" className="modalDialog3">
            <div>
              <a href="#close" title="Close" className="close">
                X
              </a>
              <h3>Informações para depósito</h3>
              <br></br>
              <p>CNPJ: 24.502.538/0001-62 </p>
              <p>Banco: Bradesco </p>
              <p>Tipo de conta: Corrente </p>
              <p>Agência: 0026 </p>
              <p>Conta: 19.241 </p>
              <p>Dígito: 4 </p>
              <br></br>
            </div>
          </div>
        </div>

        {/* Inicio das listas das empresas */}

        <div className="allTable">
          <div className="tabelaBenef">
            <thead>
              <tr className="titulosTabela">
                <th scope="col">Beneficiario</th>
                <th scope="col">Valor Solicitado</th>
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
      </div>
    </>
  );
}
export default DoarDinheiro;
