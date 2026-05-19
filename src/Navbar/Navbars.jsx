import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbars() {

  return (
    <div className="navbar">
      <nav style={{display : 'flex', gap : '90px'}}>
      <Link to= '/'>Home</Link>
      <Link to= '/user/:username'>Profile</Link>
      <Link to= '/user/:username/repos'>Repositories</Link>
      </nav>
    </div>
    
  )
}

export default Navbars
