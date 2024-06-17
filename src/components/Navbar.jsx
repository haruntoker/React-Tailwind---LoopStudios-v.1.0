import React, { useState } from "react";
import DarkMode from "./DarkMode";
import { Link } from 'react-router-dom';


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section id="section">
      <div className="bg-gray-200 border-gray-200 dark:bg-gray-900 shadow-xl flex items-center justify-center">
        <nav className="w-full">
          <div className="relative flex items-center justify-between max-w-screen-4xl text-2xl flex-wrap mx-auto p-6">
            {/* Logo Section */}
            <Link to="/" className="flex-shrink-0 flex items-center space-x-3 rtl:space-x-reverse">
              <img src="https://cdn3.iconfinder.com/data/icons/eco-tech/512/09_Green_Technology.png" className="h-12" alt="Logo" />
              <span className="hidden lg:flex self-center dark:text-white text-bold text-3xl font-semibold whitespace-nowrap mt-2">
                loopstudios
              </span>
            </Link>

            {/* Centered Navbar items */}
            <div className="flex-1 flex justify-center items-center">
              <div className="hidden group md:flex space-x-8 lg:space-x-16 rtl:space-x-reverse px-6">
                <Link to="/" className="duration-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 text-gray-900 hover:text-black dark:text-white dark:hover:text-slate-400">
                  Our Services
                </Link>
                
                <Link to="/team" className="duration-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 text-gray-900 hover:text-black dark:text-white dark:hover:text-slate-400">
                  Our Team
                </Link>

                <Link to="#" className="duration-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 text-gray-900 hover:text-black dark:text-white dark:hover:text-slate-400">
                  Careers
                </Link>
               
                <Link to="#" className="duration-300 text-slate-700 bg-gradient-to-r from-cyan-500 to-blue-500 dark:text-white dark:hover:text-slate-400 border rounded-xl px-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 border-blue-500">
                  Contact Us
                </Link>
              </div>
            </div>
                <div className="hidden md:flex">
                <DarkMode />
                </div>

            {/* Mobile Menu Button */}
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="#"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>

            {/* Mobile Menu */}
            <div className={`w-full md:hidden ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-default">
              <ul className="font-small flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-200 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-gray-200 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Link
                    to="#"
                    className="duration-300 block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black dark:text-white md:dark:hover:text-slate-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    aria-current="page"
                  >
                    Our Services
                  </Link>
                </li>
                <li>
             
                  <Link
                    to="#"
                    className="duration-300 block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black dark:text-white md:dark:hover:text-slate-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="duration-300 block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black dark:text-white md:dark:hover:text-slate-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="duration-300 block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black dark:text-white md:dark:hover:text-slate-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Contact Us
                  </Link>
                </li>
                <DarkMode />
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}
