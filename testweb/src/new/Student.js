import React from 'react'

function Student(props) {
  return (
    <div style={{backgroundColor:'green'}}>
      <h1 style={{color:"yellow"}}>Name: {props.name}</h1>
      {/* <h1>Email: {props.email}</h1>
      <h2>Adress: {props.others.adress}</h2>
      <h2>Number: {props.others.mobile}</h2> */}
    </div>
  )
}

export default Student
