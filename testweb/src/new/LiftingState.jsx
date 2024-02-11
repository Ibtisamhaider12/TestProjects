import React from 'react'

function LiftingState(props) {

    const data=[
        {name:'ibtisam'},
        {email: 'ibt@test.com'}
    ]

  return (
    <div className='p-4'>
    <h2>User Name </h2>
    <button className='bg-gray-400 rounded-md' onClick={()=>props.alert(data)}>Click Here</button>
    </div>
  )
}

export default LiftingState;
