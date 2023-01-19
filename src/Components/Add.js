import React from 'react'
import "../Style/Navbar.css"

const Add = ({openFormFunc, text}) => {
  return (
    <div className='btn-main'>
    <button alt="" srcset="" width={"50px"} onClick={openFormFunc}>{text}</button>
    </div>
  )
}

export default Add