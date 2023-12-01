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
      })
      .catch((err) => {
        const msg = err.message;
        console.log(msg);
      });
  };

  return (
    <div className="border-2 border-gray-400 bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-rose-500 to-indigo-700 w-full h-screen flex flex-col justify-center items-center gap-4">
      <div className="w-2/5 h-3/4 bg-blue-300 rounded-md p-4 shadow-inner shadow-gray-200 flex justify-between items-center">
        <div className="mr-4">
          <h2 className="text-4xl font-bold text-center  text-pink-400">
            Register
          </h2>
          <img
            src={register}
            className="w-40  h-40 mt-6 rounded-full border-2 border-green-200 mr-4"
            alt=""
          />
        </div>
        <div className="w-80 my-2 border-l-2 border-yellow-300 p-2 flex flex-col justify-center items-center">
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
                  <span className="label-text text-xl font-semibold ">
                    Email
                  </span>
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
            <Link
              to="/login"
              className="font-bold text-white-400 text-underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
