import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProjectItem({ image, name, id, time, skills }) {
  const navigate = useNavigate()
  return (
    <div className='each'>
      <h2> {time} Project </h2>
      <section className='projectItem' onClick={() => {navigate("/projects/" + id);}}>
        <div style={{backgroundImage: `url(${image})`}} className="bgImage" />
        <h1> {name} </h1>
        <p><b>Skills: </b>{skills} </p>
      </section>
    </div>
  )
}

export default ProjectItem;