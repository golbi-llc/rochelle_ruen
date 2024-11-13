import React from 'react'
import showupCheers from "../assets/imgs/showup_cheers.jpg"


export default function ShowUp() {
  return (
    <section id="showup" className='showup-section'>
      <div className='showup-content'>
        <div className='showup-copy'>
          <h1 className='section-header showup-header'>Show up fully in all<br/><span>aspects of your life</span></h1>
          <p className='showup-text'>It’s not just important—it’s essential for happiness and success! </p>
          <p className='showup-text'>Let’s uncover and celebrate all of you.  Bring your full self to this life experience and get more of everything you want out of it.  You know the old saying “you get out what you put it”…Ask yourself honestly, how much of myself am I putting into this life?  If it’s not 100%, you’re cutting yourself short.</p>
          <p className='showup-text'>Let’s go all in on being all of who we are, ALL THE DAMN TIME!</p>
          <button className='showup-btn btn'>Learn More</button>
        </div>
      </div>
      <img className='showup-image' src={showupCheers} alt='a hand holding a donut' />
    </section>
  )
}
