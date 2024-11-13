import React from "react";
import { Link } from "gatsby";

import { FaFacebookF } from "react-icons/fa"
import { BsInstagram } from "react-icons/bs"
import { BsSnapchat } from "react-icons/bs"
import { BsTwitter } from "react-icons/bs"

export default function MobileNav(props) {

  React.useEffect(() => {
    if(props.mobileNavState) {
      document.body.classList.add('fixed-position')
    } else {
      document.body.classList.remove('fixed-position')
    }
  }, [props.mobileNavState])
 
 
  return (
    <div className="mobile-nav">
      <div className="hamburger" onClick={props.handleToggle} >
        <div className={`burger-lines ${props.mobileNavState? "animate-burger" : "burger-box-shadow"}`}></div>
        <div className={`burger-lines ${props.mobileNavState? "animate-burger" : ""}`}></div>
        <div className={`burger-lines ${props.mobileNavState? "animate-burger" : ""}`}></div>
      </div>
      

      <div className={`mobile-nav-container ${props.mobileNavState ? "show-mobile-nav" : ""}`} onClick={props.handleToggle}>
      <ul>
        <li>
            <Link to="/#greetings" activeClassName='active-a'>Greetings</Link>
          </li>
          <li>
            <Link to="/#services" activeClassName='active-a'>Services</Link>
          </li>
          <li>
            <Link to="/aboutyou" activeClassName='active-a'>About You</Link>
          </li>
          <li>
            <Link to="/mystory" activeClassName='active-a'>My Story</Link>
          </li>
          <li>
            <Link to="/#contact" activeClassName='active-a'>Contact</Link>
          </li>
        </ul>
        <div className="socials-container">
          <div className="social-icons">
            <a href="https://facebook.com" target='_blank' rel="noreferrer">
              <div className='social-icon-container'>
                <FaFacebookF className="social" />
              </div>
            </a>
            <a href="https://instagram.com" target='_blank' rel="noreferrer">
              <div className='social-icon-container'>
                <BsInstagram className="social" />
              </div>
            </a>
            {/* <a href="https://snapchat.com" target='_blank' rel="noreferrer">
              <div className='social-icon-container'>
                <BsSnapchat className="social" />
              </div>
            </a>
            <a href="https://twitter.com" target='_blank' rel="noreferrer">
              <div className='social-icon-container'>
                <BsTwitter className="social" />
              </div>
            </a> */}
          </div>    
        </div>
      </div>
    </div>
  )
}


