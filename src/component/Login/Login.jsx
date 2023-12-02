import React, { useContext } from "react";
import login from "../../assets/images/misc/login.jpg";
import { CiFacebook, CiTwitter } from "react-icons/ci";
import { SlSocialLinkedin } from "react-icons/sl";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { PiGoogleLogo } from "react-icons/pi";

const Login = () => {
  const navigate = useNavigate();
  const { LoginUser, GoogleLogin } = useContext(AuthContext);
  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password, LoginUser);
    LoginUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate("/");
      })
      .catch((err) => {
        const errMsg = err.message;
        console.log(errMsg);
      });
  };

  const handleGoogleLogin = () => {
    GoogleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => {
        const errMsg = err.message;
        console.log(errMsg);
      });
  };
  return (
    <div className="border-2 border-gray-400 bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-rose-500 to-indigo-700 w-full h-screen flex flex-col justify-center items-center gap-4">
      <div className="w-80 my-2 rounded-xl bg-blue-400 p-2 flex flex-col justify-center items-center">
        <img
          src={login}
          className="w-24  h-24 my-6 rounded-full border-2 border-green-200 mr-4"
          alt=""
        />
        <h2 className="text-4xl font-bold text-center text-green-900">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-xl font-semibold ">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="Enter User Name or email"
                className="input input-lg w-full max-w-xs h-8 rounded-sm pl-2"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-xl font-semibold">
                  Password
                </span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                className="input input-bordered input-lg w-full max-w-xs h-8 rounded-sm pl-2"
              />
              <p className="text-xs font-semibold text-right pt-2">
                Forgot Password
              </p>
            </div>
            <button className="text-xl font-semibold text-center bg-gray-500 hover:bg-blue-500 px-6 rounded-md text-white">
              Login
            </button>
          </div>
        </form>
        <div className="flex flex-col gap-4">
          <p className="text-lg mt-2">Or login using</p>
          <div className="flex justify-around items-center">
            <CiFacebook className="hover:text-xl hover:text-blue-700" />
            <CiTwitter className="hover:text-xl hover:text-blue-700" />
            <SlSocialLinkedin className="hover:text-xl hover:text-blue-700" />
            <PiGoogleLogo
              onClick={handleGoogleLogin}
              className="hover:text-xl "
            />
          </div>
        </div>
        <p className="text-sm my-4">
          Don't have an account? Please{" "}
          <Link
            to="/register"
            className="font-bold text-white-400 text-underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
