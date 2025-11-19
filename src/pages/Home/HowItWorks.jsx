import React from "react";
import bookingLogo from "../../assets/bookingIcon.png";
const HowItWorks = () => {
  return (
    <div>
      <h2 className="font-bold text-2xl mb-8 mt-[100px]">How It Works</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <div className="">
          <div className="bg-white p-8 rounded-3xl">
            <img src={bookingLogo} className="mb-6" alt="" />
            <h2 className="text-secondary font-bold mb-4 text-lg">
              Booking Pick & Drop
            </h2>
            <p className="text-[#606060]">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
        </div>
        <div className="">
          <div className="bg-white p-8 rounded-3xl">
            <img src={bookingLogo} className="mb-6" alt="" />
            <h2 className="text-secondary font-bold mb-4 text-lg">
              Cash On Delivery
            </h2>
            <p className="text-[#606060]">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
        </div>
        <div className="">
          <div className="bg-white p-8 rounded-3xl">
            <img src={bookingLogo} className="mb-6" alt="" />
            <h2 className="text-secondary font-bold mb-4 text-lg">
              Delivery Hub
            </h2>
            <p className="text-[#606060]">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
        </div>
        <div className="">
          <div className="bg-white p-8 rounded-3xl">
            <img src={bookingLogo} className="mb-6" alt="" />
            <h2 className="text-secondary font-bold mb-4 ">
              Booking SME & Corporate
            </h2>
            <p className="text-[#606060]">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
