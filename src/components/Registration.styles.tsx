import styled from "styled-components";
import {Button} from "./Onboarding.styles"
import { Link } from "react-router-dom";


//  label
//  form
//  input
//  button


// RegistrationNav
//  RegistrationNavLink
//  Registration 

export const RegistrationNav = styled.nav`
  display: flex;
  justify-content: space-evenly;
`
export const RegistrationNavLink = styled(Link)`
  text-decoration: none;
  margin-top: 10vh;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`
export const FormWrapper = styled.section`
  box-shadow: 1px -4px 17px 0px #DBE2EA;
  border-radius: 50px 50px 0px 0px;
  position: absolute;
  padding: 2rem 0 1rem 0;
  bottom: 0;
  width: 100%;
  height: auto;
  text-align: center;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  width: 75%;
  height: 53.88px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 3px 6px; 
  border: none;
  margin-bottom: 20px;
  ::-webkit-input-placeholder {
   padding: 20px;
  }
  :-moz-placeholder { /* Firefox 18- */
    padding: 20px; 
  }
  ::-moz-placeholder {  /* Firefox 19+ */
    padding: 20px;
  }
  :-ms-input-placeholder {  
    padding: 20px;
  }
`;

export const SubmitButton = styled(Button)`
  border-radius: 10px;
  width: 75%;
  height: 2.4rem;
  margin: auto;
  color: rgb(255, 255, 255);
  font-size: 20px;
  font-weight: normal;
`;

export const LinkWrapper = styled.div`
  color: #3F4553;
  font-size: 12px;
  margin-top: 20px;
`;