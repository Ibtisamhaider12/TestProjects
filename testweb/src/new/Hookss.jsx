import React, { useState } from 'react'


function Hookss() {
    const [name, setName]=useState("hei")

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={()=>setName("hey There")}>Click</button>
      <h1>{setName}</h1>
    </div>
  )
}

export default Hookss
