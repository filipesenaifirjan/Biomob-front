import styled from "styled-components";


export const FormInput = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  justify-content: center;
  gap: 1.5rem;

  /* Oculta label, mas mantém compatibilidade com leitores de tela */
  .item-oculto {
    position: absolute;
    height: 1px;
    width: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip-path: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  .input-tp-usuario,
  .input-senha,
  .input-email {
    width: 100%;
    max-width: 20rem;
    
    padding: 0.9375rem 1rem;

    border-radius: 0.625rem;
    border-color: #000;
    border-width: thin;

    font-size: 1rem;

    &:focus {
      outline: 0.1rem solid #36b497;
  }

  .input-tp-usuario::placeholder,
  .input-senha::placeholder,
  .input-email::placeholder {
    color: var(--cor-placeholder);
  }

  .mensagem-validacao {
    text-align: center;
    font-size: var(--tamanho-fonte-forms-auxiliar);
    font-weight: 500;
    
    color: var(--cor-texto-alerta);
  }

  .titulo-login {
    font-size: 1.5rem;
    margin-top: 5rem;
    margin-bottom: 3.5rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-self: center;

  }

  .recupera{
    font-size: 0.9rem;
    color: #000;
    font-weight: bold;
  }

  .recupera a{
    text-decoration: none;
    color: #000;
  }

  .recupera a:visited{
    color: #000;
    text-decoration: none;
  }

  .recupera a:hover{
    color: var(--cor-fundo-button-claro)
  }

  .recupera a:active{
    color: var(--cor-fundo-button-claro)
  }


.voltar{
  color: white;
  height: 3rem;
  width: 10rem;
}

button.botEntrarLogin {
    background-color: var(--cor-fundo-verde);
    color: white;
    border: none;
    border-radius: 0.5rem;
    width: 10rem;
    height: 3.3rem;
    cursor: pointer;
    font-size:1rem;
  }

  button:hover {
    background: var(--cor-fundo-button-claro)
  }

`;