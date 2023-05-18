import React from "react";
import Banner from "../banner/Banner";
import Gallery from "../gallery/Gallery";
import Collection from "../collection/Collection";
import Newsletter from "../newsletter/Newsletter";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <Collection></Collection>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
