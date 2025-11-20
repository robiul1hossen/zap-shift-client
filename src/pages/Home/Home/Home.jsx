import React, { Suspense } from "react";
import Banner from "../Banner";
import HowItWorks from "../HowItWorks";
import OurServices from "../OurServices";
import Brands from "../Brands";
import Features from "../Features";
import CustomerReviews from "../CustomerReviews";
import Faq from "../Faq";

const reviewsPromise = fetch("./reviews.json").then((res) => res.json());
const Home = () => {
  return (
    <div>
      <Banner />
      <HowItWorks />
      <OurServices />
      <Brands />
      <Features />
      <Suspense fallback={<p>Loading...</p>}>
        <CustomerReviews reviewsPromise={reviewsPromise} />
      </Suspense>
      <Faq />
    </div>
  );
};

export default Home;
