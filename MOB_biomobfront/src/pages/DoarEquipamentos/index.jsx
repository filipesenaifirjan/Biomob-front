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

const doacaoModel = {
  nomeItemDoado: "",
  quantidade: "",
  obsNomeProjeto: "",
  tipos: "EQUIPAMENTOS",
  desejaIdentificar: "TRUE",
  deveRetirar: "",
  // imagem: "", //ver ao certo como se faz // corrigir no codigo com M
};

function DoarEquipamentos() {
  const [userData, setUserData] = useState(userDataModel);
  const [doacao, setDoacao] = useState(doacaoModel);
  const [imagem, setImage] = useState(" ");
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

  function handleSetDoacao(key, value) {
    setDoacao({
      ...doacao,
      [key]: value,
    });
  }

  function cadastrar(e) {
    e.preventDefault();
    console.log(doacao);
    api

      .post("/doacoes", doacao)
      .then((response) => {
        if (response.status === 201) {
          const { data } = response;
          console.log(data);
          alert(`Cadastro realizado`);
        }
      })
      .catch((error) => {
        alert(`${error.message} - Cadastro nao realizado`);
      });
  }

  return (
    <>
      <nav>
        <div className="seta-voltar">
          <Link to="/doar-cat">
            <button className="voltar">Voltar</button>
          </Link>
        </div>
        <div className="titulo">
          <text className="titulo-doar-equipamento">
            Cadastre uma doação de equipamentos
          </text>
        </div>
        <div className="all">
          <div className="formataForm"></div>
          <ContainerForm>
            <Form
              className="formularioDoarEquipamento"
              onSubmit={(e) => cadastrar(e)}
            >
              <div className="formDoaEquipamento1">
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

              <div className="formDoaEquipamento2">
                <input type="text" value={userData.nomeEntidade} readOnly />

                <input type="text" value={userData.endereco.cep} readOnly />

                <input
                  type="text"
                  value={userData.endereco.complemento}
                  readOnly
                />

                <input
                  type="text"
                  value={doacao.nomeItemDoado}
                  onChange={(e) =>
                    handleSetDoacao("nomeItemDoado", e.target.value)
                  }
                  placeholder="Nome do item que você está doando:"
                  required
                />
              </div>

              <div className="formDoaEquipamento3">
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
                    value={doacao.quantidade}
                    onChange={(e) =>
                      handleSetDoacao("quantidade", +e.target.value)
                    }
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

              <div className="form-check-eq">
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

              <div className="formRetirada">
                {/* VER SE O ABNER SABE AUMENTAR O TAMANHO DO QUADRADINHO */}
                <label for="checkboxRetirada">
                  O beneficiario deve retirar a doação?
                </label>
                <div id="radio-group" className="form-check-retira">
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

              <div className="uploadFoto2" onSubmit={uploadImage}>
                <label className="avisoUploadEq">
                  FAÇA UPLOAD DO ITEM CADASTRADO:
                </label>

                <div className="allLable-file-eq">
                  <label className="lable-file-eq">
                    ENVIAR FOTO
                    <input
                      type="file"
                      name="image"
                      onChange={(e) => setImage(e.target.files[0])}
                    />
                  </label>
                </div>
                <div className="doaBotConfirmaEq">
                  <button className="botDoar" type="submit">
                    Cadastrar Doação
                  </button>
                </div>
              </div>
            </Form>
          </ContainerForm>
        </div>
      </nav>
    </>
  );
}
export default DoarEquipamentos;
