import React from 'react'
// IMG 
import playstore from  "../../../assets/img/playstore.png";
import appstore from "../../../assets/img/Appstore.png";

export default function Footer() {
  return (
    <footer id="footer" className="footer">
        <div className="footer__left">
          <h4>DOWNLOAD OUT APP</h4>
          <p>Download App for Android and Ios mobile phones</p>
          <img src={playstore} alt="play store" />
          <img src={appstore} alt="app store" />
        </div>
        <div className="footer__mid">
          <h1>ECOMMERCE.</h1>
          <p>High Quality is our first priority</p>

          <p>Copyrights 2021 &copy; BappaditysSing</p>
        </div>
        <div className="footer__right">
          <h4>Follow Us</h4>
          <a href="http://instagram.com/">Instagram</a>
          <a href="http://youtube.com/">Youtube</a>
          <a href="http://facebook.com">Facebook</a>
        </div>
    </footer>
  )
}
