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
      <p><b>Skills:</b> {project.skills}</p>
      <p> {project.introduction} </p>
      {project.report !== null &&
        <h2>Project Document Link: <a href={project.report} target="_blank" rel="noreferrer">Project Report</a></h2>
      }
      <p>Project Poster</p>
      {project.posterPPT !== null &&
        <iframe src={project.posterPPT} frameborder="0" width="950" height="570" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" title={project.name}></iframe>
      }
      {project.posterPDF !== null &&
        <embed src={project.posterPDF} width="920px" height="1200px" />
      }
      <p>Demo Video</p>
      {project.video !== null &&
        <iframe width="660" height="480" src={project.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      }
    </div>
  )
}

export default ProjectDisplay;