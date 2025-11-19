import React from "react";
import Marquee from "react-fast-marquee";
import casio from "../../assets/brands/casio.png";
import amazon from "../../assets/brands/amazon.png";
import moonstar from "../../assets/brands/moonstar.png";
import star from "../../assets/brands/star.png";
import starPeople from "../../assets/brands/start_people.png";
import randstad from "../../assets/brands/randstad.png";

const Brands = () => {
  return (
    <div className="my-[100px]">
      <h2 className="text-xl font-bold text-center mb-10 ">
        We've helped thousands of sales teams
      </h2>
      <Marquee>
        <img className="mr-12" src={casio} alt="" />
        <img className="mr-12" src={amazon} alt="" />
        <img className="mr-12" src={moonstar} alt="" />
        <img className="mr-12" src={star} alt="" />
        <img className="mr-12" src={starPeople} alt="" />
        <img className="mr-12" src={randstad} alt="" />
      </Marquee>
    </div>
  );
};

export default Brands;
