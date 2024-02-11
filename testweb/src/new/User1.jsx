import React, { useEffect, useState } from 'react'


function User1(props) {
    useEffect(()=>{
        alert("count is"+props.count)
        alert("data is"+props.data)
    },[props.data, props.count])
  return (
    <div className='Counter text-center'>
        <h1 className='font-bold text-2xl'>Count Props: {props.count}</h1>
        <h1 className='font-bold text-3xl mb-3'>Data Props: {props.data}</h1>
    </div>
  )
}

export default User1
