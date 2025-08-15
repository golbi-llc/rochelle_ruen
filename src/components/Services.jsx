import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Clock, Star, Users, Calendar } from "lucide-react";
import serviceDive from "../assets/imgs/service-dive.png";
import serviceClarity from "../assets/imgs/service-clarity.png";
import serviceRetreat from "../assets/imgs/service-retreat.png";

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      title: "Deep Dive",
      price: "$297",
      duration: "90-minute session",
      icon: <Clock size={24} />,
      image: serviceDive,
      description:
        "In this single 90-minute session, we will take a comprehensive look at your life using holistic coaching techniques. Together, we'll pinpoint areas where you're ready to make changes or establish significant goals!",
      features: [
        "Comprehensive life assessment",
        "Holistic coaching techniques",
        "Goal identification & planning",
        "Actionable next steps",
      ],
      popular: false,
    },
    {
      title: "Clarity in Action",
      price: "$3,333",
      duration: "10 sessions",
      icon: <Star size={24} />,
      image: serviceClarity,
      description:
        "Ten 55-minute sessions to make big changes in your life! You'll become clear about who you are and what you truly desire, enabling you to take decisive action! You will also have unlimited email support between sessions.",
      features: [
        "10 personalized coaching sessions",
        "Unlimited email support",
        "Deep self-discovery process",
        "Action planning & accountability",
        "Ongoing motivation & guidance",
      ],
      popular: true,
    },
    {
      title: "Retreats & Group Coaching",
      price: "TBA",
      duration: "Quarterly events",
      icon: <Users size={24} />,
      image: serviceRetreat,
      description:
        "Retreats typically occur quarterly (January, April, July and October). Retreat may be followed with a group coaching container, and the opportunity for adding 1:1 coaching.",
      features: [
        "Quarterly retreat experiences",
        "Group coaching sessions",
        "Community connection",
        "Optional 1:1 add-ons",
        "Transformative group dynamics",
      ],
      popular: false,
    },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="services section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="services-header"
        >
          <h2>
            I am obsessed with everyone
            <br />
            <span className="gradient-text">living their best life!</span>
          </h2>
          <p>
            Let's link arms, create big visions for your life, bring them into
            reality, raise some champagne glasses and then repeat!
          </p>
          <p>
            Leveling up in life only stops when life is over, and guess what? If
            you're reading this, it's not over! We don't need to settle for
            anything!
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`service-card ${service.popular ? "popular" : ""}`}
            >
              {/* Service Image */}
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>

              <div className="service-header">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <div>
                  <span className="service-price">{service.price}</span>
                  <span className="service-duration">{service.duration}</span>
                </div>
              </div>

              <p className="service-description">{service.description}</p>

              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("contact")}
                className={`service-button ${
                  service.popular ? "primary" : "secondary"
                }`}
              >
                {service.title === "Retreats & Group Coaching"
                  ? "Where should we go?"
                  : "Book Now"}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="services-cta"
        >
          <h3>Ready to transform your life?</h3>
          <p>
            Let's start with a free 20-minute consultation to see if we're a
            good fit!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("contact")}
            className="btn-primary"
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
