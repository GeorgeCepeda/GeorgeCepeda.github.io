import React from 'react';
import { Link } from 'react-router-dom';
import ProjectsCard from './ProjectsCard';
import projectsData from '../assets/jsons/projects.json';

const Projects = ({isProjects = false}) => {
    const displayProjects = isProjects ? projectsData : projectsData.slice(0,3);

    return(
        <section className="bg-grayish px-4 py-10">
            <div className="container-xl kg:container m-auto">
                <h2 className="text-3xl font-bold text-white mb-6 text-center">
                    {isProjects ? 'All Projects' : 'Highlighted Projects'}
                </h2>
                <div className='grid grid-cols1 md:grid-cols-3 gap-6'>
                    {displayProjects.map((project, index) => (
                        <ProjectsCard project={project} index={index} />
                    ))}
                </div>
                {isProjects ? (
                    <></> ):(
                    <section className='flex flex-col items-center'>
                        <Link
                        to='/projects' 
                        className='text-4xl text-white bg-red-800 hover:bg-redish rounded-md px-3 py-2 mt-4'>
                        See my all my work!
                        </Link>
                    </section>
                )}
            </div>
        </section>
    )
}

export default Projects