import React, { useEffect, useState } from 'react'


function EffectHook() {
    const [count,setCount]=useState(0)
 
  return (
    <div className='ml-4'>
      <h1 className='text-4xl'>Effect {count}</h1>
      <button className='bg-gray-500 p-2' onClick={()=>setCount(count+1)}>Update Counter</button>
    </div>
  )
}

export default EffectHook
