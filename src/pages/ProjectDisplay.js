import React from 'react';
import { useParams } from "react-router-dom";
import { projectList } from '../helpers/ProjectList';
import { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

// Import styles
import "../styles/ProjectDisplay.css"
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

function ProjectDisplay() {
  const { id } = useParams();
  const project = projectList[id]; // position of the project in the project list

  // show report
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToPrevPage = () =>
    setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

  const goToNextPage = () =>
    setPageNumber(
      pageNumber + 1 >= numPages ? numPages : pageNumber + 1,
    );

  // display report
  // console.log(project.report);
  if (project.report !== null) {
    return (
      <div className='project'>
        <h1> {project.name} </h1>
        <h2> Introduction </h2>
        <p><b>Skills:</b> {project.skills}</p>
        {/* <PdfReview filename={project.report}/> */}
        <div className='pdf'>
          <nav>
            <p>
              Project Report: page {pageNumber} of {numPages}
            </p>
            <button onClick={goToPrevPage}>Prev</button>
            <button onClick={goToNextPage}>Next</button>
          </nav>

          <Document
            file={project.report}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </Document>
        </div>
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