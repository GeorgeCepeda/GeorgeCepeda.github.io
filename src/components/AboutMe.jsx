import React from 'react'
import { Link } from 'react-router-dom';

const AboutMe = ({ isAboutMe = false }) => {
  if (isAboutMe) {
    return (
      <section className="bg-grayish text-white py-20 mb-1">
        <div className="bg-grayish-light rounded-xl shadow-md p-6 max-w-2xl mx-auto mt-8">
          <h1 className="text-center text-4xl text-white mb-4 underline"><strong>About me!</strong></h1>
          <p className="text-white mb-4"></p>
          <div className="text-3xl text-white mb-4">
            <p>
              Hey, I’m George—a DevOps engineer and problem solver with over a decade in tech. I’ve spent years mastering C#, SQL,
              Git, and Python, building a rock-solid foundation. Right now, I’m at Infosys, where I’ve been a DevOps Engineer since
              2020, supporting multiple teams with Kubernetes clusters, CI/CD pipelines, and lightning-fast deployments. From
              optimizing UNI Finacle’s infrastructure to cutting Discover Financial Services’ banking platform deploy times by 50%,
              I keep a slew of servers humming under pressure with my team.
            </p>
            <p>
              I’m chasing an AWS Solutions Architect Associate cert, hooked on cloud engineering after years of wrangling scalable
              systems. I love building future-proof solutions—whether it’s automating Rasa chatbots or boosting SQL robustness for
              pre-prod uptime. In my free time, I flex my creative side crafting video games with Unity, a passion I’ve nurtured for
              over six years. Outside code, I stay active with BJJ, hit the road on my bicycle, or unwind with a controller in hand.
            </p>
          </div>

        </div>
      </section>
    )
  }

  return (
    <section className="bg-grayish text-white py-20 mb-1">
      <h1 className="text-center text-3xl text-white mb-4 underline">About me!</h1>
      <div className="bg-grayish-light rounded-xl shadow-md p-6 max-w-2xl mx-auto mt-8">
        <p className="text-white mb-4"></p>
        <div className="text-2xl text-white mb-4">
          <p>
            I am a DevOps Engineer who's been in tech for over five years, programming even longer. I've been a part
            of Infosys since 2020, where I've tackled Kubernetes and CI/CD for multiple clients. Right now I've been
            working towards an AWS Solutions Architect Associate cert to master cloud architecture, while moonlighting with
            Unity to fuel my passion for Game Dev. Whether its automation, databases, or building this React portfolio, I am always
            ready to take on new challeges and learn new technologies.
          </p>
        </div>
      </div>
    </section>
  )

}

export default AboutMe