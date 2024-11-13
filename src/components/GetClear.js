import * as React from 'react'
import getclearGroup from "../assets/imgs/getclear_group.jpg"

export default function GetClear() {
  return (
    <section id="greetings" className='getclear-section'>
      <img className='getclear-image' src={getclearGroup} alt='A group of women smiling into the camera' />
      
      <div className='getclear-content'>
        <div className='getclear-copy'>
          <h1 className='section-header getclear-header'>Get clear about the life<br/><span> you want to live! </span></h1>

          <p className='getclear-text'>Hi there! Does your life look pretty great on the outside but feel pretty “meh” on the inside?  I know the feeling, and I want you to break free from it like I did.  Life is too short for meh - let’s kick that sh!t to the curb and start living fully!</p>
            <p className='getclear-text'>I 100% believe that everyone possesses unique strengths and unimaginable potential.  Unfortunately, without doing the work to tap into who we are and what we REALLY want, we often end up living a life based on what society says is good instead of what we KNOW to be right for us.</p>
            <p className='getclear-text'>My work is to facilitate this exploration, guiding you to not only discover, but also embrace and LOVE your true self.</p>
        </div>
      </div>
  </section>
  )
}