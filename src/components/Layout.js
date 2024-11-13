import * as React from 'react';
import Nav from './Nav'
import Footer from './Footer'
import { Helmet } from 'react-helmet';

export default function Layout({ children }) {

  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }

  return (
    <>
      <Helmet>
        <title>Rochelle Ruen | Life Coach</title>
      </Helmet>
      <main className='main-container'>
        <Nav />
        {children}
        <Footer />
      </main>
    </> 
  )
}