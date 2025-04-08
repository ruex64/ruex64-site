import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center py-6 text-sm bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 font-sharetech">
      © {new Date().getFullYear()} Rudraksh Mahajan. Made with 💙 in India.
    </footer>
  );
};

export default Footer;
