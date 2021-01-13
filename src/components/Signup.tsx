import React, { useState } from "react";
import { signUp } from "../utils/user-management";
import { auth } from "../connection";
import {SubmitButton, Form, Input, FormWrapper, RegistrationNav, RegistrationNavLink } from "./Registration.styles"
import styled from "styled-components"

interface Props {
  currentPage: any;
}

const Signup = () => {
  const currentPage = window.location.pathname;

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit");
    auth().createUserWithEmailAndPassword(email, password);

    // signUp(email, password);
    // await signUpDB(auth().currentUser.email);
  };



  return (
    <FormWrapper>
      <RegistrationNav>
        <RegistrationNavLink to="/login">
          Login
        </RegistrationNavLink>
        <RegistrationNavLink to="/signup">
          Signup
        </RegistrationNavLink>

      </RegistrationNav>
    <Form onSubmit={event => handleSubmit(event)}>
        <label htmlFor='username'></label>
        <Input
          required
          id='username'
          name='username'
          type='text'
          placeholder='Username'
          onChange={e => {
            setUsername(e.target.value);
          }}
        />
        <label htmlFor='email'></label>
        <Input
          required
          id='email'
          name='email'
          type='text'
          placeholder='Email address'
          onChange={event => {
            setEmail(event.target.value);
          }}
        />
        <label htmlFor='password'></label>
        <Input
          required
          id='password'
          name='password'
          type='text'
          placeholder='Password'
          onChange={e => {
            setPassword(e.target.value);
          }}
        />
      
      <SignUpSubmitBtn type='submit'>SIGN UP</SignUpSubmitBtn>
    </Form>
    </FormWrapper>
  );
};

const SignUpSubmitBtn = styled(SubmitButton)`
  background-color:  var(--boxing-orange);
`


export default Signup;



