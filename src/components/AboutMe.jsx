import React from 'react'
import { Link } from 'react-router-dom';

const AboutMe = ({ isAboutMe = false }) => {
  return (
    <section className="bg-grayish text-white py-20 mb-1">
      <div className="bg-grayish-light rounded-xl shadow-md p-6 max-w-2xl mx-auto mt-8">
        <h1 className="text-3xl text-white mb-4">About me!</h1>
        <p className="text-white mb-4"></p>
        <div className="text-white mb-4">
          <p>
            Hey, I'm George-a DevOps engineer and problem solver with over a decade in tech. I've spent years mastering
            C#, SQL, Git, and python. Currently I work as DevOps engineer providing support to multiple teams while 
            ensuring continous uptime and quick deployments in a multitude of servers that have been entrusted to my team. 
          </p>
          <p>
            I am chasing an AWS Solutions Architect Associate cert as I have taken an interest in Cloud Engineering and building
            scalable, future-proof solutions after working on them for so long. In my free time I also enjoy developing my own video games
            using the Unity Engine. Outside of the code, I like to stay active by participating in BJJ, riding my bicycle, or just relaxing
            playing video games.
          </p>
        </div>

      </div>
    </section>
  )
}

export default AboutMe