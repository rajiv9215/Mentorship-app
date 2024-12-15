import React from 'react'
import { RiTwitterXLine } from "react-icons/ri";
import { FaDiscord, FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Link} from 'react-router';

function Footer() {
  return (
    <div className='grid md:grid-flow-col gap-8 h-60 font-mono pt-10 md:pl-20 pl-10 mb-10'>
      <div className='col-span-4 cursor-pointer text-4xl'>
        logo
      </div>
      <div className='col-span-4 leading-loose md:block '>
        <ul>
            <li className='font-semibold'>PLATFORM</li>
           <li> <Link to={"/find-mentor"} className='hover:text-blue-500 cursor-pointer'>Find a mentor</Link></li>
           <li> <Link to={"/become-mentor"} className='hover:text-blue-500 cursor-pointer'>Become a mentor</Link></li>
           <li> <Link to={"/blogs"} className='hover:text-blue-500 cursor-pointer'>Blog</Link></li>
            <li><Link to={"/about-us"} className='hover:text-blue-500 cursor-pointer'>About us</Link></li>
        </ul>
      </div>
      <div className='col-span-4 leading-loose md:block '>
          <ul>
            <li className='font-semibold'>LEGAL</li>
            <li className='hover:text-blue-500 cursor-pointer'>Term and conditions</li>
            <li className='hover:text-blue-500 cursor-pointer'>privacy policy</li>
            <li className='hover:text-blue-500 cursor-pointer'>Arts</li>
          </ul>
      </div>
      <div className='col-span-4 pb-10 md:pb-0'>
        <p className='font-bold py-4'>Community</p>
        <div className='flex text-3xl gap-10 '>
         <RiTwitterXLine className='hover:scale-110 transition-all'/>
         <FaInstagramSquare className='hover:scale-110 transition-all' v/>
         <FaLinkedin className='hover:scale-110 transition-all'/>
         <FaDiscord className='hover:scale-110 transition-all'/>
         </div>
      </div>
    </div>
  )
}

export default Footer
