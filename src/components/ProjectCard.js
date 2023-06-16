import React, { useState } from "react";
import {  Link } from "react-router-dom";
import './ProjectCard.css';

const ProjectCard = (props)  => {


  return (
    <div className="container">
        <div className="project-container">

            <div className="project-card">
                <img className="project-img" src={props.img} />
                <h3 className="project-title">{props.title}</h3>
                <div className="project-details">
                    <p>{props.txt}</p>
                    <div className="project-btn">
                        <Link className="btn" to={props.code}>View Code</Link>
                    </div>

                </div>
            </div>
        </div>

    </div>
    

  );
}

export default ProjectCard;