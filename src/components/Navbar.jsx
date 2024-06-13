import React, { useState } from "react";
import DarkMode from "./DarkMode";

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
            <a href="/" className="flex-shrink-0 flex items-center space-x-3 rtl:space-x-reverse">
              <img src="https://cdn3.iconfinder.com/data/icons/eco-tech/512/09_Green_Technology.png" className="h-12" alt="Logo" />
              <span className="self-center dark:text-white text-bold text-3xl font-semibold whitespace-nowrap mt-2">
                loopstudios
              </span>
            </a>

            {/* Centered Navbar items */}
            <div className="flex-1 flex justify-center items-center">
              <div className="hidden md:flex space-x-8 rtl:space-x-reverse">
                <a href="#" className="duration-300 text-gray-900 hover:text-black dark:text-white dark:hover:text-slate-400">
                  Home
                </a>
                <a href="#" className="duration-300 text-gray-900 hover:text-black dark:text-white dark:hover:text-slate-400">
                  About
                </a>
                <a href="#" className="duration-300 text-gray-900 hover:text-black dark:text-white dark:hover:text-slate-400">
                  Services
                </a>
                <a href="#" className="duration-300 text-gray-900 hover:text-black dark:text-white dark:hover:text-slate-400">
                  Pricing
                </a>
                <a href="#" className="duration-300 text-gray-900 hover:text-black dark:text-white dark:hover:text-slate-400">
                  Contact
                </a>
                <DarkMode />
              </div>
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
                xmlns="http://www.w3.org/2000/svg"
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
                  <a
                    href="#"
                    className="duration-300 block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black dark:text-white md:dark:hover:text-slate-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
             
                  <a
                    href="#"
                    className="duration-300 block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black dark:text-white md:dark:hover:text-slate-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="duration-300 block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black dark:text-white md:dark:hover:text-slate-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="duration-300 block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black dark:text-white md:dark:hover:text-slate-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="duration-300 block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black dark:text-white md:dark:hover:text-slate-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Contact
                  </a>
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
