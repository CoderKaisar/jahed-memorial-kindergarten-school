import React from "react";
import "./Session.css";

const Session = () => {
  return (
    <div
      className="h-full session flex justify-center items-center"
      style={{
        width: "100%",
        height: "500px",
        backgroundSize: "cover",
        backgroundImage: `url('https://plus.unsplash.com/premium_photo-1663088605247-90a9deebb5b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') `,
      }}
    >
      <div className="flex flex-col justify-center bg-slate-400 h-full bg-opacity-50 items-center gap-4 ">
        <h2 className="text-5xl text center font-semibold py-4">
          Join Our New Session
        </h2>
        <p className="text-lg mx-20 text-center py-4">
          Jehad Kinder Garten School believes that good questions drive good
          answers. Whether it's a query about the world around us or a
          challenge.
        </p>
        <button className="text-xl bg-orange-400 font-semibold mb-6 py-2 px-4 rounded-full">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default Session;
