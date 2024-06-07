import React from 'react'
import {Link} from 'react-router-dom';

const AboutMe = ({isAboutMe = false}) => {
  return (
    <section className="bg-grayish text-white py-20 mb-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {isAboutMe ? (
        <section>
            <h1 className="text-5xl font-bold mb-4">About Me</h1>
            <p className="text-2xl mb-6">Hello there! My name is George Cepeda, I am a Software Developer based in Melrose Park Illinois.</p>
            <p className="text-2xl mb-6">Throughout my career, I've specialized in designing and building robust IT infrastructures that underpin software applications. From architecting scalable microservices to implementing continuous integration and delivery pipelines, I've leveraged a variety of tools and technologies to streamline development workflows and drive operational efficiency. </p>
            <p className="text-2xl mb-6">My expertise spans a wide range of technologies, including Kubernetes, Docker, Helm, and SQL. I've used these tools extensively to deploy and manage containerized applications, optimize database performance, and ensure the reliability and scalability of software systems. </p>
            <p className="text-2xl mb-6">In addition to infrastructure work, I'm proficient in backend development using SQL and Python. I enjoy designing and implementing efficient database schemas, writing complex queries, and building scalable backend services with Python frameworks like Django.</p>
            <p className="text-2xl mb-6">In 2019 I Graduated from the University of Illinois at Chicago, earning my Bachelor of Science in Computer Science.</p>
            <p className="text-2xl mb-6">Outside of work, I'm passionate about video games, I love programming my own games in C# using the Unity Engine. </p>
            <p className="text-2xl mb-6">I'm always eager to tackle new challenges and collaborate on exciting projects, so feel free to reach out if you'd like to connect or discuss potential opportunities!</p>
        </section>
        ):
        (
            <section className='flex flex-col items-center'>
                <p className="text-2xl mb-4">I am a passionate software developer dedicated to creating impactful solutions and pushing the boundaries of technology.</p>
                <Link
                    to='/about' 
                    className='text-white bg-red-800 hover:bg-redish rounded-md px-3 py-2 mt-4'>
                    Learn more about me
                </Link>
            </section>
        )}
      </div>
    </section>
  )
}

export default AboutMe