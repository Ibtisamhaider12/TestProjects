import React, { useState } from 'react'

function Validation() {
    const [user,setUser] = useState("");
    const [password,setPassword] = useState("");
    const [userErr,setUserErr]=useState(false);
    const [passErr,setPassErr]=useState(false);
    function loginHandle(e)
    {   
        if(user.length<4 || password.length<4)
        {
            alert("Must have more than 4 values")
        }
            else{
                alert("Welcome")
            }
        
        e.preventDefault()
    }
    function userHandler(e){
        let item=e.target.value;
        if(item.length<4)
        {
            setUserErr(true)
        }
        else{
            setUserErr(false)
        }
        setUser(item)
    }
    function passwordHandler(e){
        let item=e.target.value;
        if(item.length<4)
        {
            setPassErr(true)
        }
        else{
            setPassErr(false)
        }
        setPassword(item)
    }
  return (
    <div className='m-16 pl-10 p-5 bg-gray-400 rounded-md'>
      <h1 className='font-bold text-3xl text-blue-700'>Login</h1>
      <br/>
      <form onSubmit={loginHandle}>
      <input className='rounded-sm pl-1' type='text' placeholder='Enter UserName' onChange={userHandler}/>
      {userErr?<span>user not valid</span>:""}
      <br/> <br/>
      <input className='rounded-sm pl-1' type='password' placeholder='Enter Password' onChange={passwordHandler}/>
      {passErr?<span>Password not valid</span>:""}
      <br/> <br/>
      <button className='bg-slate-400 p-1 rounded mb-2' type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Validation;