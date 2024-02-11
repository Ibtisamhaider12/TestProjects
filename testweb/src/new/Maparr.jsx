import React from 'react'

function Maparr() {
    const students=[
        {name:'ibtisam', email:'abc@gmail.com', contact:[
            {name:'tsmeet', email:'def@gmail.com', contact:'456'},
            {name:'muqeet', email:'ghi@gmail.com', contact:'789'}
        ]},
        {name:'tsmeet', email:'def@gmail.com', contact:[
            {name:'tsmeet', email:'def@gmail.com', contact:'456'},
            {name:'muqeet', email:'ghi@gmail.com', contact:'789'}
        ]},
        {name:'muqeet', email:'ghi@gmail.com', contact:[
            {name:'tsmeet', email:'def@gmail.com', contact:'456'},
            {name:'muqeet', email:'ghi@gmail.com', contact:'789'}
        ]}
    ]
   
  return (
    <div className='bg-gray-500 text-center'>
        <table className='p-2 bg-gray-300 '>
        <tr >
            <td>Name</td>
            <td>Email</td>
            <td>Contct</td>
        </tr>
      {
        students.map((data, i) =>
        <tr className='' key={i}>
           <td className='p-3'>{data.name}</td>
            <td className='p-3'>{data.email}</td>
           <td>
            {
           students.contact.map((item)=>
                <tr>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.contact}</td>
                </tr>
           )}
            
           </td>
        </tr>
        )
      }
        </table>
    </div>
  )
}

export default Maparr
