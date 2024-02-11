import React, { useState } from 'react'



function Form() {
    const [name,setName]=useState("");
    const [terms,setTerms]=useState(false);
    const [interest,setInsterest]=useState("");
    function getFormData(e)
    {
        console.warn(name,terms,interest);
        e.preventDefault()
    }
  return (
    <div className='flex justify-center bg-gray-500 p-16'>
        
      <form onSubmit={getFormData} className='p-2 bg-gray-400 rounded-lg'>
        <input type='text' placeholder='Enter Name' onChange={(e)=>setName(e.target.value)}/>
        <br/>
        <br/>
        <select placeholder='Enter Name' onChange={(e)=>setInsterest(e.target.value)}>
            <option>Select Option</option>
            <option>IT</option>
            <option>CS</option>
        </select>
        <br/> 
        <br/> 
        <input type='checkBox' placeholder='Enter Name' onChange={(e)=>setTerms(e.target.checked)}/><span>Accept Terms and Conditions</span>
        <br/>
        <br/>
        <button className='bg-gray-600 p-2 rounded-lg' type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form
