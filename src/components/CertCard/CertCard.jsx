import React from 'react'
import './CertCard.css'

const CertCard = ({image,heading}) => {
  return (
<div className='cert-card'>
    <img className='cert-image' src={image} alt=''></img>
</div>
  )
}

export default CertCard