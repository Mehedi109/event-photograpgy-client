import React from "react";
import Navigation from "../Shared/Navigation/Navigation";
import Banner from "./Banner/Banner";
import Categories from "./Categories/Categories";
import SpecialPhotographers from "./SpecialPhotographers/SpecialPhotographers";
import Review from "./Review/Review";
import Footer from "../Shared/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <Categories></Categories>
      <SpecialPhotographers></SpecialPhotographers>
      <Review></Review>
      <Footer></Footer>
    </div>
  );
};

export default Home;
