import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      text: "Rochelle helped me rediscover my passion and purpose. Her coaching style is both gentle and powerful, pushing me to be my authentic self.",
      author: "Sarah M.",
      role: "Marketing Director",
      avatar: "imgs/sarah.png",
    },
    {
      text: "Working with Rochelle was transformative. She has a gift for helping you see your own potential and guiding you toward it with compassion and wisdom.",
      author: "Jennifer L.",
      role: "Entrepreneur",
      avatar: "imgs/jennifer.png",
    },
    {
      text: "Rochelle's approach is unique - she doesn't just give advice, she helps you find the answers within yourself. I'm forever grateful for our sessions.",
      author: "Michelle R.",
      role: "Life Coach",
      avatar: "imgs/michelle.png",
    },
  ];

  return (
    <section id="testimonials" className="testimonials section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="testimonials-header"
        >
          <h2>What My Clients Say</h2>
          <p>
            Real stories from real women who have transformed their lives
            through coaching
          </p>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="testimonial-card"
            >
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  <img
                    src={testimonial.avatar}
                    alt={`${testimonial.author} headshot`}
                  />
                </div>
                <div className="testimonial-info">
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
