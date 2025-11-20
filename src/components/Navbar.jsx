import React, { use } from "react";
import { Link, NavLink } from "react-router";
import Logo from "./Logo";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logoutUser } = use(AuthContext);
  const handleLogout = () => {
    logoutUser()
      .then(() => console.log("logout successful"))
      .catch((error) => console.log(error));
  };

  const links = (
    <>
      <NavLink to="/">
        <li>Home</li>
      </NavLink>
      <NavLink to="/">
        <li>Services</li>
      </NavLink>
      <NavLink to="/">
        <li>Coverage</li>
      </NavLink>
      <NavLink to="/about">
        <li>About Us</li>
      </NavLink>
      <NavLink to="/">
        <li>Pricing</li>
      </NavLink>
      <NavLink to="/">
        <li>Blog</li>
      </NavLink>
      <NavLink to="/">
        <li>Contact</li>
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm mb-9">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="font-medium menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <a className=" text-xl">{<Logo />}</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="font-medium menu menu-horizontal px-1 flex gap-6">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <img
              referrerPolicy="no-referrer"
              className="w-10 h-10 rounded-full border me-3 cursor-pointer"
              src={user?.photoURL}
              alt={user?.displayName}
            />
            <Link to="/">
              <div
                onClick={handleLogout}
                className="btn btn-primary text-[#1F1F1F]">
                Logout
              </div>
            </Link>
          </>
        ) : (
          <>
            {" "}
            <Link to="/login" className="btn  text-[#1F1F1F] mr-2">
              Sing In
            </Link>
            <Link to="/register" className="btn btn-primary text-[#1F1F1F]">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
