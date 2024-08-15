import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/shopping.jpg'
const Navbar = () => {
     const navLinks = <>
              <li> <NavLink to='/'>Home</NavLink> </li>
             
              <li> <NavLink to='addProduct'>Add Product</NavLink> </li>
              <li> <NavLink to='/allProduct'>AllProduct</NavLink> </li>
              <li> <NavLink to='shoppingBd'>About ShoppingDb</NavLink> </li>
       </>
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
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {navLinks}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">
      <img className='w-12 h-12 rounded-full' src={logo} alt="" />
     ShoppingBd </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 ml-24">
         {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;