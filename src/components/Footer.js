import * as React from 'react'
import { Link } from 'gatsby'


import footerBackground from "../assets/imgs/footer_background.png"

import { MdLocationOn } from "react-icons/md"
import { MdEmail } from "react-icons/md"
import { MdPhone } from "react-icons/md"
import { FaFacebookF } from "react-icons/fa"
import { BsInstagram } from "react-icons/bs"
import { BsSnapchat } from "react-icons/bs"
import { BsTwitter } from "react-icons/bs"


export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='footer-info'>
          <ul>
            <li><MdLocationOn className='footer-icon'/> 1435 Flower Street<br /> Glendale, CA 91201</li>
            <li><MdEmail className='footer-icon'/> rochelle@rochelleruen.com</li>
            <li><MdPhone className='footer-icon'/> +1 208.255.8898</li>
          </ul>
          <div className="socials-container">
          <div className="social-icons">
            <a href="https://facebook.com">
              <div className='social-icon-container'>
                <FaFacebookF className="social" />
              </div>
            </a>
            <a href="https://instagram.com">
              <div className='social-icon-container'>
                <BsInstagram className="social" />
              </div>
            </a>
            {/* <a href="https://snapchat.com">
              <div className='social-icon-container'>
                <BsSnapchat className="social" />
              </div>
            </a>
            <a href="https://twitter.com">
              <div className='social-icon-container'>
                <BsTwitter className="social" />
              </div>
            </a> */}
          </div>    
        </div>
        </div>

        <hr/>

        <nav className='footer-nav'>
          <ul>
            <li>
              <Link to="/#about">Home</Link>
            </li>
            <li>
              <Link to="/#about">About You</Link>
            </li>
            <li>
              <Link to="/#order">My Story</Link>
            </li>
            <li>
              <Link to="/#reviews">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        
      </div>
      <div className='footer-copyright'>&copy; {new Date().getFullYear()} Rochelle Ruen</div>
      <img className='footer-background' src={footerBackground} alt='' />
    </footer>
  )
}