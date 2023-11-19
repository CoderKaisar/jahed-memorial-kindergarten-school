import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex justify-between items-center h-16 mx-auto">
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
        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-gray-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
