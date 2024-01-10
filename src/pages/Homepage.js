import React from 'react'
import  Home from '../componnet/Home/Home'
import Homefooter from '../componnet/inc/Homefooter/Homefooter'

function Homepage() {
  return (
    <div id="Home" className='overflow-hidden overflow-hidden'>
       <Home />
       <Homefooter />
    </div>
  )
}

export default Homepage