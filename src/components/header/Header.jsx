import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'

export default function Header() {
  const [navbar, setNavbar] = useState(false);


  const handleToggleNavigation = () => {
    setNavbar(prevState => !prevState);
  }
  
  return (
    <header className="header__section">
      <button className="navigation__toggle" onClick={handleToggleNavigation}><span className={navbar ? "bar__active": "bar"}></span></button>
      <div className={navbar ? "navbar__background scale" : "navbar__background" }></div>
      {navbar && <Navbar />}
    </header>
  )
}
