import React from 'react';

const projects = [
    {
    title: 'DevBlogs',
    description: 'A simple yet powerful documentation and blog platform.',
    tech: 'React, TailwindCSS, Firebase',
    img: 'https://res.cloudinary.com/dp4aozqfy/image/upload/fl_preserve_transparency/v1744134302/devblogs_gaubai.jpg',
    live: 'https://ruex64-blogs.netlify.app/',
    code: 'https://github.com/ruex64/ruex64-blogs',
  },
  {
    title: 'Expensy Expense Tracker',
    description: 'Track your daily expenses with clean UI and full authentication.',
    tech: 'React, Firebase, CSS',
    img: 'https://res.cloudinary.com/dp4aozqfy/image/upload/fl_preserve_transparency/v1744134729/expensy_ozmxri.jpg',
    live: 'https://expensy-gamma.vercel.app/',
    code: 'https://github.com/ruex64/expensy',
  },
  {
    title: 'Recipie Search App',
    description: 'A very simple app to find your favourite food recipie.',
    tech: 'HTML, CSS, JS',
    img: 'https://res.cloudinary.com/dp4aozqfy/image/upload/fl_preserve_transparency/v1744134311/recipie_t4qvaz.jpg',
    live: 'https://ruex64.github.io/JsRecipieApp/',
    code: 'https://github.com/ruex64/JsRecipieApp',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-4 max-w-4xl mx-auto">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-semibold mb-8 text-indigo-600 dark:text-indigo-400 font-press">Projects</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition flex flex-col h-[420px]">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-40 object-cover rounded mb-4"
              />
              <div className="flex-grow">
                <h4 className="text-xl font-semibold mb-1 font-sharetech">{project.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-sharetech">{project.description}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-sharetech">Tech: {project.tech}</p>
              </div>
              <div className="mt-auto space-x-4">
                <a href={project.live} className="text-indigo-600 hover:underline font-sharetech">Live</a>
                <a href={project.code} className="text-indigo-600 hover:underline font-sharetech">Code</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
