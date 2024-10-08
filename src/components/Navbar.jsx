import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/shopping.jpg";
import { AuthContext } from "../providers/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut();
  };
  const navLinks = (
    <>
      <li>
        {" "}
        <NavLink to="/">Home</NavLink>{" "}
      </li>

      {/* <li> <NavLink to='addProduct'>Add Product</NavLink> </li> */}
      <li>
        {" "}
        <NavLink to="/allProduct">AllProduct</NavLink>{" "}
      </li>

      {user ? (
        <button
          onClick={handleLogOut}
          className="bg-gray-600 px-3 rounded-xl btn  text-white"
        >
          LogOut
        </button>
      ) : (
        <div className="flex">
          <li>
            {" "}
            <NavLink to="/signIn">
              {" "}
              <button className="">Login</button>{" "}
            </NavLink>{" "}
          </li>
          <li>
            {" "}
            <NavLink to="/register">
              {" "}
              <button className="">Register</button>{" "}
            </NavLink>{" "}
          </li>
        </div>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar text-white bg-orange-500">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img className="w-12 h-12 rounded-full" src={logo} alt="" />
            ShoppingBd{" "}
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ml-24">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {/* {
         user ?  <img title={user.displayName} className="rounded-xl w-[80px] ml-2" src={user?.photoURL} alt="" /> : ""
      } */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
