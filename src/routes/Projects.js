
import React from 'react';
import Navbar from '../components/Navbar';
import BgImage2 from '../components/BgImage2';
import Footer from '../components/Footer';
import ProjectsList from '../components/ProjectsList';

function Projects() {
  return (

    <div>
        <Navbar/>
        <BgImage2 heading="PROJECTS" txt="Some of my projects are listed below"/>
        <ProjectsList/>
        <Footer/>
    </div>
    
  );
}

export default Projects;