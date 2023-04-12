import React from 'react'
import './Certificates.css'
import certificate1 from '../../cert-img/c1.png'
import certificate2 from '../../cert-img/c2.png'
import certificate3 from '../../cert-img/c3.png'
import CertCard from '../CertCard/CertCard'
import { motion } from "framer-motion"

const Certificates = () => {
  return (
    <div className='c-wrapper' id='certificates'>
         <motion.div 
         initial={{rotate:20}}
         whileInView={{rotate:0}}
         viewport={'-40px'}
         transition={{duration:2,type:'spring'}} className='c-cards'>
          
           <CertCard image={certificate1} ></CertCard>
           
           <CertCard image={certificate2} ></CertCard>
           
           <CertCard image={certificate3} ></CertCard>
        </motion.div>
        <div className='blur s-blur1' style={{background: 'var(--purple)',position:'relative',top:'70%',left:'56%'}}></div>

        <div className='c-heading'>
            <span>Certificates From</span>
            <span>LinkedIn</span>
            <span>Some certificates acquired by completing courses <br/>from the LinkedIn learning portal</span>
            <a className='btn' href='https://www.linkedin.com/in/siddharth-bhattacharjee-99b8a224a/details/certifications/' target='_blank'>
            <button className='button ce-button'>View More</button></a>
        </div>
       
    </div>
  ) 
}

export default Certificates