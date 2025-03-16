import React from "react";
import { useParams } from 'react-router-dom';
import projects from '../assets/jsons/projects.json';
import Project from '../components/Project';

const ProjectPage = () => {
    return (
        <Project />
    )
}

export default ProjectPage