import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import mainBackground from "../assets/imgs/main_background.png"
import aboutYou from "../assets/imgs/aboutyou-woman.jpg"
import aboutYouHands from "../assets/imgs/aboutyou-hands.jpg"
import aboutYouHorizon from "../assets/imgs/aboutyou-horizon.jpg"

import { FaFacebookF } from "react-icons/fa"
import { BsInstagram } from "react-icons/bs"
import ContactForm from "../components/ContactForm"

export default function aboutyou() {
  return (
    <>
      <Layout>
        <section id="aboutyou" className='aboutyou-section'>
        <img className="aboutyou-background" src={mainBackground} alt="" />
          <div className="aboutyou-content">
            <div className="aboutyou-hero-section">
              <div>
              <h1 className="section-header aboutyou-header">
              Do you know
                <br />
                <span>how amazing you are?!</span>
              </h1>

              <p className="aboutyou-intro-text"> Take the time to nurture your well-being, clarify your goals, cultivate the strength to live authentically, and FOCUS ON YOU!
              </p>

              <div className="aboutyou-socials-container">
                  <p>Connect On Social Media</p>
                  <div className="social-icons">
                  <a href="https://facebook.com" target="_blank" rel="noreferrer">
                    <div className="social-icon-container">
                      <FaFacebookF className="social" />
                    </div>
                  </a>
                  <a
                    href="https://www.instagram.com/rochelleruen/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="social-icon-container">
                      <BsInstagram className="social" />
                    </div>
                  </a>
                </div>
              </div>   
              </div>

              <div>
                <img
                  className="aboutyou-hero"
                  src={aboutYou}
                  alt="Young woman sitting in a chair smiling, looking down at the floor."
                />
            </div>   
          </div>
         
            <div className='aboutyou-copy-container'>
              

              <div className="aboutyou-bullet">
                <h3 className="aboutyou-bullet-header">01 - Rediscover YOU</h3>
                <p className="aboutyou-text">Rediscovering yourself is not about finding something new, but unearthing the forgotten treasure within.  This process isn’t only about identifying what you truly want from life, but also about learning how to break free from limiting beliefs and past conditioning.  Each session serves as a stepping stone towards greater confidence and clarity.  You become empowered to make decisions that align more authentically with your true self.
                </p>
              </div>

              <div className="aboutyou-bullet">
                <h3 className="aboutyou-bullet-header">02 — Be Seen and Heard</h3>
                <p className="aboutyou-text">You are not alone!  Together we create a safe and supportive space where you can fully express yourself without judgement.  I want us both to deeply understand your dreams, fears, frustrations and concerns.  Each client is different and we will tailor our sessions with guidance and reflections that resonate with your personal experiences and aspirations.
                </p>
              </div>

              <div className="aboutyou-bullet">
                <h3 className="aboutyou-bullet-header">03 — Personalized Goal Setting</h3>
                <p className="aboutyou-text">Using holistic coaching tools, we will collaborate so that you can clearly state your goals in any area of your life.  We will ensure your goals are in alignment with your values, strengths and specific changes you want to see.  Let’s take inspired action!
                </p>
              </div>

              <div className="aboutyou-bullet bullet-img">
                <img 
                  className="aboutyou-bullet-img"
                  src={aboutYouHorizon}
                  alt=""
                />
              </div>

              <div className="aboutyou-bullet">
                <h3 className="aboutyou-bullet-header">04 — Ongoing Motivation + Accountability</h3>
                <p className="aboutyou-text">I’m here for you!  I want to see you living your best life and that means I am a constant source of motivation and accountability for you.  You can always reach me between sessions and don’t be surprised if you get unexpected notes from me checking in or sharing some encouraging words.  We have big things to do and nothing is going to stop us!
                </p>
              </div>

              <div className="aboutyou-bullet">
                <h3 className="aboutyou-bullet-header">05 — Build Empowerment + Confidence</h3>
                <p className="aboutyou-text">How often have you had someone reflect back to you all your innate brilliance?  If you’re like most people, not often.  I’m going to reflect back to you all the beauty, strength, and passion I can see in you that you may have become blind to.  You will take ownership of your magnificence and boost your confidence.  You’ll also learn to trust your intuition, make decisive choices, and act boldly.  Let’s transform those feelings of being stuck into movements of empowerment and growth! 
                </p>
              </div>
            </div>

            <div className="aboutyou-bottom-content">
            <div className="aboutyou-contact-img-container">
              <div className="aboutyou-img-copy-container">
                <p className="aboutyou-img-copy">
                Take another step closer to creating the life of your dreams
                </p>

                <p className="aboutyou-img-copy">
                Let’s get on the phone together and see if our vibes match!
                </p>

                <div className="aboutyou-contact-btn-container">
                  <p className="aboutyou-img-copy">
                    Click here to book a
                  </p>
                  <button className="aboutyou-contact-btn btn">Free 20-minute chat</button>
                </div>
              </div>

              <img
                className="aboutyou-contact-img"
                src={aboutYouHands}
                alt="Palm trees with sunset in the background"
              />
            </div>
          </div>
          </div>
      </section>
      </Layout>
    </>
  )
}
