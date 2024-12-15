import React from 'react'
import Topmentorbox from './Topmentorbox'
import { Link } from 'react-router'

function Topmentor() {
  return (
    <div className='py-10'>
        <h2 className='font-normal px-6 pt-4 text-center text-5xl'>Discover the world's best mentors.</h2>
      <div className='flex md:p-10 p-8 gap-12 md:gap-x-48 md:gap-y-10 justify-center flex-wrap'>
        <Link to={"/mentor"}> <Topmentorbox /></Link>
      <Topmentorbox/>
      <Topmentorbox/>
      <Topmentorbox/>
      <Topmentorbox/>
      <Topmentorbox/>
      </div>
    </div>
  )
}

export default Topmentor
