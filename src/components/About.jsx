import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Heart, Eye, Target, TrendingUp, Sparkles } from "lucide-react";
import aboutYou from "../assets/imgs/aboutyou-woman.jpg";
import aboutYouHands from "../assets/imgs/aboutyou-hands.jpg";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <Heart size={32} />,
      title: "Rediscover YOU",
      description:
        "Rediscovering yourself is not about finding something new, but unearthing the forgotten treasure within. This process isn't only about identifying what you truly want from life, but also about learning how to break free from limiting beliefs and past conditioning.",
    },
    {
      icon: <Eye size={32} />,
      title: "Be Seen and Heard",
      description:
        "You are not alone! Together we create a safe and supportive space where you can fully express yourself without judgement. I want us both to deeply understand your dreams, fears, frustrations and concerns.",
    },
    {
      icon: <Target size={32} />,
      title: "Personalized Goal Setting",
      description:
        "Using holistic coaching tools, we will collaborate so that you can clearly state your goals in any area of your life. We will ensure your goals are in alignment with your values, strengths and specific changes you want to see.",
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Ongoing Motivation + Accountability",
      description:
        "I'm here for you! I want to see you living your best life and that means I am a constant source of motivation and accountability for you. You can always reach me between sessions.",
    },
    {
      icon: <Sparkles size={32} />,
      title: "Build Empowerment + Confidence",
      description:
        "How often have you had someone reflect back to you all your innate brilliance? I'm going to reflect back to you all the beauty, strength, and passion I can see in you that you may have become blind to.",
    },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="about section-padding">
      <div className="container-custom">
        <div className="about-grid">
          {/* Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="about-content"
          >
            <h2>
              Do you know
              <br />
              <span className="gradient-text">how amazing you are?!</span>
            </h2>
            <p>
              Take the time to nurture your well-being, clarify your goals,
              cultivate the strength to live authentically, and FOCUS ON YOU!
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="about-image"
          >
            <img
              src={aboutYou}
              alt="Young woman sitting in a chair smiling, looking down at the floor"
            />
          </motion.div>
        </div>

        <div className="about-features">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="about-feature"
            >
              <div className="about-feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="about-cta"
        >
          {/* Background Image */}
          <div className="about-cta-background">
            <img src={aboutYouHands} alt="Hands reaching out" />
          </div>

          <div className="about-cta-content">
            <h3>
              Take another step closer to creating the life of your dreams
            </h3>
            <p>Let's get on the phone together and see if our vibes match!</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("contact")}
              className="about-cta-button"
            >
              Free 20-minute chat
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
