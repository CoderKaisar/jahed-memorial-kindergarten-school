import React from "react";
import Offer from "../Offer/Offer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Offers = () => {
  const offers = [
    {
      id: 1,
      title: "Sports Class",
      ptext:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, reiciendis labore perspiciatis cum ex",
      icon: "https://cdn-icons-png.flaticon.com/128/3311/3311579.png",
    },
    {
      id: 2,
      title: "Music Class",
      ptext:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, reiciendis labore perspiciatis cum ex",
      icon: "https://cdn-icons-png.flaticon.com/128/3083/3083417.png",
    },
    {
      id: 3,
      title: "Drawing Class",
      ptext:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, reiciendis labore perspiciatis cum ex",
      icon: "https://cdn-icons-png.flaticon.com/128/2970/2970188.png",
    },
    {
      id: 3,
      title: "Drawing Class",
      ptext:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, reiciendis labore perspiciatis cum ex",
      icon: "https://cdn-icons-png.flaticon.com/128/2970/2970188.png",
    },
    {
      id: 3,
      title: "Drawing Class",
      ptext:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, reiciendis labore perspiciatis cum ex",
      icon: "https://cdn-icons-png.flaticon.com/128/2970/2970188.png",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="w-full py-10">
      <div className="text-center">
        <h2 className="text-5xl font-bold mb-4">Our Offerings</h2>
        <p className="text-lg mb-16">
          Our multi-level kindergarten programs cater to the age group of 2-5
          years with a curriculum focussing children.
        </p>
      </div>
      <div className="w-5/6 mx-auto">
        <Slider {...settings}>
          {offers.map((offer) => (
            <Offer key={offer.id} offer={offer}></Offer>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Offers;
