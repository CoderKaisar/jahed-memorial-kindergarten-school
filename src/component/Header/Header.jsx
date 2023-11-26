// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className=" dark:bg-gray-800 dark:text-gray-100 mx-10">
      <div className=" flex justify-between items-center h-16">
        <Link>
          <div className="flex justify-center items-center content-center text-2xl text-white font-bold bg-orange-900 rounded-md px-2 border-4 border-yellow-600">
            <p>
              J<span className="bg-blue-800 px-2 py-2 mx-2 rounded-lg">G</span>S
            </p>
          </div>
        </Link>
        <nav className="flex justify-center items-center gap-4">
          <Link>Home</Link>
          <Link>Result</Link>
          <Link>Session</Link>
          <Link>Admission</Link>
        </nav>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <button className="self-center px-8 py-3 rounded">Sign in</button>
          <button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
