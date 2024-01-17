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
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Product</a>
        </li>
        <li>
          <a href="#">Contact us</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
      <ul className="nav__links--icons">
          <a href="#"><MdOutlineSearch /></a>
          <a href="#"><FaCartShopping /></a>
          <a href="#"><IoIosContact /></a>
      </ul>
    </nav>
  )
}
