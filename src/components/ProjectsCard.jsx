import React from 'react'
import { Link } from 'react-router-dom';

const ProjectsCard = ({project, index}) => {
    return (
        <div className='bg-grayish-light rounded-xl shadow-md relative'>
            <div className='p-4'>
                <div className='text-xl text-white my-2'> Project Title: {project.title} </div>
                <div className='text-xl text-white my-2'> Status: {project.status}</div>
                <div className='text-xl text-white my-2'> Tech Used: 
                    {project.tech.join(', ')}
                </div>
                <Link
                to={`/project/${index}`}
                className='text-white bg-red-800 hover:bg-redish rounded-md px-3 py-2 mt-4'>
                See More
                </Link>
            </div>
        </div>
    )
}

export default ProjectsCard