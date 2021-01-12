import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { logIn } from "../utils/user-management";

type Profile = {
  email: string;
  password: string;
};

const Login = () => {
  const { handleSubmit, register, errors } = useForm<Profile>();
  const onSubmit = (data: Profile) => {
    console.log("data", data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
      <button type='submit'>Login</button>
    </form>
  );
};

export default Login;
