import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo/navlogo.png";
import { useAuth } from "../../../hooks/hook";
import { Tooltip } from "react-tooltip";
import Button from "../../../components/Button";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = useAuth();

  // handle user log out
  const handleUserLogOut = () => {
    logOut()
      .then(() => {
        console.log("log out successful");
        toast.success("logout successful");
      })
      .catch((err) => console.log(err));
  };

  const navItems = (
    <>
      <li>
        <NavLink
          to={"/"}
          className="text-xl"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/al-toys"}
          className="text-xl"
        >
          All Toys
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/my-toys"}
          className="text-xl"
        >
          My Toys
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/add-a-toys"}
          className="text-xl"
        >
          Add A Toys
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/blog"}
          className="text-xl"
        >
          Blog
        </NavLink>
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
              className="h-6 w-6"
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
          className=" rounded-lg p-2 hover:dark:bg-gray-800"
        >
          <div className="flex items-center md:gap-4 gap-2">
            <img
              className="md:w-12 w-8 h-8 md:h-12 rounded-md"
              src={logo}
              alt="Toy Logo"
            />
            <span className="md:text-3xl text-2xl md:w-44 w-40 uppercase font-bold">
              Toy Car Zone
            </span>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 uppercase text-xl">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end">
      {user ? (
          <>
            {user?.displayName && (
              <Tooltip
                anchorSelect=".show-user-name"
                place="left"
              >
                {user?.displayName}
              </Tooltip>
            )}
            <label className="btn btn-ghost btn-circle avatar mr-2">
              <div className="w-10 rounded-full">
                <img
                  className="show-user-name hidden lg:block"
                  src={user?.photoURL}
                  place="left"
                />
              </div>
            </label>
            <Button handleClick={handleUserLogOut}>Logout</Button>
          </>
        ) : (
          <Link to="/login">
            <Button>Login</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
