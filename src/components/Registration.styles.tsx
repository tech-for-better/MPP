import styled from "styled-components";
import { Button } from "./Onboarding.styles";
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
`;

export const RegistrationNavLink = styled(Link)`
  font-weight: bold;
  font-size: 14px;
  color: #131212;
  text-decoration: none;
  margin-bottom: 20px;
`;

export const CurrentPageTitle = styled.h2`
  font-weight: bold;
  font-size: 14px;
  &:before {
    background: none repeat scroll 0 0 transparent;
    position: absolute;
    bottom: 0;
    content: "";
    display: block;
    height: 4px;
    width: 0;
    border-radius: 4px;
    background-color: blue;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
  }
  :hover:before {
    width: 70%;
    left: 0;
  }
`;

export const FormWrapper = styled.section`
  box-shadow: 1px -4px 17px 0px #afb3b8;
  border-radius: 50px 50px 0px 0px;
  position: absolute;
  padding: 2rem 0 1rem 0;
  bottom: 0;
  width: 100%;
  height: auto;
  text-align: center;
`;
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
  :-moz-placeholder {
    /* Firefox 18- */
    padding: 20px;
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
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
  font-size: 12px;
  margin-top: 20px;
`;

export const Label = styled.label`
  color: rgb(117, 111, 134);
  font-weight: bold;
  font-size: 12px;
  margin-right: 130px;
  margin-top: 10px;
  margin-bottom: 20px;
`;
