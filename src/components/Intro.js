import React from 'react'
import mainBackground from "../assets/imgs/main_background.png"
import introHero from "../assets/imgs/intro_hero.jpg"

import { FaFacebookF } from "react-icons/fa"
import { BsInstagram } from "react-icons/bs"
import { BsSnapchat } from "react-icons/bs"
import { BsTwitter } from "react-icons/bs"

export default function Intro() {
  return (
    <section id="home" className='intro-section'>
      <img className='intro-background' src={mainBackground} alt='' />
      <div className='intro-content'>
        <h1 className='section-header intro-header'>Discover Yourself,<br/><span>Redefine Your Future</span></h1>
        <p className='intro-copy'>My work is to facilitate this exploration, guiding you to not only discover, but also embrace and LOVE your true self.</p>

        <img className="intro-hero" src={introHero} alt="Sprinkle donut surrounded by clouds" />


        <div className='intro-btn-container'>
          <button className="intro-contact-btn btn">Get Started</button>

          <button className="intro-contact-btn btn">Ask A Question</button>
        </div>
        
        <div className="socials-container">
          <p>Connect On Social Media</p>
          <div className="social-icons">
            <a href="https://facebook.com" target='_blank' rel="noreferrer">
              <div className='social-icon-container'>
                <FaFacebookF className="social" />
              </div>
            </a>
            <a href="https://www.instagram.com/rochelleruen/" target='_blank' rel="noreferrer">
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
    </section>
  )
}
