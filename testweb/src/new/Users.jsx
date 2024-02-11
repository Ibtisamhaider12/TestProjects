import React from 'react'

function Users(props) {
  return (
    <div>
      <span className='p-3 text-center'>Name: {props.data.name}</span>
      <span className='p-4 text-center'>Email: {props.data.email}</span>
      <span className='p-5 text-center'>Contact: {props.data.contact}</span>
    </div>
  )
}

export default Users
