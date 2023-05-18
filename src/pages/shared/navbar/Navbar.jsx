import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo/navlogo.png";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/"}>All Toys</Link>
      </li>
      <li>
        <Link to={"/"}>My Toys</Link>
      </li>
      <li>
        <Link to={"/"}>Add A Toys</Link>
      </li>
      <li>
        <Link to={"/blog"}>Blog</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 h-28 mb-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link
          to={"/"}
          className=" rounded-lg p-2 hover:dark:bg-gray-900 "
        >
          <div className="flex items-center md:gap-4 gap-2">
            <img
              className="md:w-12 w-8 h-8 md:h-12 rounded-md"
              src={logo}
              alt="Toy Logo"
            />
            <span className="md:text-2xl text-xl md:w-44 w-36 uppercase font-bold ">
              Toy Car Zone
            </span>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 uppercase text-xl">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-outline btn-secondary btn-sm md:btn-md">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
