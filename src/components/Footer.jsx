import React from "react";
import { motion } from "framer-motion";
import { Instagram, Facebook, Heart } from "lucide-react";
import mainLogo from "../assets/imgs/main_logo.png";

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container-custom">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="footer-brand-header"
            >
              <div className="footer-logo">
                <img src={mainLogo} alt="Rochelle Ruen" />
              </div>
              <div className="footer-brand-info">
                <h3>Rochelle Ruen</h3>
                <p>Life Coach & Personal Development Specialist</p>
              </div>
            </motion.div>
            <p className="footer-brand-description">
              Helping women discover their authentic selves and create lives
              they truly love through personalized coaching and transformative
              experiences.
            </p>
            <div className="footer-social">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.instagram.com/rochelleruen/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon instagram"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon facebook"
              >
                <Facebook size={20} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="footer-section"
          >
            <h3>Quick Links</h3>
            <ul>
              <li>
                <button onClick={() => scrollToSection("home")}>Home</button>
              </li>
              <li>
                <button onClick={() => scrollToSection("about")}>About</button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")}>
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("mystory")}>
                  My Story
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")}>
                  Contact
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="footer-section"
          >
            <h3>Services</h3>
            <ul>
              <li>
                <button onClick={() => scrollToSection("services")}>
                  Deep Dive Session
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")}>
                  Clarity in Action
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")}>
                  Retreats & Group Coaching
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")}>
                  Free Consultation
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="footer-section"
          >
            <h3>Contact Info</h3>
            <ul>
              <li>
                <button onClick={() => scrollToSection("contact")}>
                  rochelle@rochelleruen.com
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")}>
                  +1 208.255.8898
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")}>
                  Glendale, CA
                </button>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="footer-bottom"
        >
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Rochelle Ruen. All rights reserved.</p>
            <span className="footer-heart">
              <Heart size={16} />
            </span>
            <p>Made with love for women everywhere</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
