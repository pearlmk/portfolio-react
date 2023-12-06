import React from 'react'
import Project from '../componnet/Project/Project'
import Header from '../componnet/inc/Header/Header'


function Projectpage() {
  return (
   <div id="Project" className='py-3'>
     <Header Title="My Project" subTitle="What my client Say About Me ?" />
     <Project />
   </div>
  )
}

export default Projectpage