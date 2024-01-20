import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.scss"

function Header() {
  return (
    <div className='header__all' >
        <img src="https://preview.colorlib.com/theme/startup2/img/logo.png.webp" alt="" />
      <div className='links'>
      <Link  style={{"color":"white", fontSize:"25px", textDecoration:"none"}} to="/">Home</Link>
        <Link  style={{"color":"white", fontSize:"25px", textDecoration:"none"}} to="/Add">Add</Link>
        <Link  style={{"color":"white", fontSize:"25px", textDecoration:"none"}} to="/Wishlist">Wishlist</Link>
      </div>
      
    </div>
  )
}

export default Header
