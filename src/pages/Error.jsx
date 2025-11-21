import React from "react";
import errorImg from "../assets/error.png";
import { Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa";

const Error = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div>
        <img src={errorImg} alt="" />
        <div className="text-center flex gap-2 items-center justify-center">
          <FaArrowLeft className="mt-1 text-blue-600 underline" />
          <Link to="/" className="text-blue-600 underline ">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
