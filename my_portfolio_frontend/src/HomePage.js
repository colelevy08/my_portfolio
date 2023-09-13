import React from 'react';
import './index.css'; // Importing Tailwind CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faCode, faGlobe } from '@fortawesome/free-solid-svg-icons';


const HomePage = () => {
  return (
    <div className="m-4">
      <h2 className="text-xl font-bold flex items-center">
        <FontAwesomeIcon icon={faUser} className="mr-2" />
        About Me
      </h2>
      <p className="text-base">
        Software developer with experience in developing and designing web applications using HTML, CSS, JavaScript, React, Node.js, Python, Flask, SQL, and more. Adept at developing and deploying complex full stack systems, web services, and databases.
      </p>
      <h3 className="text-lg font-semibold flex items-center">
        <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
        Contact
      </h3>
      <ul className="list-disc pl-5">
        <li className="text-base">
          Send me an email: <a className="text-blue-500" href="mailto:colelevy08@gmail.com">colelevy08@gmail.com</a>
        </li>
        <li className="text-base">
          <a className="text-blue-500 flex items-center" href="https://github.com/colelevy08" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faCode} className="mr-2" />
            GitHub
          </a>
        </li>
        <li className="text-base">
          <a className="text-blue-500 flex items-center" href="https://www.linkedin.com/in/colelevy" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGlobe} className="mr-2" />
            LinkedIn
          </a>
        </li>
        <li className="text-base">
          <a className="text-blue-500 flex items-center" href="https://dev.to/colelevy" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGlobe} className="mr-2" />
            DEV Blog Posts
          </a>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
