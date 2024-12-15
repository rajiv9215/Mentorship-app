import React from 'react'



const CallCard = () => {
  return (
      <div className="bg-blue-500 -rotate-3 w-68 rounded-xl hover:scale-105">
    <div className="w-68 h-60 rotate-3 border-2 bg-yellow-300 border-black content-center text-left p-2 leading-relaxed rounded-xl  transition-all">
      <h3 className="font-bold text-left p-4 ">
        Become a professional video editor
      </h3>
      <p className="text-right p-4">140 mentor available</p>
      <button className="bg-orange-400 my-6 mx-2 cursor-pointer p-2 w-24 rounded-3xl shadow-md">Book Now</button>
      </div>
    </div>
    
  )
}

export default CallCard
