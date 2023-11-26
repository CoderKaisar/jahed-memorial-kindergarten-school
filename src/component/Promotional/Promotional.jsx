import React from "react";
import "./Promotional.css";
import { FaArrowRightFromBracket } from "react-icons/fa6";

const Promotional = () => {
  return (
    <div className="promotional bg-blue-400 flex gap-10 justify-between py-10">
      <div className="flex justify-start items-center">
        <img
          src="https://media.istockphoto.com/id/996990848/photo/students-creating-programs-while-using-laptop.webp?b=1&s=170667a&w=0&k=20&c=TiPjASSsXv82XrRK89JdpAyrXbiqYCLKON8Odyh2uvI="
          alt=""
          className="w-full h-96"
        />
      </div>
      <div className="flex flex-col justify-start items-left w-1/2 ">
        <h2 className="text-4xl font-bold text-left text-sunset-500 py-4">
          Best for Your Kids
        </h2>
        <p className="text-lg pr-4 py-4 ">
          Being brave isn’t always a grand gesture sometimes it just means
          having a go attempting that difficult question, offering an answer in
          a lesson when you’re simply really trying new.
        </p>
        <div className="flex justify-start items-center bg-red-400 mr-20 rounded-xl my-2">
          <div className="flex flex-col justify-center items-center px-6 py-4 text-white">
            <p className="text-4xl font-bold">7+</p>
            <span className="text-xl px-6">Years of Experience</span>
          </div>

          <div className="flex flex-col justify-center items-center px-6 py-4 text-white">
            <p className="text-4xl font-bold">320+</p>
            <span className="text-xl px-6">Students</span>
          </div>
          <div className="flex flex-col justify-center items-center px-6 py-4 text-white">
            <p className="text-4xl font-bold">18+</p>
            <span className="text-xl px-6">National Award</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 py-4">
          <div className="flex justify-start items-center gap-4 text-xl">
            <p>
              <FaArrowRightFromBracket />
            </p>
            <span>We believe every child is intelligent so we care.</span>
          </div>
          <div className="flex justify-start items-center gap-4 text-xl">
            <p>
              <FaArrowRightFromBracket />
            </p>
            <span>We believe every child is intelligent so we care.</span>
          </div>
        </div>
        <div className="flex gap-6 py-4">
          <button className="bg-pink-400 py-2 px-4 rounded-lg text-md font-semibold">
            Register
          </button>
          <button className="bg-pink-400 py-2 px-4 rounded-lg text-md font-semibold">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Promotional;
