import React, { useState } from "react";
import { signUp } from "../utils/user-management";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      // await signUpDB(auth().currentUser.email);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={event => handleSubmit(event)}>
      <div>
        <label htmlFor='username'>Username</label>
        <input
          required
          id='username'
          name='username'
          type='text'
          onChange={e => {
            setUsername(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor='email'>Email</label>
        <input
          required
          id='email'
          name='email'
          type='text'
          onChange={event => {
            setEmail(event.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input
          required
          id='password'
          name='password'
          type='text'
          onChange={e => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <div>
        <input type='checkbox' id='rememberMe' name='rememberMe' checked />
        <label htmlFor='rememberMe'>Remember me</label>
      </div>
      <button type='submit'>Signup</button>
    </form>
  );
};

export default Signup;
