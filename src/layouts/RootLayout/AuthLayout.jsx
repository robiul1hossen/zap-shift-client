import React from "react";
import { Link, Outlet } from "react-router";
import Logo from "../../components/Logo";
import authImage from "../../assets/authImage.png";

const AuthLayout = () => {
  return (
    <div className="bg-white">
      <Link to="/">
        <Logo />
      </Link>
      <div className="flex items-center justify-center">
        <div className="flex-1 ms-[100px]">
          <Outlet />
        </div>
        <div className="flex-1">
          <img src={authImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
