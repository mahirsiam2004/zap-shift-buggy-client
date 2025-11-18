import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../social_login/SocialLogin";

const Login = () => {
  const location=useLocation();
  const {signInUser}=useAuth();
  const navigate=useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLogin = (data) => {
    console.log(data);
    signInUser(data.email,data.password)
    .then(result=>{
      console.log(result.user)
      navigate(location?.state || '/')
    })
    .catch(error=>{
      console.log(error);
    })
  };
  return (
    <div className="card bg-base-100 w-full max-w-sm shadow-2xl ">
      <h2 className=" text-3xl font-semibold my-2 text-center ">Welcome back</h2>
      <p className="font-semibold">Please Login</p>
      <form className="card-body" onSubmit={handleSubmit(handleLogin)}>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input"
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500">please enter your email</p>
          )}

          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", { required: true })}
            className="input"
            placeholder="Password"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>

          {errors.password?.type === "required" && (
            <p className="text-red-500">please enter your password</p>
          )}

          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        <p>New to zap Shift <Link state={location.state} to={'/register'} className="text-blue-500 font-semibold">Register</Link></p>
      </form>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
