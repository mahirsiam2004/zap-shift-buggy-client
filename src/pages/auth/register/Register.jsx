import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

import SocialLogin from "../social_login/SocialLogin";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router";

const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { registerUser, updateUserProfile } = useAuth();

  const handleRegistration = (data) => {
    console.log(data);
    const profileImg = data.photo[0];

    registerUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);

        const formData = new FormData();
        formData.append("image", profileImg);

        const imageApiUrl = `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_image_host
        }`;

        axios
          .post(imageApiUrl, formData) 
          .then((res) => {
            console.log("after image upload", res.data);

            const userProfile = {
              displayName: data.name,
              photoURL: res.data.data.url,
            };

            updateUserProfile(userProfile)
              .then(() => {
                console.log("user profile updated done");
                navigate(location.state || '/');
              })
              .catch((err) => console.log(err));
          });
      })
      .catch((err) => {
        console.log(err);
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
          <label className="label">Photo</label> {/* FIXED label */}
          <input
            type="file"
            {...register("photo", { required: true })}
            className="file-input"
            placeholder="Your image"
          />
          {errors.photo?.type === "required" && ( // FIXED error check
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
          {errors.password?.type === "minLength" && (
            <p className="text-red-500">
              password must be at least 6 characters
            </p>
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
