import React from 'react'

function NAVBAR() {
  return (
    <>
      
 <header className="bg-indigo-600 text-white sticky top-0 z-50 shadow-md">
  <div className="container mx-auto px-4 py-3 flex justify-between items-center">
    <a href="#" className="text-xl font-semibold">FYP Supervisor Portal</a>
    <nav className="hidden md:block">
      <ul className="flex space-x-6">
        <li><a href="#" className="hover:text-indigo-200 transition duration-300">Dashboard</a></li>
        <li><a href="#" className="hover:text-indigo-200 transition duration-300">Projects</a></li>
        <li><a href="#" className="hover:text-indigo-200 transition duration-300">Students</a></li>
        <li><a href="#" className="hover:text-indigo-200 transition duration-300">Meetings</a></li>
        <li><a href="#" className="hover:text-indigo-200 transition duration-300">Settings</a></li>
      </ul>
    </nav>
    <div className="flex items-center space-x-4">
      <a href="#" className="hover:text-indigo-200 transition duration-300 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        <span className="hidden md:inline ml-1">Account</span>
      </a>
      <button id="mobile-menu-button" className="md:hidden text-white focus:outline-none" aria-label="Toggle Mobile Menu">
        <svg id="menu-icon" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg id="close-icon" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </div>
  <div id="mobile-menu" className="hidden bg-indigo-700">
    <div className="px-2 pt-2 pb-3 sm:px-3">
      <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-indigo-600 transition duration-300">Dashboard</a>
      <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-indigo-600 transition duration-300">Projects</a>
      <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-indigo-600 transition duration-300">Students</a>
      <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-indigo-600 transition duration-300">Meetings</a>
      <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-indigo-600 transition duration-300">Settings</a>
    </div>
  </div>
</header>




    </>
  )
}

export default NAVBAR
