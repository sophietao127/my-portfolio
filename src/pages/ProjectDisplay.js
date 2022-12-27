import React from 'react';
import { useParams } from "react-router-dom";
import { projectList } from '../helpers/ProjectList';
import PdfReview from '../components/PdfReview';

// Import styles
import "../styles/ProjectDisplay.css"
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

function ProjectDisplay() {
  const { id } = useParams();
  const project = projectList[id]; // position of the project in the project list

  // display report
  if (project.report !== null) {
    return (
      <div className='project'>
        <h1> {project.name} </h1>
        <h2> Introduction </h2>
        <p><b>Skills:</b> {project.skills}</p>
        <PdfReview filename={project.report}/>
      </div>
    )
  } else {
    return (
      <div className='project'>
        <h1> {project.name} </h1>
        <h2> Introduction </h2>
        {/* <img src={project.image} alt='project'/> */}
        <p><b>Skills:</b> {project.skills}</p>
      </div>
    )
  }
}

export default ProjectDisplay;