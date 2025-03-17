import React from 'react';
import { Link } from 'react-router-dom';
import Skill from './Skill';
import skillsData from '../assets/jsons/skills.json';

const Skills = ({isSkills = false}) => {
    const displaySkills = isSkills ? skillsData : skillsData.slice(0,3);
    
    return (
        <section className="bg-grayish px-4 py-10">
            <div className="container-xl kg:container m-auto">
                <h2 className="text-3xl font-bold text-white mb-6 text-center">
                    {isSkills ? 'All Skills' : 'Highlighted Skills'}
                </h2>
                <div className='grid grid-cols1 md:grid-cols-3 gap-6'>
                    {displaySkills.map((skill) => (
                        <Skill skill={skill} />
                    ))}
                </div>
                {isSkills ? (
                    <></> ):(
                    <section className='flex flex-col items-center'>
                        <Link
                        to='/skills' 
                        className='text-4xl text-white bg-red-800 hover:bg-redish rounded-md px-3 py-2 mt-4'>
                        See my other skills
                        </Link>
                    </section>
                )}
            </div>
        </section>
    )
}

export default Skills