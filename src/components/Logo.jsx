import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router";

const Logo = () => {
  return (
    <div className="flex items-end">
      <img src={logo} alt="" />
      <p className="font-extrabold text-3xl -ms-3">ZapShift</p>
    </div>
  );
};

export default Logo;
