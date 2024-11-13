import React from 'react'

import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

export default function Quote() {

  const quoteData = [
    {
      quote: "Have the courage to follow your heart and intuition. They already know what you truly want to become.",
      name: "Steve Jobs",
      id: 1
    },
  
  ]



  const  quoteFull = quoteData.map(quote => {
    return (
      <div key={quote.id} className='quote-full'>
        <div className='quote-content'>
          <p className='quote-copy'> <FaQuoteLeft className='quote-left' />{quote.quote}<FaQuoteRight className='quote-right'/></p>
          <p className='quote-name'>- {quote.name}</p>
        </div>
      </div>
    )
  })

 
  
  return (
    <section id="quote" className='quote-section'>
      {quoteFull}
    </section>
  )
}
