import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-grayish text-white p-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Portfolio of George Cepeda. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer