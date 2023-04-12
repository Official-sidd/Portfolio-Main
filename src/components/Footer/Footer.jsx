import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png'
import Github from '../../Icons/github.svg'
import LinkedIn from '../../Icons/linkedin.svg'
import Instagram from '../../Icons/instagram.svg'
import Unsplash from '../../Icons/unsplash.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <img src={Wave} alt='' style={{width:'100%'}}></img>
        <div className='f-content'>
            <span>iamofficialid@gmail.com</span>
            <div className='f-icons'>
                {/* <Github></Github>
                <LinkedIn></LinkedIn>
                <Instagram></Instagram>
                <Unsplash></Unsplash> */}
            </div>
        </div>

    </div>
  )
}

export default Footer