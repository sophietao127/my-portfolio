import React from 'react';
import { useParams } from "react-router-dom";
import { projectList } from '../helpers/ProjectList';
import "../styles/ProjectDisplay.css"

function ProjectDisplay() {
  const { id } = useParams();
  const project = projectList[id]; // position of the project in the project list
  return (
    <div className='project'>
      <h1> {project.name} </h1>
      <img src={project.image} alt='project'/>
      <p><b>Skills:</b> {project.skills}</p>
    </div>
  )
}

export default ProjectDisplay;