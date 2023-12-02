import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <div
        className="radial-progress bg-primary text-primary-content border-4 border-primary"
        role="progressbar"
      >
        Loading
      </div>
    </div>
  );
};

export default Loading;
