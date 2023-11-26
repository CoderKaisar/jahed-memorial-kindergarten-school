import React from "react";
import "./Offer.css";
const Offer = ({ offer }) => {
  const { title, ptext, icon } = offer;
  return (
    <div className="rounded-lg border-2 border-dashed border-gray-300 mr-6 flex flex-col p-4 w-72 h-82 justify-center items-center offerTab">
      <figure>
        <img
          src={icon}
          className="rounded-full w-24 border-2 border-sky-700 p-4"
          alt=""
        />
      </figure>
      <div>
        <h2 className="text-2xl font-bold uppercase py-2 text-center">
          {title}
        </h2>
        <p className="text-lg text-center">{ptext}</p>
        <div className="flex justify-center items-center bg-orange-500 text-white font-semibold text-xl mx-8 rounded-full py-2 my-6">
          <button className="btn btn-primary">Details</button>
        </div>
      </div>
    </div>
  );
};

export default Offer;
