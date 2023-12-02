import React, { useContext, useState } from "react";
import register from "../../assets/images/misc/register.jpg";
import { CiFacebook, CiTwitter } from "react-icons/ci";
import { SlSocialLinkedin } from "react-icons/sl";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  const { registerUser, loading, setLoading, user } = useContext(AuthContext);
  const [regUser, setRegUser] = useState([]);
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const userName = form.userName.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(userName, email, password);
    registerUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        setRegUser(loggedUser);
        console.log(loggedUser);
        setLoading(false);
        form.reset();
      })
      .catch((err) => {
        const msg = err.message;
        console.log(msg);
      });
  };

  return (
    <div
      className="border-2 border-gray-400 bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-rose-500 to-indigo-700 w-full h-screen flex flex-col justify-center items-center gap-4
    
    
    my-auto mt-5  align-middle "
    >
      <div className="w-80 my-2 border-r-2 border-amber-400 grid grid-cols-1 justify-items-center justify-self-center p-4 m-8 bg-blue-400 rounded-md shadow-inner shadow-gray-200">
        <img
          src={register}
          className="w-24 h-24  rounded-full border-r-blue-300 border-2 "
          alt=""
        />
        <h2 className="text-3xl font-semibold text-center  text-gray-400">
          Register
        </h2>
        <form onSubmit={handleRegister}>
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-xl font-semibold ">
                  User Name
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter User Name"
                name="userName"
                className="input input-bordered input-lg w-full max-w-xs h-8 rounded-sm pl-2"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-xl font-semibold ">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="Enter Your Email"
                className="input input-bordered input-lg w-full max-w-xs h-8 rounded-sm pl-2"
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
            </div>
            <button className="text-xl font-semibold text-center bg-gray-500 hover:bg-blue-500 px-6 rounded-md text-white">
              Register
            </button>
          </div>
        </form>
        <div className="flex flex-col gap-4">
          <p className="text-lg mt-2">Or Register using</p>
          <div className="flex justify-around items-center">
            <CiFacebook className="hover:text-xl hover:text-blue-700" />
            <CiTwitter className="hover:text-xl hover:text-blue-700" />
            <SlSocialLinkedin className="hover:text-xl hover:text-blue-700" />
          </div>
        </div>
        <p className="text-sm my-4">
          Already have an account? Please{" "}
          <Link to="/login" className="font-bold text-white-400 text-underline">
            Login
          </Link>
        </p>
      </div>
      {/* <div className="grid grid-cols-1 justify-center justify-items-center justify-self-center "></div> */}
    </div>
  );
};

export default Register;
