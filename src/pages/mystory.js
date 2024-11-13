import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import mainBackground from "../assets/imgs/main_background.png"
import aboutMe from "../assets/imgs/mystory-rochelle.jpg"
import aboutMeConnecting from "../assets/imgs/mystory-connecting.jpg"
import palms from "../assets/imgs/mystory-palms.jpg"

import { FaFacebookF } from "react-icons/fa"
import { BsInstagram } from "react-icons/bs"
import ContactForm from "../components/ContactForm"

export default function mystory() {
  return (
    <>
      <Layout>
        <section id="mystory" className='mystory-section'>
        <img className="mystory-background" src={mainBackground} alt="" />
          <div className="mystory-content">
            <div className='mystory-copy-container'>
              <h1 className="section-header mystory-header">
                Ignite your light,
                <br />
                <span>transform your world</span>
              </h1>

              <p className="mystory-text">Hi, I’m so happy you are here! I can’t wait to meet you and learn
                all about you! Until then, here is a little about my story…
              </p>

              <p className="mystory-text">
                I have always done the things I was “supposed” to do. I went to
                college, got married, got my master’s degree, bought a house, had
                a kid, bought a second house. On paper my life was amazing. On the
                inside, it was a totally different story. I realized I was so far
                out of touch with who I was, and what I truly wanted, that I was
                going to have to do some deep work.
              </p>

              <p className="mystory-text">
                I started learning about me, the real ME. Not the me I thought I
                needed to be for anyone else. I started showing up fully and
                without regrets. As my self-knowledge and self-trust grew so did
                my confidence.
              </p>

              <div className="socials-container">
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

          <img
            className="mystory-hero"
            src={aboutMe}
            alt="Rochelle in blue dress with mountains in the background"
          />
        </div>

        <div className="mystory-middle-content">
          <img
            className="mystory-connecting-img"
            src={aboutMeConnecting}
            alt="Rochelle in blue dress with mountains in the background"
          />
          <div>
          <p className="mystory-text">
              Being in a place where life on the inside feels
              even better than it looks on the outside is something I want
              everyone to know and experience. I want to reach out and help as
              many women create a life they are obsessed with as possible.
          </p>
          <p className="mystory-text">
            At the time I started my coaching career it felt like it came out
            of nowhere, but looking back now, it had been in the works for a
            long time. I just hadn’t been able to connect the dots and see it
            on the horizon. I have always loved to inspire and motivate
            people. It is 100% my nature and it feeds my soul to lift others
            up! Holding space for others to be truly seen and heard is my
            gift. When we are together, there is no need for masks or ego. I
            create a safe and authentic environment where can you truly be
            yourself, allowing for genuine connection and meaningful growth.
            When you work with me, you can explore your true self, free from
            the pressures and expectations to be anything different.
          </p>
          </div>
        </div>

        <div className="mystory-bottom-content">
            <div className="mystory-contact-img-container">
              <div className="mystory-img-copy-container">
                <p className="mystory-img-copy">
                Take another step closer to creating the life of your dreams
                </p>

                <p className="mystory-img-copy">
                Let’s get on the phone together and see if our vibes match!
                </p>

                <div className="mystory-contact-btn-container">
                  <p className="mystory-img-copy">
                    Click here to book a
                  </p>
                  <button className="mystory-contact-btn btn">Free 20-minute chat</button>
                </div>
              </div>

              <img
                className="mystory-contact-img"
                src={palms}
                alt="Palm trees with sunset in the background"
              />
            </div>
          </div>
      </section>
      </Layout>
    </>
  )
}
