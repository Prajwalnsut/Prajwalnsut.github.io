import React from "react";
import ProjectData from './ProjectData';
import ProjectCard from "./ProjectCard";
import './ProjectCard.css';

const ProjectsList = ()  => {


  return (
    <div className="container">
        <div className="project-container">
            {ProjectData.map((val,idx) => {
                return (
                    <ProjectCard
                    key={idx}
                    img={val.img}
                    title={val.title}
                    txt={val.txt}
                    code={val.code}
                    />
                )
            })}
        </div>

    </div>
    

  );
}

export default ProjectsList;