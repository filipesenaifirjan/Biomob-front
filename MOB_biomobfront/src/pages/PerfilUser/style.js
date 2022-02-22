import styled from "styled-components";

export const ContainerForm = styled.div`
 
  width: 100%;
  /* display: block; */
  justify-content: center;
  align-items: center;
  padding-top: -1rem;
  padding-bottom: 1.2rem;
  /* background-color: #057987 ; */

  }
`;

export const Form = styled.form`
  /* background-color: #854463; */
  flex-direction: row;
  min-width: 20rem;
  padding: 0.65rem;
  gap: 0.5rem;

  input {
    width: 22rem;
    height: 1.9rem;
    background-color: white;
    font-size: 1rem;
    padding: 0.42rem;
    margin: 0.265rem;
    &:focus {
      outline: 0.1rem solid #36b497;
    }
  }

  input.info2Perfil {
    width: 11rem;
    border: none;
  }

  input.formNumeroUser,
  .formBairroUser {
    width: 8.1rem;
  }

  input.formUFUser {
    width: 8.78rem;
  }

  input.formBairroUser {
    width: 13.25rem;
  }

  input.formCidade,
  .formBairro {
    width: 12.8rem;
  }
`;
