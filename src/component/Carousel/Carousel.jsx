import React from "react";
import "../Carousel/Carousel.css";

const Carousel = () => {
  return (
    <div className="carousel w-full h-screen bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800 flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-4 ">
        <img
          src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-52  h-52 rounded-full"
          alt=""
        />
        <h2 className="text-white text-center text-6xl font-bold">
          Jehad Kinder Garten School
        </h2>
        <p className="text-white text-xl">
          A new digital online based platform to build your child for future
        </p>
      </div>
      <div className="flex justify-center items-center gap-4 mt-6 pb-10">
        <button className="bg-gray-400 hover:bg-orange-800 py-2 px-6 rounded-md text-gray-800 font-semibold">
          Register
        </button>
        <button className="bg-gray-400 hover:bg-orange-800 py-2 px-6 rounded-md text-gray-800 font-semibold">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Carousel;
