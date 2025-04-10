import React from 'react';

const certificates = [
  {
    title: 'Meta Front-End Developer',
    date: 'Apr 2025',
    img: 'https://res.cloudinary.com/dp4aozqfy/image/upload/fl_preserve_transparency/v1744302603/Meta_Frontend_WebDevloper_lkyjfy.jpg',
  },
  {
    title: 'Google UX Certificate',
    date: 'Aug 2024',
    img: 'https://res.cloudinary.com/dp4aozqfy/image/upload/fl_preserve_transparency/v1744133918/Google_Ux_certificate_hpwzdz.jpg',
  },
  {
    title: 'IBM Git-Github Certificate',
    date: 'Feb 2025',
    img: 'https://res.cloudinary.com/dp4aozqfy/image/upload/fl_preserve_transparency/v1744133917/IBM_Git-Github_Certificate_xbojhq.jpg',
  },

];

const Certificates = () => {
  return (
    <section id="certificates" className="py-16 px-4 max-w-4xl mx-auto">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-3xl font-semibold mb-10 text-indigo-600 dark:text-indigo-400 font-press">Certificates</h3>
        <div className="grid  sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certificates.map((cert, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <img src={cert.img} alt={cert.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="text-lg font-semibold mb-1 font-sharetech">{cert.title}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-sharetech">{cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
