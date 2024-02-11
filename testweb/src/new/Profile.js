import React, { useState } from 'react'


function Profile() {
    const [loggedIn, setLoggedIn]=useState(2)

//  1 2 3
  return (
    <div className='flex justify-center p-10'>
     {loggedIn==1?
     <h1>Welcome Ibtisam</h1> 
     :loggedIn==2?<h1>Welcome Guest 2</h1>
     :<h1>Welcome Guest 3</h1>}
    </div>
  )
}

export default Profile