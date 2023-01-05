import React from 'react'
import "../Style/Navbar.css"

const Add = ({settoggleForm}) => {
  return (
    <div className='btn-main'>
    <img src={require("../Assets/117885.png")}  alt="" srcset="" width={"50px"} onClick={()=>settoggleForm(true)}/>
    </div>
  )
}

export default Add