import React from "react";
import Topmentorbox from "../../components/Topmentorbox";
import CallCard from "./components/CallCard";


const MentorDetail = () => {
  return (
    <div className="w-[90vw] m-auto bg-yellow-300 -rotate-2">
    <div className="bg-blue-400 w-[90vw] m-auto rotate-2 ">
      <div className="flex">
        <div className="w-2/6 flex justify-center m-auto">
          <div className=" md:w-60 w-32 text-center md:p-6 bg-slate-0">
            <img
              className="border-2 p-1 border-yellow-300 rounded-full hover:scale-105 transition-all"
              src="https://imgcdn.stablediffusionweb.com/2024/4/8/e0fcdba9-057c-4abb-b08f-d2ee49e0de20.jpg"
            />
            <h3 className="font-semibold pt-4">Rajiv Ranjan</h3>
            <p className="">Digital markter</p>
            <p>⭐️⭐️⭐️⭐️⭐️</p>
          </div>
          {/* <Topmentorbox/> */}
        </div>
        <div className="w-4/6 p-8">
          <h1 className="font-bold text-3xl">About Me</h1>
          <p className="text-xl p-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
           <ul className="list-disc px-6">
            <li>cfejkcekffckjfk ✔️</li>
            <li>cfejkcekffckjfk ✔️</li>
            <li>cfejkcekffckjfk ✔️</li>
            </ul>
         <button className="bg-green-400 my-6 mx-2 cursor-pointer p-2 w-28 rounded-lg shadow-md">Follow</button>
        </div>
      </div>
        {/* different section */}
        <hr class="w-64 h-1 mx-auto  bg-gray-100 border-0 rounded  dark:bg-gray-700"/>
       <div className="p-10 px-20 flex gap-20">
        <CallCard/>
        <CallCard/>
        <CallCard/>
       </div>
    </div>
    </div>
  );
};

export default MentorDetail;
