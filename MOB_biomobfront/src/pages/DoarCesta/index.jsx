import React, { useEffect, useState } from "react";
import { Form, ContainerForm } from "./style";
import { Link } from "react-router-dom";
import api from "../../Service/api";
import "./style.css";

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
//faz parte da alt combinar com o backend
const doacaoModel = {
  quantidade: "",
  obsNomeProjeto: "",
  desejaIdentificar: "TRUE",
  deveRetirar: "",
  tipos: "CESTABASICA",
  // imagem: "", //ver ao certo como se faz /// corrigir no cod // nas imagens ela fica somente o ID
};

function DoarCesta() {
  const [userData, setUserData] = useState(userDataModel);

  const [doacao, setDoacao] = useState(doacaoModel);

  const [imagem, setImage] = useState(" ");
  //verificar abaixo a lógica !!!!
  const uploadImage = async (e) => {
    console.log("Upload Imagem");
  };
  console.log(doacao);

  //aqui faz parte autencicacao
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));

    console.log(token);

    api
      //.get(`/usuarios/${id}`)
      .get(`/usuarios/usuario-logado`) // pega usuario logado
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

          setUserData(userDataModel);
        }
      })
      .catch((error) => {
        alert(`${error.message} - Cadastro nao realizado`);
      });
  }

  return (
    <>
      <body>
        <div className="seta-voltar">
          <Link to="/doar-cat">
            <button className="voltar">Voltar</button>
          </Link>
        </div>
        <div className="titulo">
          <text className="titulo-doar-cesta">
            Cadastre uma doação de Cesta Básica
          </text>
        </div>
        <div className="formataForm">
          <ContainerForm>
            <Form
              className="formularioDoarCesta"
              onSubmit={(e) => cadastrar(e)}
            >
              <div className="formDoarCesta1">
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

              <div className="formDoarCesta2">
                <input type="text" value={userData.nomeEntidade} readOnly />

                <input type="text" value={userData.endereco.cep} readOnly />

                <input
                  type="text"
                  value={userData.endereco.complemento}
                  readOnly
                />

                <input
                  type="text"
                  value={doacao.quantidade}
                  onChange={(e) =>
                    handleSetDoacao("quantidade", +e.target.value)
                  }
                  placeholder="Quantidade:"
                  required
                />
              </div>

              <div className="formDoarCesta3">
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
                  placeholder="Observação/Nome do projeto:"
                  required
                />
              </div>
              <div></div>
              <div class="form-check-cesta">
                <input
                  className="checkboxInput"
                  name="isGoing"
                  type="checkbox"
                  id="checkAnonimo"
                  // faz parte alteracao
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

              <div className="formRetirada">
                <label for="checkboxRetirada">
                  O beneficiario deve retirar a doação?
                </label>
                <div id="radio-group" class="form-check-retira">
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

              <div className="uploadFoto4" onSubmit={uploadImage}>
                <div className="avisoUploadCesta">
                  <label>FAÇA UPLOAD DO ITEM CADASTRADO:</label>
                </div>
                <div className="allLable-file-ce">
                  <label className="lable-file-cesta">
                    ENVIAR FOTO
                    <input
                      type="file"
                      name="imagem"
                      onChange={(e) => setImage(e.target.files[0])}
                    />
                  </label>
                </div>
                <div className="doaBotConfirmaCe">
                  <button className="botDoar" type="submit">
                    Cadastrar Doação
                  </button>
                </div>
              </div>
            </Form>
          </ContainerForm>
        </div>
      </body>
    </>
  );
}
export default DoarCesta;
