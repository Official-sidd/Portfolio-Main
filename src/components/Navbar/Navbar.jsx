import React from 'react'
import './Navbar.css'
import Avatar from '../../img/avatar.png'

const Navbar = () => {
  return (
    <div className='n-wrapper'>
        <div className='n-left'>
            <div className='n-name'>Siddharth</div>
        </div>
    <div className='n-right'>
        <div className='n-list'>
            <ul style={{listStyleType:'none'}}>
                <li>Home</li>
                <li>Services</li>
                <li>Skills</li>
                <li>Certificates</li>
                <li>Photography</li>
                <li>Projects</li>
            </ul>
        </div>
        <button className='button n-button'>
            Contact
        </button>
    </div>
    </div>
  )
}

export default Navbar