import React from "react";

function InitiateBox({title,paragraph}) {
  return (
    <div className="content-center leading-relaxed bg-slate-50 border-2 px-4 w-64 h-52 rounded-lg">
      <h3 className="font-bold">{title}</h3>
      <p>
        {paragraph}
      </p>
    </div>
  );
}

export default InitiateBox;
