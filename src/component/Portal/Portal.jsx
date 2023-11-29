import React from "react";

const Portal = ({ portal }) => {
  const { id, title, image } = portal;
  return (
    <div
      className="card card-compact shadow-xl -mt-24 w-full h-96 bg-center bg-auto flex justify-center items-center align-middle "
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
      }}
    >
      <div className="card-body w-full h-full bg-blue-500 bg-opacity-50 flex flex-col justify-center items-center hover:animate_animated hover:animate-bounce hover:animate_slower">
        <h2 className="card-title text-3xl text-orange-800  pb-8 font-semibold ">
          {title}
        </h2>

        <div className="card-actions flex justify-center items-center">
          <button className="btn btn-primary bg-green-500 hover:bg-blue-400 font-semibold text-white px-4 py-2 rounded-lg">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portal;
