import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import Me from '../../img/Me.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { motion } from "framer-motion"
import { HashLink as Link } from 'react-router-hash-link';

const Intro = () => {

    const transition ={duration:3,type:'spring'}

  return (
    <div className='intro'>
        <div className='i-left'>
            <div className='i-name'>
                <span>Hi! I Am</span>
                <span>Siddharth Bhattacharjee</span>
                <span>Frontend Developer, UI/UX Designer And Photographer</span>
            </div>
            {/* <Link to='#contact' smooth style={buttonStyle}><button className='button i-button'>Hire me</button></Link> */}
            <div className='i-icons'>
                <a href='https://github.com/Official-sidd' target='_blank'>
                <img src={Github} alt=''></img>
                </a>
                <a href='https://www.linkedin.com/in/siddharth-bhattacharjee-99b8a224a/' target='_blank'>
                <img src={LinkedIn} alt=''></img>
                </a>
                <a href='https://instagram.com/i_enigma__?igshid=YmMyMTA2M2Y=' target='_blank'>
                <img src={Instagram} alt=''></img>
                </a>
            </div>

        </div>
        <div className='i-right'>
            <img src={Vector1} alt=''></img>
            <img src={Vector2} alt=''></img>
            {/* <img src={potrait} alt=''></img> */}
            <img src={Me} alt=''></img>

            <motion.div           
            initial={{top:'-4%',left:'80%'}}
            whileInView={{left:'68%'}}
            transition={{transition}}
            style={{top:'-4%',left:'68%'}}
            className='float1'>

                <FloatingDiv image={Crown} txt1="Web" txt2="Developer"/>
            </motion.div>
            <motion.div           
            initial={{top:'18rem',left:'9rem'}}
            whileInView={{left:'0rem'}}
            transition={{transition}} 
            className='float1'
            style={{top:'18rem',left:'-2rem'}}>
                
                <FloatingDiv image={thumbup} txt1='UI/UX' txt2='Designer'/>
            </motion.div>
            {/* blurdiv */}
            <div className='blur' style={{backgroundColor: "rgb(238 210 255)"}}></div>
            <div className='blur' style={{background:'#C1F5FF',top:'17rem',width:'21rem',height:'11rem',left:'-9rem'}}></div>
        </div>
    </div>
  )
}

export default Intro