import React, { useEffect, useState } from "react";
import { Form, ContainerForm } from "./style";
import { Link } from "react-router-dom";
import api from "../../Service/api";
import "./style.css";
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
    cidade: "",
    uf: "",
    complemento: "",
  },
};

const doacaoModel = {
  nomeItemDoado: "",
  quantidade: "",
  obsNomeProjeto: "",
  tipos: "OUTROS",
  desejaIdentificar: "TRUE",
  deveRetirar: "",
  // imagem: "", //ver ao certo como se faz // corrigir no codigo com M
};

function DoarOutros() {
  const [userData, setUserData] = useState(userDataModel);
  const [doacao, setDoacao] = useState(doacaoModel);
  const [image, setImage] = useState(" ");

  //verificar abaixo a lógica !!!!
  const uploadImage = async (e) => {
    console.log("Upload Imagem");
  };

  console.log(doacao);
  console.log(cadastrar);

  //const id = 1;
  //aqui faz parte autencicacao
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    console.log(token)

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
      //TODO verificar as rotas através do Swagger
      .post("/doacoes", doacao)
      .then((response) => {
        if (response.status === 201) {
          const { data } = response;
          alert(`Cadastro realizado`);

          
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
        <text className="titulo-doar-outros">
          Cadastre uma doação de Outros
        </text>
      </div>
      <div className="formataForm"></div>
      <ContainerForm>
        <Form className="formularioDoarOutros" onSubmit={(e) => cadastrar(e)}>
          <div className="formDoaOutros1">
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

          <div className="formDoaOutros2">
            <input type="text" value={userData.nomeEntidade} readOnly />

            <input type="text" value={userData.endereco.cep} readOnly />

            <input type="text" value={userData.endereco.complemento} readOnly />

            <input
              type="text"
              value={doacao.nomeItemDoado}
              onChange={(e) => handleSetDoacao("nomeItemDoado", e.target.value)}
              placeholder="Nome do item que você está doando:"
              required
            />
          </div>

          <div className="formDoaOutros3">
            <input type="text" value={userData.celular} readOnly />

            <input type="text" value={userData.endereco.logradouro} readOnly />

            <input type="text" value={userData.endereco.bairro} readOnly />

            <div className="formsMenores2">
              <input
                className="formQntd"
                type="text"
                value={doacao.quantidade}
                onChange={(e) => handleSetDoacao("quantidade", +e.target.value)}
                placeholder="Quantidade"
                required
              />

              <input
                className="formObsNomEp"
                type="text"
                value={doacao.obsNomeProjeto}
                onChange={(e) =>
                  handleSetDoacao("obsNomeProjeto", e.target.value)
                }
                placeholder="Observação/ Nome do projeto"
                required
              />
            </div>
          </div>

          <div class="form-check-outro">
            <input
              className="checkboxInput"
              name="isGoing"
              type="checkbox"
              id="checkAnonimo"
              // faz parte alteracao
              onChange={() =>
                handleSetDoacao(
                  "desejaIdentificar",
                  doacao.desejaIdentificar ? "TRUE": "FALSE"
                )
              }
              
            />
            <label for="checkAnonimo">
              Não desejo me identificar para o beneficiario!
            </label>
          </div>

          
          <div className="formRetirada">
            <label for="checkboxRetirada">
              O beneficiario deve retirar a doação?
            </label>
            <div id="radio-group" class="form-check-retira">
              {/* AQUI FAZ PARTE         */}
              <input
                type="radio"
                name="radio-group"
                className="cboxRetirada"
                onChange={() => handleSetDoacao("deveRetirar", "TRUE")}
                required
              />
              Sim
              <input
                type="radio"
                name="radio-group"
                className="cboxRetirada"
                onChange={() => handleSetDoacao("deveRetirar", "FALSE")}
              />
              Não
            </div>
          </div>
          <div className="uploadFoto3" onSubmit={uploadImage}>
            <div className="avisoUpload">
              <label>FAÇA UPLOAD DO ITEM CADASTRADO:</label>
            </div>
            <div className="allLable-file-ot">
            <label className="lable-file-outros">
              ENVIAR FOTO
              <input
                type="file"
                name="image"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </label>
            </div>
            <div className="doaBotConfirmaOt">
              <button className="botDoar" type="submit">
                Cadastrar Doação
              </button>
            </div>
          </div>
        </Form>
      </ContainerForm>
    </>
  );
}
export default DoarOutros;
