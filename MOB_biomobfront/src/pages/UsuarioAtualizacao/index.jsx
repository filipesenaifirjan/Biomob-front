import React, { useEffect, useState } from "react";
import api from "../../Service/api";
import { Form, ContainerForm } from "./style";
import apiviacep from "../../Service/apiviacep";
import { Link } from "react-router-dom";

import "./style.css";
import jwtDecode from "jwt-decode";

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
  // imagem: "",
};

function AtualizarUsuario() {
  const [userData, setUserData] = useState(userDataModel);
  // aqui faz parte
  const [confirmarSenha, setConfirmarSenha] = useState();
  //para inserir imagem
  // const [imagem, setImage] = useState("");

  // const uploadImage = async (e) => {
  //   console.log("Upload Imagem");
  // };

// faz parte da alteracao ID TOKEN !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// if (!token) {
//   return null;
// }
// const tokenDecriptado = jwtDecode(token);
// const id = tokenDecriptado?.idUsuario;


  const getInformacoes = () => {
    if (userData.endereco.cep.length !== 8) {
      alert("CEP inválido");
      return;
    }
    apiviacep
      .get("http://viacep.com.br/ws/" + userData.endereco.cep + "/json/")
      .then((response) => {
        if (response?.data?.erro) {
          alert("CEP não encontrado");
        }
        setUserData({
          ...userData,
          endereco: {
            ...userData.endereco,
            logradouro: response.data.logradouro,
            bairro: response.data.bairro,
            cidade: response.data.localidade,
            uf: response.data.uf,
          },
        });
      })
      .catch((error) => {
        console.log("CEP inválido");
      });
  };

  useEffect(() => {
    if (userData.endereco.cep.length === 8) {
      getInformacoes();
    }
  }, [userData.endereco.cep]);
  //TODO verificar se está correto

  const id = 17;
  //aqui faz parte autencicacao
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"))
    
    api
      .get(`/usuarios/${id}`)
      .then((response) => {
        if (response.status === 200) {
          setUserData(response.data);
        }
      })
      .catch((error) => {
        alert(`Erro ao realizar a requisição.${error}`);
      });
  }, []);

  function handleSetUserData(key, value) {
    setUserData({
      ...userData,
      [key]: value,
    });
  }
  function handleSetUserDataEndereco(key, value) {
    setUserData({
      ...userData,
      endereco: {
        ...userData.endereco,
        [key]: value,
      },
    });
  }

  function atualizar(e) {
    e.preventDefault();
    console.log(userData);

    //faz parte da alt
    if (userData.senha.length !== 6)
      return alert("Senha deve conter 6 digitos");
    if (userData.senha !== confirmarSenha) return alert("Senhas não conferem");

    api

    //PUT PARA ATUALIZACAO !!!!!
      .put("/usuarios", userData)
      .then((response) => {
        if (response.status === 201) {
          const { data } = response;
          alert(`Atualizacao Realizada`);

          setUserData(userDataModel);
          //faz parte da alt
          setConfirmarSenha("");
        }
      })
      .catch((error) => {
        alert(`${error.message} - Atualização não realizada`);
      });
  }

  return (
    <>
      <div className="seta-voltar">
        <Link to="/login">
          <button className="voltar">Voltar</button>
        </Link>
      </div>
      <div className="titulo-pageConta">
        <text className="tituloConta">Atualize seus dados</text>
      </div>
      <div className="formataForm">
        <ContainerForm>
          <Form className="formularioCadastro" onSubmit={(e) => atualizar(e)}>
            <div className="formCadastro1">
              <input
                type="text"
                value={userData.cpfUsuario}
                onChange={(e) =>
                  handleSetUserData("cpfUsuario", e.target.value)
                }
                placeholder="CPF somente números"
                required
              />

              <input
                type="email"
                value={userData.email}
                onChange={(e) => handleSetUserData("email", e.target.value)}
                placeholder="Email"
                required
              />

              <input
                type="text"
                value={userData.endereco.cep}
                onChange={(e) =>
                  handleSetUserDataEndereco("cep", e.target.value)
                }
                placeholder="CEP"
                required
              />
              <input
                type="text"
                value={userData.endereco.complemento}
                onChange={(e) =>
                  handleSetUserDataEndereco("complemento", e.target.value)
                }
                placeholder="Complemento"
                required
              />
            </div>
            <div className="formCadastro2">
              <input
                type="text"
                value={userData.nomeEntidade}
                onChange={(e) =>
                  handleSetUserData("nomeEntidade", e.target.value)
                }
                placeholder="Nome completo"
                required
              />

              <input
                type="password"
                value={userData.senha}
                onChange={(e) => handleSetUserData("senha", e.target.value)}
                placeholder="Senha"
                //aqui faz parte da config senha
                minLength="6"
                maxLength="6"
                required
              />

              <input
                type="text"
                value={userData.endereco.logradouro}
                onChange={(e) =>
                  handleSetUserDataEndereco("logradouro", e.target.value)
                }
                placeholder="Logradouro"
                required
              />
              <input
                type="text"
                value={userData.endereco.bairro}
                onChange={(e) =>
                  handleSetUserDataEndereco("bairro", e.target.value)
                }
                placeholder="Bairro"
                required
              />
            </div>
            <div className="formCadastro3">
              <input
                type="text"
                value={userData.celular}
                onChange={(e) => handleSetUserData("celular", e.target.value)}
                placeholder="Celular com DDD e Whatsapp"
                required
              />
              {/* // aqui faz parte */}
              <input
                type="password"
                value={confirmarSenha}
                onChange={(e) =>
                  // aqui faz parte
                  setConfirmarSenha(e.target.value)
                }
                placeholder="Confirme a senha"
                //aqui faz parte da config senha
                minLength="6"
                maxLength="6"
                required
              />
              <input
                // espera receber um inteiro
                type="text"
                value={userData.endereco.numero}
                onChange={(e) =>
                  handleSetUserDataEndereco("numero", +e.target.value)
                }
                placeholder="Número"
              />
              <div className="formsMenores">
                <input
                  className="formCidadeMenor"
                  type="text"
                  value={userData.endereco.cidade}
                  onChange={(e) =>
                    handleSetUserDataEndereco("cidade", e.target.value)
                  }
                  placeholder="Cidade"
                  required
                />
                <input
                  className="formUFMenor"
                  type="text"
                  value={userData.endereco.uf}
                  onChange={(e) =>
                    handleSetUserDataEndereco("uf", e.target.value)
                  }
                  placeholder="UF"
                  required
                />
              </div>
            </div>
            
            <div className="confirmaCadastro">
              <button className="botCadastra" type="submit">
                Atualizar Usuário
              </button>
            </div>
          </Form>

          {/* faz parte do envio da foto cadastro */}
          {/* <Form  onSubmit={uploadImage}>
          <div className="avisoUpload">
            <label>FAÇA UPLOAD DA SUA FOTO:</label>
          </div> */}
          {/* NAIARA ESTILIZAR ESTA LABLE NO STYLE.CSS */}
          {/* <label >
            ENVIAR FOTO
            <input
              type="file"
              name="imagem"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </label>
          
        </Form> */}
        </ContainerForm>
      </div>
    </>
  );
}
export default AtualizarUsuario;