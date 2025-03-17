import React from 'react';
import { useParams } from 'react-router-dom';
import ProjectData from '../assets/jsons/projects.json';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

const Project = () => {
    const { index } = useParams();
    const projectInfo = ProjectData[parseInt(index)];
    if (!projectInfo) {
        return (
            <section className='text-center flex flex-col justify-center items-center h-96'>
                <HiOutlineExclamationCircle className='text-yellow-400 text-6xl mb-4' />
                <h1 className='text-6xl font-bold mb-4'>Something went wrong</h1>
                <p className='text-xl mb-5'>Invalid project selected</p>
            </section>
        )
    }

    return (
        <div className="bg-grayish-light rounded-xl shadow-md p-6 max-w-2xl mx-auto mt-8">
            <h1 className="text-3xl text-white mb-4">{projectInfo.title}</h1>
            <p className="text-white mb-4">{projectInfo.description}</p>
            <div className="text-white mb-4">
                <strong>Status:</strong> {projectInfo.status}
            </div>
            <div className="text-white mb-4">
                <strong>Tech Used:</strong> {projectInfo.tech.join(', ')}
            </div>
            <div className="text-white mb-4">
                <strong>My Role:</strong> {projectInfo.role}
            </div>
            <div className="text-white mb-4">
                <strong>Duration:</strong> {projectInfo.duration}
            </div>
            {projectInfo.link && (
                <a href={projectInfo.link} className="text-blue-400 underline mr-4">
                    View Code
                </a>
            )}
            {projectInfo.demo && (
                <a href={projectInfo.demo} className="text-blue-400 underline">
                    Live Demo
                </a>
            )}

        </div>
    )
}

export default Project