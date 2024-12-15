import React from 'react'


function Btncomponent({name}) {
  return (
      <button className={ ` ${name === "Find a mentor" ? "actionbtn" : name==="All"?"All":"btn" } bg-slate-100 min-w-20 my-6 px-4 py-2 mr-10 rounded-full`}>
        {name}  
      </button>
  )
}

export default Btncomponent
