import React from 'react'

function Members(props) {
  return (
    <div className='text-center p-5'>
      <h1>User Component</h1>
      <button className='bg-gray-700 rounded-md p-1 mt-1' onClick={props.data}>Data Function</button>
    </div>
  )
}

export default Members