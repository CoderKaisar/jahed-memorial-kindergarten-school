import React from "react";

import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Sliders = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <h2>This is header 1</h2>
        </div>
        <div>
          <h2>This is header 1</h2>
        </div>
        <div>
          <h2>This is header 1</h2>
        </div>
        <div>
          <h2>This is header 1</h2>
        </div>
        <div className="flex justify-center items-center gap-4 w-full">
          <h2 className="text-6xl">This is header with image</h2>
          <img
            src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGtpbmRlcmdhcnRlbiUyMHNjaG9vbCUyMGxvZ298ZW58MHx8MHx8fDA%3D"
            alt=""
            className="w-52"
          />
        </div>
        <div>
          <h2>This is header 1</h2>
        </div>
      </Slider>
    </div>
  );
};

export default Sliders;
