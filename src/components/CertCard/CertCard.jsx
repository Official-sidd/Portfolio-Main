import React from 'react'
import './CertCard.css'

const CertCard = ({image,heading}) => {
  const transition ={duration:3,type:'spring'}

  return (
      <div           
            className='cert-card'>
    <img className='cert-image' src={image} alt=''></img>
      </div>
  )
}

export default CertCard