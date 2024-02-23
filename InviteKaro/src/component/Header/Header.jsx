import React, { useState } from 'react'
import "./Header.css"
import { NavLink } from 'react-router-dom'
import { LuMenuSquare } from "react-icons/lu";

function Header() {
  const [open , setOpen] = useState(false)
  console.log(open);
  return (
    <div className='nav'>
      <div className='left'><div>InviteKaro</div>
      <div className='toggle' onClick={()=>setOpen(!open)}><LuMenuSquare /></div>
      </div>
      
      <div className='mid'>
      <ul className={open ? "open" : ""}>
  <li><NavLink exact to={'/'} >Home</NavLink></li>
  <li><NavLink to={'/wedding'}>Wdding</NavLink></li>
  <li><NavLink to={'/birthday'}> Birthday</NavLink></li>
  <li><NavLink to={'/reception'}>Reception</NavLink></li>
</ul>
        </div>
      <div className='right'>
        <ul className={open ? "open" : ""}>
          <li><NavLink to={'/all'}>More</NavLink></li>
        </ul>
      </div>
    </div>
  )
}

export default Header