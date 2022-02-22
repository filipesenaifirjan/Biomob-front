import styled from "styled-components";


export const FormInput = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  justify-content: center;
  gap: 2rem;

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

    margin-top: 5rem;
    
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


  button {
    background-color: var(--cor-fundo-verde);
    color: white;
    border: none;
    border-radius: 0.5rem;
    height: 2.5rem;
    cursor: pointer;
  }

  button:hover {
    background: var(--cor-fundo-button-claro)
  }

`;