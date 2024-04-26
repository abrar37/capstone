import './header.css'
import React from 'react'
import NavMenu from './NavMenu'
import logo from '../../assets/Logo.svg'
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className='container'>
        <div className='header'>
          <Link to='/'>
            <img src={logo} alt='Little Lemon'/>
          </Link>

          <NavMenu />

          <Link to='/reservation'>
            <button>Reserve a Table</button>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header