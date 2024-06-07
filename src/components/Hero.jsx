import React from 'react'

const Hero = () => {
  return (
    <section className="bg-grayish text-white h-screen flex flex-col justify-center items-center text-center">
      <div className="max-w-xl">
        <h1 className="text-5xl font-bold mb-4">Hello, my name is George Cepeda</h1>
        <p className="text-2xl mb-6">A Software Engineer & Web Developer</p>
        <p className="mb-8">
          Welcome to my portfolio. I specialize in creating interactive and responsive web applications. Check out my projects below and feel free to get in touch!
        </p>
        <div>
          <button className="bg-accent hover:bg-accent-dark text-white font-bold py-2 px-4 rounded mr-4">
            View Portfolio
          </button>
          <button className="bg-accent hover:bg-accent-dark text-white font-bold py-2 px-4 rounded">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero