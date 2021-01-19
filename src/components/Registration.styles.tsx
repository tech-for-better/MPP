import styled from "styled-components";
import { Button } from "./Onboarding.styles";
import { Link } from "react-router-dom";

export const RegistrationNav = styled.nav`
  display: flex;
  justify-content: space-evenly;
`;

export const OtherPageTitle = styled(RegistrationNav)``;

export const RegistrationNavLink = styled(Link)`
  font-weight: bold;
  font-size: 14px;
  color: #131212;
  text-decoration: none;
  margin-bottom: 20px;
  position: relative;
  :after {
    background: none repeat scroll 0 0 transparent;
    position: absolute;
    left: -15px;
    content: "";
    display: block;
    height: 2px;
    width: 0;
    border-radius: 4px;
    background-color: black;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 70px;
  }
`;

export const CurrentPageTitle = styled.h2`
  font-weight: bold;
  font-size: 14px;
  position: relative;
  :after {
    background: none repeat scroll 0 0 transparent;
    position: absolute;
    left: -15px;
    content: "";
    display: block;
    height: 2px;
    width: 0;
    border-radius: 4px;
    background-color: black;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 70px;
  }
`;

export const RegistrationWrapper = styled.section`
  @media (min-width: 634px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
`;

export const RegistrationImg = styled.img`
  width: 65%;
  height: auto;

  @media (max-width: 411px) {
    width: 100%;
  }
  @media (max-width: 800px) {
    width: 50%;
  }
  @media (min-width: 634px) {
    width: 90%;
    height: auto;
  }
`;

export const ImageWrapper = styled.div`
  text-align: center;

  @media (min-width: 634px) {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50%;
  }
`;

export const FormWrapper = styled.section`
  box-shadow: 1px -4px 17px 0px #afb3b8;
  border-radius: 50px 50px 0px 0px;
  padding: 2rem 0 1rem 0;
  width: 100%;
  height: auto;
  text-align: center;
  position: absolute;
  bottom: 0;

  @media (min-width: 634px) {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 50%;
    height: 92%;
    border-radius: 0;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 634px) {
    margin-top: 50px;
  }
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
  @media (min-width: 634px) {
    margin-top: 5px;
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
  @media (min-width: 634px) {
    position: absolute;
    bottom: 40px;
  }
`;

export const Label = styled.label`
  color: rgb(117, 111, 134);
  font-weight: bold;
  font-size: 12px;
  margin-right: 130px;
  margin-top: 10px;
  margin-bottom: 20px;
  @media (min-width: 634px) {
    margin-bottom: 0;
  }
`;
