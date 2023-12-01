import React from "react";
import "./style.scss";
import Banner from "./banner/Banner";
import Trending from "./trending/Trending";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";

const Home = () => {
  return (
    <div className="home-page">
      <Banner />
      <Trending />
      <Popular />
      <TopRated />
    </div>
  );
};

export default Home;
