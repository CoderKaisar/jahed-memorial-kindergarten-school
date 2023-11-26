// eslint-disable-next-line no-unused-vars
import React from "react";

import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../assets/images/sliders/image1.jpg";
import image2 from "../../assets/images/sliders/image2.jpg";
import image3 from "../../assets/images/sliders/image3.jpg";
import image4 from "../../assets/images/sliders/image4.jpg";
import image5 from "../../assets/images/sliders/image5.jpg";
const Sliders = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const sliders = [
    {
      id: 1,
      title: "lorem ipsum lorem ipsum",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: image1,
    },
    {
      id: 2,
      title: "lorem ipsum lorem ipsum",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: image2,
    },
    {
      id: 3,
      title: "lorem ipsum lorem ipsum",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: image3,
    },
    {
      id: 4,
      title: "lorem ipsum lorem ipsum",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: image4,
    },
    {
      id: 5,
      title: "lorem ipsum lorem ipsum",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: image5,
    },
  ];

  return (
    <div>
      <Slider {...settings}>
        {sliders.map((slider) => (
          <div
            key={slider.id}
            className="flex flex-col justify-center items-center bg-gray-300 "
          >
            <div className="absolute text-center">
              <h2 className="text-4xl text-white font-bold uppercase">
                {slider.title}
              </h2>
              <p className="text-lg text-white mb-2">{slider.text}</p>
              <button className="bg-orange-300  rounded-lg text-white">
                Admission
              </button>
            </div>
            <div className="w-64">
              <img src={slider.image} alt="" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Sliders;
