import React from 'react'
import CategoryBox from './CategoryBox'
import Btncomponent from './Btncomponent'

function Category() {
  return (
    <div className='text-center'>
      <h2 className='text-center pb-6 text-5xl'>Category we have</h2>
      <div className='md:px-16 flex overflow-scroll px-8 w-[85vw] mx-auto xl:w-[70vw] xl:my-4' >
      <button className="bg-gray-300 hover:bg-green-400 text-white font-bold px-4 min-w-32  rounded-full mx-2">All </button>
      <button className="bg-gray-300 hover:bg-green-400 text-white font-bold px-4 min-w-32  rounded-full mx-2">Digital Marketing </button>
      <button className="bg-gray-300 hover:bg-green-400 text-white font-bold px-4 min-w-32  rounded-full mx-2">It Security </button>
      <button className="bg-gray-300 hover:bg-green-400 text-white font-bold px-4 min-w-32  rounded-full mx-2">Web Devloper </button>
      <button className="bg-gray-300 hover:bg-green-400 text-white font-bold px-4 min-w-32  rounded-full mx-2">UI Designer</button>
      <button className="bg-gray-300 hover:bg-green-400 text-white font-bold px-4 min-w-32  rounded-full mx-2">IIT-JEE </button>
      <button className="bg-gray-300 hover:bg-green-400 text-white font-bold px-4 min-w-32  rounded-full mx-2">NEET</button>
      <button className="bg-gray-300 hover:bg-green-400 text-white font-bold px-4 min-w-32  rounded-full mx-2">Bsc </button>
      <button className="bg-gray-300 hover:bg-green-400 text-white font-bold px-4 min-w-32  rounded-full mx-2">SSC </button>
      <button className="bg-gray-300 hover:bg-green-400 text-white font-bold px-4 min-w-32  rounded-full mx-2">MBA </button>
      <button className="bg-gray-300 hover:bg-green-400 text-white font-bold px-4 min-w-32  rounded-full mx-2">Button </button>
      <button className="bg-gray-300 hover:bg-green-400 text-white font-bold px-4 min-w-32  rounded-full mx-2">Button </button>
      <button className="bg-gray-300 hover:bg-green-400 text-white font-bold px-4 min-w-32  rounded-full mx-2">Button </button>
      <button className="bg-gray-300 hover:bg-green-400 text-white font-bold px-4 min-w-32  rounded-full mx-2">Button </button>
      <button className="bg-gray-300 hover:bg-green-400 text-white font-bold px-4 min-w-32  rounded-full mx-2">Button </button>
      <button className="bg-gray-300 hover:bg-green-400 text-white font-bold px-4 min-w-32  rounded-full mx-2">Button </button>
      <button className="bg-gray-300 hover:bg-green-400 text-white font-bold px-4 min-w-32  rounded-full mx-2">Button </button>
      <button className="bg-gray-300 hover:bg-green-400 text-white font-bold px-4 min-w-32  rounded-full mx-2">Button </button>
      </div>
    <div className='flex pt-4 p-8 md:gap-x-44 gap-x-28 gap-y-16 text-center justify-center flex-wrap'>
      <CategoryBox/>
      <CategoryBox/>
      <CategoryBox/>
      <CategoryBox/>
      <CategoryBox/>
      <CategoryBox/>
    </div>
    </div>
  )
}

export default Category
