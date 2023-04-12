import React from 'react'
import './Projects.css'
import ProjectCard from '../ProjectCard/ProjectCard'

const Projects = () => {
    
return (
  <div className='projects-area'>
  {/* <div className='blur' style={{background: '#ABF1FF94',position:'relative',left:'-20%'}}></div> */}
    <div className='proj-headers'>
      <span>Some Recent</span>
      <span>Projects</span>
    </div>

    <div className='proj-wrapper'>
    <ProjectCard image={'https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80'} title='Blog App' desc='This is a blog app created using React and Material UI' link='https://github.com/Official-sidd/Blog-App'></ProjectCard>
    <ProjectCard image={'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'} title='Portfolio Site' desc='A portfolio site in React and Vanilla CSS' link='https://github.com/Official-sidd/Portfolio-Site'></ProjectCard>
    <ProjectCard image={'https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'} title='Movie Search App' desc='A search application for movies using Js, Bootstrap and OMDB Api' link='https://github.com/Official-sidd/Moviefy'></ProjectCard>
  </div>

   
  </div>
)
}

export default Projects