import React from "react";
import customer_top from "../../assets/customer-top.png";

const CustomerReviews = () => {
  return (
    <div className="mt-[100px]">
      <img className="mx-auto" src={customer_top} alt="" />
      <div className="text-center ">
        <h2 className="text-4xl font-extrabold mb-4 text-secondary">
          What our customers are sayings
        </h2>
        <p className="font-medium w-3/4 mx-auto text-[#606060]">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>
    </div>
  );
};

export default CustomerReviews;
