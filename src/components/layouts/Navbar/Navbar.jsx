import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// REACT ICONS  
import { MdOutlineSearch } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosContact } from "react-icons/io";


export default function Navbar() {
  // const [navbar, setNavbar] = useState(false);
  return (
    <nav className="navbar">
      <h3 className="nav__heading">Ecommerce</h3>
      <ul className="nav__links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
      </ul>
      <ul className="nav__links--icons">
          <Link to="/search"><MdOutlineSearch /></Link>
          <Link to="/cart"><FaCartShopping /></Link>
          <Link to="/login"><IoIosContact /></Link>
      </ul>
    </nav>
  )
}
