import React from "react";
import { useForm } from "react-hook-form";
// import {signup, rememberMe} from '../utils/user-management'

type Profile = {
  username: string;
  email: string;
  password: string;
};

// {errors.name && errors.name.type === "required" && (
//     <div className="error">You must enter your name</div>
//   )}
//   {errors.name && errors.name.type === "minLength" && (
//     <div className="error">Your name must be at least 2 characters</div>
//   )}

export const Signup = () => {
  const { register, handleSubmit, errors } = useForm<Profile>();
  const onSubmit = handleSubmit((data: Profile) => {
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
        <input ref={register({ required: true, min: 6 })} id='password' name='password' type='text' />
        {errors.password && "Enter your password"}
      </div>
      <div>
        <input type='checkbox' id='rememberMe' name='rememberMe' checked />
        <label htmlFor='rememberMe'>Remember me</label>
      </div>

      <button type='submit'>Signup</button>
    </form>
  );
};
