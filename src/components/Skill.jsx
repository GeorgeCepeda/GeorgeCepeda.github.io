import React from 'react'

const Skill = ({skill}) => {
  return (
    <div className='bg-grayish-light rounded-xl shadow-md relative'>
        <div className='p-4'>
            <div className='mb-6'>
                <div className='text-xl text-white my-2'>Skill Name: {skill.name}</div>
                <div className='text-xl text-white my-2'>Proficiency Level: {skill.proficiency}</div>
                <div className='text-xl text-white my-2'>Years Experience: {skill.years}</div>
            </div>
        </div>
    </div>
  )
}

export default Skill