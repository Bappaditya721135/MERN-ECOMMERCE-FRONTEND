import React, { useEffect, useState } from 'react'
import Navbar from "../Navbar/Navbar.jsx";
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncProductAction } from '../../../redux/product/productAction.js';
import { asyncLoadUser } from '../../../redux/authentication/LoadUserAction.js';

export default function Header() {
  const [navbar, setNavbar] = useState(false);
  const dispatch = useDispatch()


  const handleToggleNavigation = () => {
    setNavbar(prevState => !prevState);
  }

  useEffect(() => {
    // dispatch(asyncProductAction())
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
