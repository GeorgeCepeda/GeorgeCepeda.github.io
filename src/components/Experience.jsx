import React from 'react';

const Experience = () => {
    return(
        <section className="bg-grayish text-white py-20 mb-1">
        <div className="bg-grayish-light rounded-xl shadow-md p-6 max-w-2xl mx-auto mt-8">
          <h1 className="text-3xl text-white mb-4">Experience</h1>
          <p className="text-white mb-4"></p>

          <h2 text-white mb-4>Infosys 2020 - Present </h2>
          <div className="text-white mb-4">
            <h3 className='text-white text-2xl'>Banking Platform Pre Prod Team | 2024 - Present </h3>
            <ul className='list-disc list-inside mt-2 space-y-2'>
                <li>Boosted Rasa-based chatbot efficiency by automating approvals, cutting workload and speeding operations. </li>
                <li>Fixed SQL failures from '||' delimiters, boosting data integrity and query performance.</li>
                <li>Enhanced database robustness by promoting safer SQL practices</li>
                <li>Managed patch deploymens and change requests- server reboots, security patches, RHEL upgrades, and service upgrades(Git, Python, Valgrind).</li>
                <li> Ensured pre-prod banking platform uptime with Jenkins and Git CI/CD, halving deployment times.</li>
                <li>Joined daily stand-ups and COE to align projects and squash issues.</li>
            </ul>
          </div>
          <div className="text-white mb-4">
            <h3 className='text-white text-2xl'>Uni Infrastructure Team | 2021 - 2024 </h3>
            <ul className='list-disc list-inside mt-2 space-y-2'>
                <li>Managed Kubernetes clusters and Helm chrts for UNI Finacle, optimzing performance and uptime.</li>
                <li>Leveraged Git for version control and python for scripting to streamline ops.</li>
                <li>Kept systems operational under pressure, providing robust documentation and onboarding for new teammates</li>
            </ul>
          </div>
  
        </div>
      </section>
    )
}

export default Experience