import React from 'react';

const Hero = () => {
  return (
    
    <section id="hero" className="py-20 text-center bg-indigo-50 dark:bg-gray-800 transition-all">
      <h2 className="text-4xl font-press font-bold mb-4">Hey, I'm Rudraksh👋🏻</h2>
      <p className="text-xl mb-6 max-w-2xl mx-auto font-sharetech">
        A passionate Full Stack Developer building web apps with React, Node.js, and MongoDB.
      </p>
      <div className="mt-6">
  <a
    href="#contact"
    className="bg-indigo-600 font-sharetech text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition"
  >
    Let's Connect
  </a>
  <a
    href="https://drive.google.com/file/d/1yDNaIkOcS3cg6ia3vcgZZD6g1eGxhmnT/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-gray-200 font-sharetech dark:bg-gray-700 text-indigo-600 dark:text-indigo-300 px-6 py-2 rounded-full ml-4 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
  >
    Download CV
  </a>
</div>
    </section>
  );
};

export default Hero;
