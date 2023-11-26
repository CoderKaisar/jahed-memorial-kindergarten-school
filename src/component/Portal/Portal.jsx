import React from "react";

const Portal = ({ portal }) => {
  const { id, title, image } = portal;
  return (
    <div
      className="card card-compact bg-base-100 shadow-xl -mt-24 h-96 bg-cover flex justify-center items-center align-middle "
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="card-body py-14 bg-blue-500 bg-opacity-50 p-6 rounded-lg border-r-2 border-b-4 border-yellow-600 ">
        <h2 className="card-title text-2xl pb-8 font-bold">{title}</h2>

        <div className="card-actions flex justify-center items-center">
          <button className="btn btn-primary bg-gray-500 text-white px-4 py-2 rounded-lg">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portal;
