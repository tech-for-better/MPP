import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth, db } from "../connection";
import {
  RegistrationWrapper,
  SubmitButton,
  Form,
  Input,
  FormWrapper,
  ImageWrapper,
  SignUpImage,
  RegistrationNav,
  RegistrationNavLink,
  CurrentPageTitle,
  Label,
} from "./Registration.styles";
import { Checkbox } from "./Login";
import styled from "styled-components";
import peak from "../assets/Logos/peak-icon.svg";
import SignUpImg from "../assets/Registration/signup.svg";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    return auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        const user: any = auth().currentUser;
        return user.updateProfile({
          displayName: username,
        });
      })
      .then(() => {
        const uniqueUserId = auth().currentUser?.uid;
        db.collection("users").doc(uniqueUserId).set({
          email: email,
          username: username,
          mindprogress: 0,
          bodyprogress: 0,
        });
      })
      .then(() => history.push("home"))
      .catch(error => {
        setError(error.message);
      });
  };

  return (
    <RegistrationWrapper>
      <ImageWrapper>
        <SignUpImage src={SignUpImg} alt=''></SignUpImage>
      </ImageWrapper>
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
            maxLength={11}
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
            type='password'
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
    </RegistrationWrapper>
  );
};

const SignUpSubmitBtn = styled(SubmitButton)`
  background-color: var(--boxing-orange);
  letter-spacing: 0.1em;
  @media (min-width: 634px) {
    margin-top: 30px;
    width: 40%;
    height: 50px;
  }
  @media (min-width: 1024px) {
    width: 30%;
  }
`;

export default Signup;
