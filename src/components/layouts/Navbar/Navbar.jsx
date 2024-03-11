import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// REACT ICONS  
import { MdOutlineSearch } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosContact } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { toggleNav } from '../../../redux/navbar/navbarAction';


export default function Navbar() {
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(toggleNav())
  }
  return (
    <nav className="navbar">
      <h3 className="nav__heading">Ecommerce</h3>
      <ul className="nav__links">
        <li>
          <Link to="/" onClick={toggle}>Home</Link>
        </li>
        <li>
          <Link to="/products" onClick={toggle}>Products</Link>
        </li>
        <li>
          <Link to="/contact-us" onClick={toggle}>Contact Us</Link>
        </li>
        <li>
          <Link to="/about" onClick={toggle}>About Us</Link>
        </li>
      </ul>
      <ul className="nav__links--icons">
          <Link to="/search" onClick={toggle}><MdOutlineSearch /></Link>
          <Link to="/my-cart" onClick={toggle}><FaCartShopping /></Link>
          <Link to="/profile" onClick={toggle}><IoIosContact /></Link>
      </ul>
    </nav>
  )
}
