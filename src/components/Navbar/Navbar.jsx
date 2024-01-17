import React, { useState } from 'react'
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
        <li>Home</li>
        <li>Product</li>
        <li>Contact us</li>
        <li>about</li>
      </ul>
      <ul className="nav__links--icons">
          <MdOutlineSearch />
          <FaCartShopping />
          <IoIosContact />
      </ul>
    </nav>
  )
}
