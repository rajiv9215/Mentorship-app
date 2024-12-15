import React from "react";
import imge from "../Asset/img/rajiv.png"

function Topmentorbox() {
  return (
    <div  className=" md:w-60 w-32 text-center md:p-6 bg-slate-0">
      <img
        className="border-2 p-1 border-yellow-300 rounded-full hover:scale-105 transition-all"
        src="https://imgcdn.stablediffusionweb.com/2024/4/8/e0fcdba9-057c-4abb-b08f-d2ee49e0de20.jpg"
      />
      <h3 className="font-semibold pt-4">Rajiv Ranjan</h3>
      <p className="">Digital markter</p>
    </div>
  );
}

export default Topmentorbox;
