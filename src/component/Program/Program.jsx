import React from "react";
import "./Program.css";
const Program = ({ program }) => {
  const { title, image, para, age, weakly, period } = program;
  return (
    <div className="w-80 h-3/6  rounded-xl  shadow-blue-400 shadow-sm mx-auto my-6 programS">
      <figure className="px-4 pt-6">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center px-8 py-4">
        <h2 className="card-title text-2xl font-bold text-left">{title}</h2>
        <p className="text-md text-justify">{para}</p>
        <div className="card-actions flex justify-center items-center gap-4 bg-fuchsia-300  my-4 rounded-xl ">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-lg font-semibold">{age}</h2>
            <p>age</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-lg font-semibold">{weakly}</h2>
            <p>weakly</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-lg font-semibold">{period}</h2>
            <p>period</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;
