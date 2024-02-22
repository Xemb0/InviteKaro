import React from 'react'
import "./Header.css"
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='nav'>
      <div className='left'>InviteKaro</div>
      <div className='mid'>
      <ul>
  <li><NavLink exact to={'/'} >Home</NavLink></li>
  <li><NavLink to={'/wedding'}>Wdding</NavLink></li>
  <li><NavLink to={'/birthday'}> Birthday</NavLink></li>
  <li><NavLink to={'/reception'}>Reception</NavLink></li>
</ul>
        </div>
      <div className='right'>more</div>
    </div>
  )
}

export default Header