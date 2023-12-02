// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  const { user, UserSignOut } = useContext(AuthContext);
  const handleSignOut = () => {
    UserSignOut()
      .then(() => {})
      .catch((err) => {
        const errMsg = err.message;
        console.log(errMsg);
      });
  };
  return (
    <header className=" dark:bg-gray-800 dark:text-gray-100 mx-10">
      <div className=" flex justify-between items-center h-16">
        <Link>
          <div className="flex justify-center items-center content-center text-2xl text-white font-bold bg-orange-900 rounded-md px-2 border-4 border-yellow-600">
            <p>
              J<span className="bg-blue-800 px-2 py-2 mx-2 rounded-lg">K</span>S
            </p>
          </div>
        </Link>
        <nav className="flex justify-center items-center gap-4">
          <Link>Home</Link>
          <Link to="/result">Result</Link>
          <Link>Session</Link>
          <Link>Admission</Link>
        </nav>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          {user?.uid ? (
            <>
              {user?.displayName ? (
                <>
                  <p className="pr-8 ">{user.displayName}</p>
                </>
              ) : (
                <>
                  <div className="bg-yellow-400 px-2 py-2 rounded-lg  mr-6">
                    <CgProfile className=" font-bold text-2xl" />
                  </div>
                </>
              )}

              <button
                className="bg-gray-400 px-4 py-2 rounded-md font-semibold text-white hover:bg-orange-600 "
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="self-center px-8 py-3 rounded">
                Login
              </Link>
              <Link to="/register" className="self-center px-8 py-3 rounded">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
