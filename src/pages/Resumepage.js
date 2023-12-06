import React from 'react'
import Resume from '../componnet/Resume/Resume'
import Header from '../componnet/inc/Header/Header'


function resumepage() {
  return (
    <div className='py-3 h-100' id="Resume">
    <Header Title="Resume" subTitle="My Formal Bio Details" />
    <Resume />
    </div>
  )
}

export default resumepage