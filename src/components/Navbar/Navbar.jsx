import React from 'react'
import './Navbar.css'
import Avatar from '../../img/avatar.png'
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {

    const linkStyle={
            margin: "0.5rem",
            textDecoration: "none",
            color: 'var(--black)'
    }
    const buttonStyle={
        margin: "0.5rem",
        textDecoration: "none",
        color: 'white'
    }
    
  return (
    <div className='n-wrapper'>
        <div className='n-left'>

            <img src={Avatar} className='n-img'>
            </img>
  
        </div>
    <div className='n-right'>
        <div className='n-list'>
            <ul style={{listStyleType:'none'}}>
                <li><Link to='#services' className='links' smooth style={linkStyle}>Services</Link></li>
                <li><Link to='#skills' smooth style={linkStyle}>Skills</Link></li>
                <li><Link to='#certificates' smooth style={linkStyle}>Certificates</Link></li>
                <li><Link to='#photography' smooth style={linkStyle}>Photography</Link></li>
                <li><Link to='#projects' smooth style={linkStyle}>Projects</Link></li>
                <li><a href='https://semicolonblog.netlify.app/' style={linkStyle} target='_blank' >Blog</a></li>
            </ul>
        </div>
       
            <Link to='#contact' className='n-button2' smooth style={buttonStyle}> <button className='button n-button'>Contact</button></Link>
        
    </div>
    </div>
  )
}

export default Navbar