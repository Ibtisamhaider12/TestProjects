import React from 'react'
import Users from './Users'


function LoopComponents() {
    const users =[
        {
            name: 'Zain', email: 'zain@test.com', contact: '111'
        },
        {
            name: 'Asad', email: 'asad@test.com', contact: '222'
        },
        {
            name: 'Ali', email: 'Ali@test.com', contact: '333'
        },
        {
            name: 'Hassan', email: 'Hassan@test.com', contact: '444'
        },
        {
            name: 'Salman', email: 'Salman@test.com', contact: '555'
        },
    ]
  return (
    <div>
      {
        users.map((item,i)=>
        <Users data={item}/>
        )
      }
    </div>
  )
}

export default LoopComponents
