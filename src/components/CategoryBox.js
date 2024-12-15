import React from "react";
import Btncomponent from "./Btncomponent";

function CategoryBox() {
  return (
    <div className="bg-blue-500 -rotate-3 rounded-xl hover:scale-105">
    <div className="w-64 h-60 rotate-3 border-2 bg-yellow-300 border-black content-center text-left p-2 leading-relaxed rounded-xl  transition-all">
      <h3 className="font-bold text-left p-4 ">
        Become a professional video editor
      </h3>
      <p className="text-right p-4">140 mentor available</p>
      <Btncomponent name={"Book now"} />
    </div>
    </div>
  );
}

export default CategoryBox;
