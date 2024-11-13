import React from "react"
import { useRef } from "react";
import { useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { IoCloseCircleSharp } from "react-icons/io5";
import workWithMe from "../assets/imgs/contact-rochelle.jpg"
import ContactForm from "./ContactForm";


export default function MainContact() {
  return (
    <div id="contact" className="contact-section">
      <div className="contact-content">
        <div className="contact-content-mask">
          <p className="contact-copy"><span>Want to work with me?</span><br/>If you have any questions, comments, or just want to connect please feel free to reach via email, text, or an old school phone call.  I can’t wait to meet you!</p>
        </div>
      
        <img className="contact-img" src={workWithMe} alt="Rochelle smiling" />
      </div>
      <ContactForm></ContactForm>
    </div>
  )
}