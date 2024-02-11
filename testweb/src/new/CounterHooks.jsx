import React, { useEffect, useState } from 'react'
import User1 from './User1'


function CounterHooks(props) {
    const [data,setData]=useState(1);
    const [count,setCount]=useState(10);
  return (
    <div className='Counter text-center'>
        <h1 className='font-bold text-2xl'>Count: {count}</h1>
        <h1 className='font-bold text-3xl mb-3'>Data: {data}</h1>
        <User1 count={count} data={data}/>
        <button className='bg-gray-500 rounded-md p-1 mr-1' onClick={()=>setCount(count+10)}>Update Count</button>
        <button className='bg-gray-500 rounded-md p-1' onClick={()=>setData(data+1)}>Update Data</button>
    </div>
  )
}

export default CounterHooks
