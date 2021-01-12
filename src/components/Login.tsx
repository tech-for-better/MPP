import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logIn } from "../utils/user-management";

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
    <>
      <form onSubmit={event => handleSubmit(event)}>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            name='email'
            type='text'
            required
            onChange={e => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            name='password'
            type='text'
            required
            onChange={event => {
              setPassword(event.target.value);
            }}
          />
        </div>
        {error ? <p>{error}</p> : null}
        <button type='submit'>Login</button>
      </form>
      <Link to='/signup'>Don’t have an account? Sign Up</Link>
    </>
  );
};

export default Login;
