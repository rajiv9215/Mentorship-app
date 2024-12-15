import React from 'react'
import appimg from "../Asset/img/app.png"
function Appdownload() {
  return (
    <div className='bg-blue-600 md:w-3/5 w-4/5  -rotate-2 rounded-full mx-auto '>
    <div className="bg-yellow-300 rotate-2 rounded-full mx-auto flex justify-items-center text-center">
        <div className=''>
         <img className='xl:h-56 md:h-40 h-32 pt-8 py-6 ml-10 xl:ml-24 md:ml-16' src={appimg}/>
        </div>
      <div className="w-2/3 p-8 content-center">
        <h1 className="xl:text-4xl md:text-2xl text flex font-thin text-white md:mb-4">Mentoring any time anywhere with our App</h1>
      </div>
   
    </div>
    </div>
  )
}

export default Appdownload
