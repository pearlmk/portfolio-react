import React from 'react'
import About from '../componnet/About/About'
import Header from '../componnet/inc/Header/Header'



function Aboutpage() {
  return (
    <div id="AboutMe" className='py-3 overflow-hidden'>
    <Header
    Title="About"
    subTitle="Why choose me?"
  />
      <About />
    </div>
  )
}

export default Aboutpage