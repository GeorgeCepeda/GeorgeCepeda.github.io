import React from 'react'
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import {Link} from 'react-router-dom';

const UnderConstructionPage = () => {
  return (
    <section className='text-center flex flex-col justify-center items-center h-96'>
      <HiOutlineExclamationCircle className='text-yellow-400 text-6xl mb-4' />
      <h1 className='text-6xl font-bold mb-4'>Page Under Construction</h1>
      <p className='text-xl mb-5'>We're working hard to bring this page to you. Please check back later!</p>
      <Link
        to='/'
        className='text-white bg-red-800 hover:bg-redish rounded-md px-3 py-2 mt-4'
      >
        Go Back
      </Link>
    </section>
  )
}

export default UnderConstructionPage