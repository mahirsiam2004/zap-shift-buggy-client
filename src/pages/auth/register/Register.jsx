import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router";
import SocialLogin from "../social_login/SocialLogin";

const Register = () => {
  const { register, handleSubmit,formState:{errors} } = useForm();

const {registerUser}=useAuth()

  const handleRegistration = (data) => {
    console.log(data);
    registerUser(data.email,data.password)
    .then(result=>{
      console.log(result.user);
    })
      
    .catch(err=>{
      console.log(error);
    });
    
   
    
  };
  return (
    <div className="card bg-base-100 w-full max-w-sm shadow-2xl ">
      <h2 className=" text-3xl font-semibold my-2 text-center ">
        Create Your Account
      </h2>
      <p className="font-semibold">fill the form</p>
      <form className="card-body" onSubmit={handleSubmit(handleRegistration)}>
        <fieldset className="fieldset">
          {/* for name  */}

          <label className="label">Name</label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="input"
            placeholder="Your Name"
          />

          {errors.name?.type === "required" && (
            <p className="text-red-500">name not found</p>
          )}

          {/* for photo */}
          <label className="label">Name</label>

          <input
            type="file"
            {...register("photo", { required: true })}
            className="file-input"
            placeholder="Your image "
          />

          {errors.name?.type === "required" && (
            <p className="text-red-500">image not found</p>
          )}

          {/* for email */}
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input"
            placeholder="Email"
          />

          {errors.email?.type === "required" && (
            <p className="text-red-500">email not found</p>
          )}

          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", {
              required: true,
              minLength: 6,
            })}
            className="input"
            placeholder="Password"
          />

          {errors.password?.type === "required" && (
            <p className="text-red-500">password not found</p>
          )}

          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
        <p>
          Already have an account{" "}
          <Link to={"/login"} className="text-blue-500 font-semibold">
            Login
          </Link>
        </p>
      </form>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
