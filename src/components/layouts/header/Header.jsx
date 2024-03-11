import React, { useEffect, useState } from 'react'
import Navbar from "../Navbar/Navbar.jsx";
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { asyncProductAction } from '../../../redux/product/productAction.js';
import { asyncLoadUser } from '../../../redux/authentication/LoadUserAction.js';
import { toggleNav } from '../../../redux/navbar/navbarAction.js';

export default function Header() {
  const navbar = useSelector(state => state.navbar);
  const dispatch = useDispatch()


  const handleToggleNavigation = () => {
    dispatch(toggleNav())

  }

  useEffect(() => {
    dispatch(asyncLoadUser())
  }, [])
  
  return (
    <>
      <header className="header__section">
        <button className="navigation__toggle" onClick={handleToggleNavigation}><span className={navbar ? "bar__active": "bar"}></span></button>
        <div className={navbar ? "navbar__background scale" : "navbar__background" }></div>
        {navbar && <Navbar />}
      </header>
      <Outlet />
    </>
  )
}
