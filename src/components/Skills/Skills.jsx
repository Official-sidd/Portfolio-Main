import React from 'react'
import './Skills.css'
import Html from '../../img/html.png'
import Css from '../../img/css.png'
import Js from '../../img/js.png'
import react from '../../img/react.png'
import Figma from '../../img/figma.png'


const Skills = () => {
  return (
    <div className='skills'>
        <div className='s-title'>
            <span>My</span>
            <span>Skills</span>
            <span>I am familiar with HTML CSS Js React Bootstrap 
            <br/> Material-UI and also designing UI pages on Figma.</span>

            <button className='button s-button'>Hire  Me</button>

            <div className='blur s-blur1' style={{background: "#ABF1FF94"}}></div>
            
        </div>
        <div className='w-right'>
           <div className='mainCircle'>
                <div className='secCircle'>
                <img src={Html} alt='' height='100px'></img> 
                </div>
                <div className='secCircle' >
                <img src={Css} alt='' height='100px'></img> 
                </div>
                <div className='secCircle' >
                <img src={Js} alt='' height='100px'></img> 
                </div>
                <div className='secCircle'>
                <img src={react} alt='' height='100px'></img> 
                </div>
                <div className='secCircle'>
                <img src={Figma} alt='' height='100px'></img> 
                </div>
           </div> 
           <div className='w-backCircle blueCircle'></div>
           <div className='w-backCircle yellowCircle'></div>
        </div>
    </div>
  )
}

export default Skills