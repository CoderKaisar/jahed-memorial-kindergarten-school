import React from "react";
import "./Promotional.css";

const Promotional = () => {
  return (
    <div className="promotional bg-blue-400 flex gap-10 justify-between py-10">
      <div className="w-96">
        <img
          src="https://media.istockphoto.com/id/996990848/photo/students-creating-programs-while-using-laptop.webp?b=1&s=170667a&w=0&k=20&c=TiPjASSsXv82XrRK89JdpAyrXbiqYCLKON8Odyh2uvI="
          alt=""
          className="w-full"
        />
      </div>
      <div className="flex flex-col justify-start items-left w-1/2 ">
        <h2 className="text-4xl font-bold text-left text-sunset-500">
          Best for Your Kids
        </h2>
        <p>
          Being brave isn’t always a grand gesture sometimes it just means
          having a go attempting that difficult question, offering an answer in
          a lesson when you’re simply really trying new.
        </p>
        <div className="flex justify-start items-center">
          <div className="flex flex-col justify-center items-center">
            <p>14+</p>
            <span>Years of Experience</span>
          </div>
          <div className="flex flex-col justify-start items-center gap-4">
            <p>7K+</p>
            <span>Students of each year</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p>15+</p>
            <span>Award Wining</span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div>
            <span>We believe every child is intelligent so we care.</span>
          </div>
          <div>
            <span>We believe every child is intelligent so we care.</span>
          </div>
        </div>
        <div>
          <button>Apply Now</button>
          <button>Visit</button>
        </div>
      </div>
    </div>
  );
};

export default Promotional;
