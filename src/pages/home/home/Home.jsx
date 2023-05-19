import React from "react";
import Banner from "../banner/Banner";
import Gallery from "../gallery/Gallery";
import Collection from "../collection/Collection";
import Newsletter from "../newsletter/Newsletter";
import ShopByCategory from "../shopByCategory/ShopByCategory";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <Collection></Collection>
      <ShopByCategory></ShopByCategory>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
