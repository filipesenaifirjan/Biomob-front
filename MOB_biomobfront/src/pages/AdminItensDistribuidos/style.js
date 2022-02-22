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
  }
`;

export const Form = styled.form`
  /* background-color: #854463; */
  flex-direction: row;
  min-width: 15rem;
  padding: 0.65rem;
  gap: 0.5rem;
  margin-left: 1rem;

  input {
    text-align: center;
    width: 13.5rem;
    height: auto;
    background-color: white;
    font-size: 1.07rem;
    padding: 0.594rem;
    margin: 0.20rem;
    border: none;
    &:focus {
      outline: 0.1rem solid #36b497;
      
    }
  }

input.espacoImagem{
  width: auto;
  height: auto;
}


  input.info2Perfil {
    width: 11rem;
    border: none;
  }

  input.formNumeroUser,
  .formBairroUser {
    width: 8.42rem;
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
