import React from 'react'
import "../Style/Navbar.css"

const Add = ({settoggleForm}) => {
  return (
    <div className='btn-main'>
    <button id='btn' onClick={()=>settoggleForm(true)}>Add New</button>
    </div>
  )
}

export default Add