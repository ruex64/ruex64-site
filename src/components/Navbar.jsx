import React from 'react';

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md py-4">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-xl font-bold font-press text-indigo-600 dark:text-indigo-400">Ruex64.dev</h1>
        <div className="flex items-center gap-6">
          <nav className="space-x-4">
            <a href="#about" className="hover:text-indigo-600 font-sharetech">About</a>
            <a href="#skills" className="hover:text-indigo-600 font-sharetech">Skills</a>
            <a href="#projects" className="hover:text-indigo-600 font-sharetech">Projects</a>
            <a href="#certificates" className="hover:text-indigo-600 font-sharetech">Certificates</a>
            <a href="#contact" className="hover:text-indigo-600 font-sharetech">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
