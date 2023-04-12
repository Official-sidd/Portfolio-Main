import React from 'react'
import './ProjectCard.css'

const ProjectCard = ({image,title,desc,link}) => {
  const cardStyle={
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    // height: '200px',
    color:"white",
    padding:"1rem",
  }
  return (
    <>
    <div className='proj-card' >
        <div className='proj-body' style={cardStyle} >
        {/* <img className='proj-image' src={image}/> */}
        <h2 className='proj-title'>{title}</h2>
        <p className='proj-desc'>{desc}</p>
        <a href={link} className='proj-button' target='_blank'>
        <button className='button'>View</button></a>
        </div>
    </div>
    </>
  )
}

export default ProjectCard