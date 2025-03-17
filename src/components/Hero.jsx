import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="bg-grayish text-white py-20 mb-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center">
        <p className="text-3xl font-bold mb-4">Hello, thanks for visting, I'm</p>
        <h1 className="text-7xl font-bold mb-4 underline"><strong>George Cepeda</strong></h1>
        <h3 className="text-5xl font-bold mb-4">Dev Ops Engineer | Full Stack Developer | Game Developer</h3>
        {/*<h1 className="text-5xl font-bold mb-4">Welcome! My name is George Cepeda </h1>*}
        {/*<h1 className="text-5xl font-bold mb-4">My name is George Cepeda</h1>*/}
        <Link
          to='/contact' 
          className='text-4xl text-white bg-red-800 hover:bg-redish rounded-md px-3 py-2 mt-4'>
          Contact Me
        </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero