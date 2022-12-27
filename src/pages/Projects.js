import React from 'react';
import ProjectItem from '../components/ProjectItem';
import { projectList } from '../helpers/ProjectList';


import "../styles/Project.css";
// {posts.map((post, index) => <Post details={post} key={index} />)}

function Projects() {
  return (
    <div className='projects'>
      <h1> My Personal Projects </h1>
      <div className='projectList'>
        {projectList.map((project, idx) => {
          return <ProjectItem
                    id={idx}
                    name={project.name}
                    image={project.image}
                    time={project.time}
                    skills={project.skills}
                  />;
        })}
      </div>
    </div>
  );
};

export default Projects;