import React from "react";
import Banner from "../Banner";
import HowItWorks from "../HowItWorks";
import OurServices from "../OurServices";
import Brands from "../Brands";
import Features from "../Features";
import CustomerReviews from "../CustomerReviews";
import Footer from "../../../components/Footer";
import Faq from "../Faq";

const Home = () => {
  return (
    <div>
      <Banner />
      <HowItWorks />
      <OurServices />
      <Brands />
      <Features />
      <CustomerReviews />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
