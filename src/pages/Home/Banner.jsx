import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import banner1 from "../../assets/banner/banner1.png";
import banner2 from "../../assets/banner/banner2.png";
import banner3 from "../../assets/banner/banner3.png";
import { FaArrowUp } from "react-icons/fa";

const Banner = () => {
  return (
    <div>
      <Carousel interval={3000} autoPlay={true} infiniteLoop={true}>
        <div className="relative">
          <img src={banner1} alt="" />

          <div className=" flex items-center gap-4">
            <button className="bg-white text-secondary px-6 py-3 rounded-2xl text-xl font-bold absolute top-[410px] left-[330px] z-50 cursor-pointer">
              Be a Rider
            </button>
            <button className="flex items-center gap-1 bg-primary text-secondary px-6 py-3 rounded-2xl text-xl font-bold absolute top-[410px] left-[70px] z-50 cursor-pointer">
              Track Your Parcel
              <FaArrowUp className="rotate-45" />
            </button>
          </div>
        </div>
        <div className="relative">
          <img src={banner2} alt="" />

          <div className=" flex items-center gap-4">
            <button className="bg-white text-secondary px-6 py-3 rounded-2xl text-xl font-bold absolute top-[410px] left-[330px] z-50 cursor-pointer">
              Be a Rider
            </button>
            <button className="flex items-center gap-1 bg-primary text-secondary px-6 py-3 rounded-2xl text-xl font-bold absolute top-[410px] left-[70px] z-50 cursor-pointer">
              Track Your Parcel
              <FaArrowUp className="rotate-45" />
            </button>
          </div>
        </div>
        <div className="relative">
          <img src={banner3} alt="" />

          <div className=" flex items-center gap-4">
            <button className="bg-white text-secondary px-6 py-3 rounded-2xl text-xl font-bold absolute top-[410px] left-[330px] z-50 cursor-pointer">
              Be a Rider
            </button>
            <button className="flex items-center gap-1 bg-primary text-secondary px-6 py-3 rounded-2xl text-xl font-bold absolute top-[410px] left-[70px] z-50 cursor-pointer">
              Track Your Parcel
              <FaArrowUp className="rotate-45" />
            </button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
