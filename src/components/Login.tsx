import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../connection";
import styled from "styled-components";
import {
  RegistrationWrapper,
  Input,
  SubmitButton,
  FormWrapper,
  LoginImg,
  ImageWrapper,
  Form,
  LinkWrapper,
  Label,
  RegistrationNav,
  RegistrationNavLink,
  CurrentPageTitle,
} from "./Registration.styles";

import peak from "../assets/Logos/peak-icon.svg";
import login from "../assets/Registration/login.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    return auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push("/home");
      })
      .catch(error => {
        setError(error.message);
      });
  };

  const rememberMe = (e: React.ChangeEvent<HTMLInputElement>) => {
    auth().setPersistence(e.target.checked ? auth.Auth.Persistence.LOCAL : auth.Auth.Persistence.SESSION);
  };

  return (
    <RegistrationWrapper>
      <ImageWrapper>
        <LoginImg src={login} alt=''></LoginImg>
      </ImageWrapper>
      <FormWrapper>
        <RegistrationNav>
          <CurrentPageTitle>Login</CurrentPageTitle>
          <Link to='/'>
            <img alt='Clickable Peak icon' src={peak} />
          </Link>
          <RegistrationNavLink to='/signup'>Signup</RegistrationNavLink>
        </RegistrationNav>

        <Form onSubmit={event => handleSubmit(event)}>
          <label htmlFor='email'></label>
          <Input
            id='email'
            name='email'
            type='text'
            placeholder='Email address'
            required
            onChange={e => {
              setEmail(e.target.value);
            }}
          />
          <label htmlFor='password'></label>
          <Input
            id='password'
            name='password'
            type='text'
            placeholder='Password'
            required
            onChange={event => {
              setPassword(event.target.value);
            }}
          />
          <TickWrapper>
            <Label htmlFor='rememberMe'>
              <Checkbox
                type='checkbox'
                id='rememberMe'
                name='rememberMe'
                checked
                onChange={e => {
                  rememberMe(e);
                }}
              />
              Remember me
            </Label>
          </TickWrapper>
          {error ? <p>{error}</p> : null}
          <LoginSubmitButton type='submit'>LOGIN</LoginSubmitButton>
          <LinkWrapper>
            Don’t have an account?{" "}
            <Link to='/signup' style={{ textDecoration: "none", fontWeight: "bold", color: "#3F4553" }}>
              Sign Up
            </Link>
          </LinkWrapper>
        </Form>
      </FormWrapper>
    </RegistrationWrapper>
  );
};

const TickWrapper = styled.div`
  padding: 10px;
`;

export const Checkbox = styled.input`
  margin-right: 0.4rem;
  color: rgb(117, 111, 134);
`;

const LoginSubmitButton = styled(SubmitButton)`
  background-color: #74c7e5;
  letter-spacing: 0.1em;
  @media (min-width: 634px) {
    margin-top: 30px;
    width: 40%;
    height: 50px;
  }
  @media (min-width: 1024px) {
    width: 30%;
  }
  @media (min-width: 1300px) {
    margin-top: 40px;
  }
`;

export default Login;
