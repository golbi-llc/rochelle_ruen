import React from 'react'
import { FaFacebookF } from "react-icons/fa"
import { BsInstagram } from "react-icons/bs"

export default function Newsletter() {
  const [formData, setFormData] = React.useState(
    {
      firstname: "",
      lastname: "",
      email: ""
    }
  )
  const [submitted, setSubmitted] = React.useState(false)

  function handleChange(event) {
    setFormData(prevFormData => {
      return {
          ...prevFormData,
          [event.target.name]: event.target.value
      }
    })
  }

  function handleSubmitNewsletter(event) {
    const emailField = document.querySelector(".newsletter-email");
    event.preventDefault()
    if(formData.email.length === 0) {
      emailField.placeholder = "Donut forget an email! 🍩😉"
      emailField.classList.add("input-error")
      setTimeout(() => {
        emailField.placeholder = "Email address"
        emailField.classList.remove("input-error")
      }, 2000)
    } else {
      setSubmitted(true)
      setFormData({
        email: ""
      })
      setTimeout(() => {
        setSubmitted(false)
      }, 2000)
    }
  }

  return (   
    <div id="newsletter"  className="newsletter-section">
      <form onSubmit={handleSubmitNewsletter} className='newsletter-form'>
        <div className='newsletter-content'>
          {/* <h1 className='newsletter-copy'>{submitted ? "Thanks for subscribing!": "Subscribe to our newsletter"}</h1> */}
          <div className='submit-container'>
            <input 
              className='newsletter-name'
              type="text"
              placeholder="First Name"
              onChange={handleChange}
              name="firstname"
              value={formData.firstname}
            />
            <input 
              className='newsletter-name'
              type="text"
              placeholder="Last Name"
              onChange={handleChange}
              name="lastname"
              value={formData.lastname}
            />
            <input 
              className='newsletter-email'
              type="email"
              placeholder="Email address"
              onChange={handleChange}
              name="email"
              value={formData.email}
            />
            <button className='newsletter-btn btn'>Subscribe To Our Newsletter!</button>
          </div>
          </div>
        </form>
        <div className='newsletter-divider'></div>
        <div className='newsletter-socials-container'>
            <p className='newsletter-socials-copy'>Or Connect On Social Media</p>
            <div className="newsletter-social-icons">
              <a href="https://facebook.com" target='_blank' rel="noreferrer">
                <div className='newsletter-social-icon-container'>
                  <FaFacebookF className="newsletter-social" />
                </div>
              </a>
              <a href="https://www.instagram.com/rochelleruen/" target='_blank' rel="noreferrer">
                <div className='newsletter-social-icon-container'>
                  <BsInstagram className="newsletter-social" />
                </div>
              </a>
            </div>    
        </div>
    </div>
  )
}
