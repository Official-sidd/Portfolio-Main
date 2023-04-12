import React from 'react'
import './Services.css'
import Humble from '../../img/humble.png'
import Heartemoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Card from '../Card/Card'
import Resume from './resume.pdf'
import { motion } from "framer-motion"

const Services = () => {
  const transition ={duration:1,type:'spring'}
  return (
    <div className='services' id='services'>
        <div className='s-title'>
            <span>My</span>
            <span>Services</span>
            <span>I can design UI for your website
            <br/> Build sites using React and various CSS frameworks<br></br>Help you with your photography needs </span>
          
            <a href={Resume} download="Siddharth Bhattacharjee">
            <button className='button s-button'>Download CV</button>
            </a>
            <div className='blur s-blur1' style={{background: "#ABF1FF94"}}></div>
        </div>
        <div className='s-cards'>
           <motion.div 
           initial={{left:'25%'}}
           whileInView={{left:'14rem'}}
           transition={{transition}}

           style={{left:'14rem'}}>
            <Card
                emoji={Heartemoji}
                heading = {"UI/UX"}
                detail = {"Figma,Adobe XD,Photoshop"}
           />
           </motion.div>
           <motion.div 
           initial={{left:'25%'}}
           whileInView={{top:'12rem',left:'-4rem'}}
           transition={{transition}}

             style={{top:'12rem',left:'-4rem'}}>
            <Card
                emoji={Glasses}
                heading = {"Web Development"}
                detail = {"Html CSS React-Js Vanilla-CSS Bootstrap Material UI"}
           />
           </motion.div>
           <motion.div 
           initial={{left:'25%'}}
           whileInView={{top:'19rem',left:'12rem'}}
           transition={{transition}}

             style={{top:'19rem',left:'12rem'}}>
            <Card
                emoji={Humble}
                heading = {"Photography"}
                detail = {"Semi Professional Mobile Photography"}
           />
           </motion.div>
          <div className='blur s-blur2' style={{background: "var(--purple)"}}></div>
        </div>
    </div>
  )
}

export default Services