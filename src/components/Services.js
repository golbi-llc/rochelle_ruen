import React from 'react'
import serviceDive from '../assets/imgs/service-dive.png'
import serviceClarity from '../assets/imgs/service-clarity.png'
import serviceRetreat from '../assets/imgs/service-retreat.png'

export default function Services() {
  return (
    <div id='services' className='services-section'>
      <h1 className='services-section-header section-header'>I am obsessed with everyone <span>living their best life!</span></h1>
      <p className='services-section-copy'>Let’s link arms, create big visions for your life, bring them into reality, raise some champagne glasses and then repeat!</p>
      <p className='services-section-copy'>Leveling up in life only stops when life is over, and guess what?  If you’re reading this, it’s not over!  We don’t need to settle for anything!</p>
      <div className='services-content'>
        <div className='service-item'>
          <div className='service-top'>
            <h3 className='service-header'>
              Deep Dive
            </h3>
            <p className='service-price'>$297</p>
            <img className='service-image' src={serviceDive} alt='woman diving into water' />
          </div>        
         
          <div className='service-bottom'>
            <p className='service-copy'>In this single 90-minute session, we will take a comprehensive look at your life using holistic coaching techniques.  Together, we’ll pinpoint areas where you’re ready to make changes or establish significant goals!</p>
  
            <button className='service-book-now-btn btn'>Book Now</button>
          </div>    
        </div>

        <div className='service-item'>
          <div className='service-top'>
            <h3 h3 className='service-header'>
              Clarity in Action
            </h3>
            <p className='service-price'>$3,333</p>
            <img className='service-image' src={serviceClarity} alt='woman diving into water' />
     
          </div>

          <div className='service-bottom'>
            <p className='service-copy'>Ten 55-minute sessions to make big changes in your life!  You’ll become clear about who you are and what you truly desire, enabling you to take decisive action!  You will also have unlimited email support between sessions.(you know, when life is really happening!)</p>
          
            <button className='service-book-now-btn btn'>Book Now</button>
          </div>
        </div>

        <div className='service-item'>
          <div className='service-top'>
            <h3 className='service-header'>
              Retreats & Group Coaching
            </h3>
            <p className='service-price'>To Be Announced</p>
            <img className='service-image' src={serviceRetreat} alt='woman diving into water' />
   
          </div>

          <div className='service-bottom'>
            <p className='service-copy'>Retreats typically occur quarterly (January, April, July and October).  Retreat may be followed with a group coaching container, and the opportunity for adding 1:1 coaching.  We will be announcing our first retreat for 2025 in the coming months, stay tuned…</p>
        
            <button className='service-book-now-btn btn'>Where should we go?</button>
          </div>
        </div>
      </div>
    </div>
  )
}
