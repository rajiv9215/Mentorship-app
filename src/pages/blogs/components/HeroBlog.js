import React from 'react'
import { Link } from 'react-router'

const HeroBlog = () => {
  return (
        <div className='container w-[85vw] mx-auto border-black border-2 my-6  p-1 rounded-xl'>
       <div className=" bg-cover bg-center" style={{ backgroundImage: 'url(https://thumbs.dreamstime.com/z/mentoring-concept-illustration-mentoring-concept-illustration-idea-coaching-studying-117144897.jpg?w=992)' }}>
      <div className="container mx-auto backdrop-blur-[2px] rounded-xl p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
        <div className="flex flex-col items-center justify-center h-full leading-10">
          <h1 className="text-4xl py-2 font-bold text-blue-800 leading-tight md:text-5xl lg:text-6xl xl:text-7xl">Unlock Your Potential</h1>
          <p className="text-lg py-2 font-semibold pb-4 leading-relaxed md:text-xl lg:text-2xl xl:text-3xl">Mentorship that empowers you to succeed</p>
          <Link to="/blog" className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded">Read More</Link>
        </div>
      </div>
    </div>
       </div>
  )
}

export default HeroBlog
