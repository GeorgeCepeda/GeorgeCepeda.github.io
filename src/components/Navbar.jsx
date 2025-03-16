import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    const linkClass = ({isActive}) => isActive ?
    'text-white bg-red-800 hover:bg-redish-light hover:text-white rounded-md px-3 py-2' : 
    'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2';
    return (
        <nav className="bg-grayish border-b border-grayish-light">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div
            className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
          >
            {/*<!-- Logo -->*/}
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <span className="hidden md:block text-white text-2xl font-bold ml-2"
                >My Portfolio </span
              >
            </NavLink>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink
                  to="/"
                  className={ linkClass }
                  >Home
                  </NavLink>
                <NavLink
                  to="/about"
                  className={ linkClass }
                  >About
                  </NavLink>
                <NavLink
                  to="/projects"
                  className={ linkClass }
                  >Projects
                  </NavLink>
                <NavLink
                  to="/skills"
                  className={ linkClass }
                  > Skills
                </NavLink>
                <NavLink
                  to="/experience"
                  className={ linkClass }
                >Experience
                </NavLink>
                <NavLink
                  to="/contact"
                  className={ linkClass }
                  >Contact
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    )
}

export default Navbar