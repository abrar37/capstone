import './footer.css'
import React from 'react'
import logo from '../../assets/Logo.svg'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
      <div className='dark-bg'>
        <div className='container'>
          <img src={logo} alt='little-lemon-logo' width="400px"/>

          <div className='footer-nav'>
            <h5>Doormat Navigation</h5>
            <ul>
              <li><Link to='/' >Home</Link></li>
              <li><Link to='about'>About</Link></li>
              <li><Link to='blogs'>Blogs</Link></li>
              <li><Link to='reservation'>Reservations</Link></li>
              <li><Link>Order Online</Link></li>
              <li><Link>Login</Link></li>
            </ul>
          </div>
          
          <div className='footer-nav'>
            <h5>Contact</h5>
            <ul>
              <li><Link>297/4 B Chicago</Link></li>
              <li><Link>+1 8922 3291 23</Link></li>
              <li><Link>info@littlelemon.com</Link></li>
            </ul>
          </div>
          
          <div className='footer-nav'>
            <h5>Social Media Links</h5>
            <ul>
              <li><Link>Facebok</Link></li>
              <li><Link>Instagram</Link></li>
              <li><Link>Linkedin</Link></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer