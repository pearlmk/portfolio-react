import React from 'react'
import Contact from '../componnet/Contact/Contact'
import Header from '../componnet/inc/Header/Header'

function contactpage() {
  return (
    <div id="ContactMe" className='py-3'>
      <Header Title="Contact Me" subTitle="Let Keep In Touch" />
      <Contact />
    </div>
  )
}

export default contactpage