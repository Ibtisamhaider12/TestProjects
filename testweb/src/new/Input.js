import React, { useState } from 'react'
import '../App.css'

function Input() {
    const [data,setData]=useState();
    const [print,setPrint]=useState(false);


    function getData(val)
    {
        setData(val.target.value)
        setPrint(false)
    }
  return (
    <div style={{margin:'15rem'}}>
        {
            print ?
            <h1>{data}</h1>
            :null
        }
     
      <input type='text' onChange={getData}/>
      <button onClick={()=>setPrint(true)}>Get Value</button>
    </div>
  )
}

export default Input
