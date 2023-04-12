import React from 'react'
import './ProjectCard.css'

const ProjectCard = ({image,title,desc,link}) => {
  return (
    <>
    <div className='proj-card'>
        <div className='card-body'>
        <img className='proj-image' src={image}/>
        <h2 className='proj-title'>{title}</h2>
        <p className='proj-desc'>{desc}</p>
        </div>
        {/* helllo */}
        <a href={link} className='proj-button' target='_blank'>
      <button className='button '>View Code</button></a>
    </div>
    </>
  )
}

export default ProjectCard