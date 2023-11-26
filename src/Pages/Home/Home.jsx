// eslint-disable-next-line no-unused-vars
import React from "react";
// import Sliders from "../../component/Sliders/Sliders";
import Carousel from "../../component/Carousel/Carousel";
import Portals from "../../component/Portals/Portals";
import Offers from "../../component/Offers/Offers";
import Promotional from "../../component/Promotional/Promotional";

const Home = () => {
  return (
    <div>
      <Carousel></Carousel>
      <Portals></Portals>
      <Offers></Offers>
      <Promotional></Promotional>
    </div>
  );
};

export default Home;
