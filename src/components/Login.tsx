import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logIn } from "../utils/user-management";
import { Input, SubmitButton, FormWrapper,  Form, LinkWrapper, Label} from "./Registration.styles";
import styled from "styled-components"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await logIn(email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <FormWrapper>
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
        <Label htmlFor='rememberMe'>
        <Checkbox 
          type='checkbox' 
          id='rememberMe' 
          name='rememberMe' 
        />
        Remember me
        </Label>
        {error ? <p>{error}</p> : null}
        <LoginSubmitButton type='submit'>LOGIN</LoginSubmitButton>
        <LinkWrapper>
        Don’t have an account? <Link to='/signup' style={{ textDecoration: 'none', fontWeight: "bold", color: "#3F4553" }} >Sign Up</Link>
      </LinkWrapper>
      </Form>

    </FormWrapper>
  );
};


const Checkbox = styled.input`
  margin-right: 0.6rem;
  color: rgb(117, 111, 134);
  border: 2px solid red;
`

const LoginSubmitButton = styled(SubmitButton)`
  background-color:  #74C7E5;
`
export default Login;
