import styled from "styled-components";

export const ContainerForm = styled.div`
 
  width: 100%;
  /* display: block; */
  justify-content: center;
  align-items: center;
  padding-top: 7rem;
  padding-bottom: 1.2rem;
  /* background-color: #057987 ; */

.checkboxInput {    
    width: 1rem;
    background-color: white;
    font-size: 0.94rem;
    padding: 0.42rem;
    padding-left: 0.2rem;
    &:focus {
      outline: 0.1rem solid #36B497;
    }

  }
`;

export const Form = styled.form`
  /* background-color: #854463; */
  flex-direction: row; 
  min-width: 20rem;
  padding: 2rem;
  gap: 0.5rem;
  
  input {    
    width: 25rem;
    background-color: white;
    font-size: 1rem;
    padding: 0.42rem;
    padding-left: 0.2rem;
    margin: 0.3rem;
    &:focus {
      outline: 0.1rem solid #36B497;
    }
  }


input.formUFMenor{
    width: 8.42rem;
} 

input.formCidadeMenor{
    width: 15.9rem;
} 

`;

