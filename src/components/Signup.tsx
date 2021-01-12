import React from "react";
import { useForm } from "react-hook-form";
// import {signup} from '../utils/user-management'

type Profile = {
  username: string;
  email: string;
  password: string;
};

export const Signup = () => {
  const { register, handleSubmit, errors } = useForm<Profile>();
  const onSubmit = handleSubmit(data => {
    alert(JSON.stringify(data));
  });
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor='username'>Username</label>
        <input ref={register({ required: true })} id='username' name='username' type='text' />
        {errors.username && "Username is required"}
      </div>
      <div>
        <label htmlFor='email'>Email</label>
        <input ref={register({ required: true })} id='email' name='email' type='text' />
        {errors.email && "Enter your email"}
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input ref={register({ required: true })} id='password' name='password' type='text' />
        {errors.password && "Enter your password"}
      </div>
      <button type='submit'>Signup</button>
    </form>
  );
};
