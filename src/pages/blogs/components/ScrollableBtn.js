import React from 'react';

const ScrollableButtonGroup = () => {
  return (
    <div className="flex overflow-x-scroll  mt-6 mx-16 xl:mx-80 ">
      <button className="bg-gray-300 hover:bg-green-400 md:min-w-32 min-w-28  md:p-2 px-2 rounded-full mr-4 font-thin">SSC-JEE</button>
      <button className="bg-gray-300 hover:bg-green-400 md:min-w-32 min-w-28  md:p-2 px-2 rounded-full mx-4 font-thin">UPSC </button>
      <button className="bg-gray-300 hover:bg-green-400 md:min-w-32 min-w-28  md:p-2 px-2 rounded-full mx-4 font-thin">Designer</button>
      <button className="bg-gray-300 hover:bg-green-400 md:min-w-32 min-w-28  md:p-2 px-2 rounded-full mx-4 font-thin">FullStack </button>
      <button className="bg-gray-300 hover:bg-green-400 md:min-w-32 min-w-28  md:p-2 px-2 rounded-full mx-4 font-thin">Backend </button>
      <button className="bg-gray-300 hover:bg-green-400 md:min-w-32 min-w-28  md:p-2 px-2 rounded-full mx-4 font-thin">Fronted </button>
      <button className="bg-gray-300 hover:bg-green-400 md:min-w-32 min-w-28  md:p-2 px-2 rounded-full mx-4 font-thin">JEE-MAINS </button>
      <button className="bg-gray-300 hover:bg-green-400 md:min-w-32 min-w-28  md:p-2 px-2 rounded-full mx-4 font-thin">JEE-ADV </button>
      <button className="bg-gray-300 hover:bg-green-400 md:min-w-32 min-w-28  md:p-2 px-2 rounded-full mx-4 font-thin">NEET </button>
      <button className="bg-gray-300 hover:bg-green-400 md:min-w-32 min-w-28  md:p-2 px-2 rounded-full mx-4 font-thin">UI/UX </button>
      <button className="bg-gray-300 hover:bg-green-400 md:min-w-32 min-w-28  md:p-2 px-2 rounded-full mx-4 font-thin">Programing </button>
    </div>
  );
};

export default ScrollableButtonGroup;