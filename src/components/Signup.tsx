import React, { useState } from "react";

import { Link } from "react-router-dom";

import { auth } from "../connection";
import {
  SubmitButton,
  Form,
  Input,
  FormWrapper,
  RegistrationNav,
  RegistrationNavLink,
  CurrentPageTitle,
  Label,
} from "./Registration.styles";
import { Checkbox } from "./Login";
import styled from "styled-components";
import peak from "../assets/peak-icon.svg";

const Signup = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit");

    return auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        const user : any = auth().currentUser;
        return user.updateProfile({
          displayName: username
        })
      })
      .catch(error => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <FormWrapper>
      <RegistrationNav>
        <RegistrationNavLink to='/login'>Login</RegistrationNavLink>
        <Link to='/'>
          <img alt='Clickable Peak icon' src={peak} />
        </Link>

        <CurrentPageTitle>Signup</CurrentPageTitle>
      </RegistrationNav>
      <Form onSubmit={event => handleSubmit(event)}>
        <label htmlFor='username'></label>
        <Input
          required
          id='displayName'
          name='displayName'
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
          pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
          title='Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters'
        />
        <Label htmlFor='termsAndConditions'>
          <Checkbox type='checkbox' id='termsAndConditions' name='termsAndConditions' />
          By signing up, I agree to the terms.
        </Label>
        {error ? <p>{error}</p> : null}
        <SignUpSubmitBtn type='submit'>SIGN UP</SignUpSubmitBtn>
      </Form>
    </FormWrapper>
  );
};

const SignUpSubmitBtn = styled(SubmitButton)`
  background-color: var(--boxing-orange);
`;

export default Signup;
