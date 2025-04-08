import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100 dark:bg-gray-900 transition">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-semibold mb-8 text-indigo-600 dark:text-indigo-400 font-press">Let's Connect</h3>
        <p className="mb-4 font-sharetech">Feel free to reach out via any platform below 👇</p>
        <div className="flex justify-center gap-8 text-3xl">
          <a href="mailto:mrudraksh0604@gmail.com" className="hover:text-indigo-600"><FaEnvelope /></a>
          <a href="https://linkedin.com/in/ruex64" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600"><FaLinkedin /></a>
          <a href="https://github.com/ruex64" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600"><FaGithub /></a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
