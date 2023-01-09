import React from 'react';
import { useParams } from "react-router-dom";
import { projectList } from '../helpers/ProjectList';


// Import styles
import "../styles/ProjectDisplay.css"
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

function ProjectDisplay() {
  const { id } = useParams();
  const project = projectList[id]; // position of the project in the project list

  return (
    <div className='project'>
      <h1> {project.name} </h1>
      <h2> Introduction </h2>
      {project.report !== null &&
        <h2><a href={project.report} target="_blank" rel="noreferrer">Project Report</a></h2>
      }
      {project.video !== null &&
        <iframe width="660" height="480" src={project.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      }
      <p><b>Skills:</b> {project.skills}</p>
      {project.ppt !== null &&
        <iframe src={project.ppt} frameborder="0" width="950" height="570" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" title={project.name}></iframe>
      }

    </div>
  )
}

export default ProjectDisplay;