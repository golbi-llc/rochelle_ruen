import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Instagram, Facebook } from "lucide-react";
import aboutMe from "../assets/imgs/mystory-rochelle.jpg";
import aboutMeConnecting from "../assets/imgs/mystory-connecting.jpg";
import palms from "../assets/imgs/mystory-palms.jpg";

const MyStory = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="mystory" className="mystory section-padding">
      <div className="container-custom">
        <div className="mystory-grid">
          {/* Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mystory-content"
          >
            <h2>My Story</h2>
            <p>
              Hi, I'm so happy you are here! I can't wait to meet you and learn
              all about you! Until then, here is a little about my story…
            </p>
            <p>
              I have always done the things I was "supposed" to do. I went to
              college, got married, got my master's degree, bought a house, had
              a kid, bought a second house. On paper my life was amazing. On the
              inside, it was a totally different story.
            </p>
            <p>
              I realized I was so far out of touch with who I was, and what I
              truly wanted, that I was going to have to do some deep work. I
              started learning about me, the real ME. Not the me I thought I
              needed to be for anyone else.
            </p>
            <p>
              I started showing up fully and without regrets. As my
              self-knowledge and self-trust grew so did my confidence.
            </p>

            {/* Social Media */}
            <div className="mystory-social">
              <p className="mystory-social-text">Connect On Social Media</p>
              <div className="mystory-social-icons">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.instagram.com/rochelleruen/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mystory-social-icon instagram"
                >
                  <Instagram size={20} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mystory-social-icon facebook"
                >
                  <Facebook size={20} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mystory-image"
          >
            <img
              src={aboutMe}
              alt="Rochelle in blue dress with mountains in the background"
            />
          </motion.div>
        </div>

        {/* Second Grid */}
        <div className="mystory-grid">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mystory-image"
          >
            <img
              src={aboutMeConnecting}
              alt="Rochelle connecting with others"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mystory-content"
          >
            <p>
              Being in a place where life on the inside feels even better than
              it looks on the outside is something I want everyone to know and
              experience. I want to reach out and help as many women create a
              life they are obsessed with as possible.
            </p>
            <p>
              At the time I started my coaching career it felt like it came out
              of nowhere, but looking back now, it had been in the works for a
              long time. I just hadn't been able to connect the dots and see it
              on the horizon.
            </p>
            <p>
              I have always loved to inspire and motivate people. It is 100% my
              nature and it feeds my soul to lift others up! Holding space for
              others to be truly seen and heard is my gift. When we are
              together, there is no need for masks or ego. I create a safe and
              authentic environment where can you truly be yourself, allowing
              for genuine connection and meaningful growth.
            </p>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mystory-cta"
        >
          {/* Background Image */}
          <div className="mystory-cta-background">
            <img src={palms} alt="Palm trees with sunset" />
          </div>

          <div className="mystory-cta-content">
            <h3>
              Take another step closer to creating the life of your dreams
            </h3>
            <p>Let's get on the phone together and see if our vibes match!</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("contact")}
              className="mystory-cta-button"
            >
              Free 20-minute chat
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MyStory;
