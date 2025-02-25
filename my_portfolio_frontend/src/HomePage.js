// Importing required modules and styles
import React from 'react';
import './index.css'; // Importing Tailwind CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faCode, faGlobe, faBookmark, faStar } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons'; // Importing regular comment icon


// HomePage component definition
const my_portfolio = () => {
  return (
    <div className="m-4">
      {/* About Me Section */}
      <div className="bg-white p-4 rounded-md shadow-md mb-4">
        <h2 className="text-xl font-bold flex items-center">
          <FontAwesomeIcon icon={faUser} className="mr-2 text-blue-500" />
          About Me
        </h2>
        <p className="text-base mt-2">
          Communication professional with a Bachelor’s Degree in Communication from SUNY Geneseo, combining strong media literacy, interpersonal skills, and business communication with technical expertise. Experienced in customer support, technical troubleshooting, and organizational management. Skilled Software Developer with a background in designing and developing web applications using HTML, CSS, JavaScript, React, Node.js, Python, Flask, SQL, and more. Adept at full-stack development, web services, and database management, with a proven ability to bridge the gap between technology and effective communication to drive successful project outcomes.
        </p>
      </div>

      {/* Contact Section */}
      <div className="bg-white p-4 rounded-md shadow-md mb-4">
        <h3 className="text-lg font-semibold flex items-center">
          <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-blue-500" />
          Contact
        </h3>
        <ul className="list-none pl-5 mt-2">
          {/* Email */}
          <li className="text-base mb-2">
            Send me an email: <a className="text-blue-500" href="mailto:colelevy08@gmail.com">colelevy08@gmail.com</a>
          </li>
          {/* GitHub */}
          <li className="text-base mb-2">
            <a className="text-blue-500 flex items-center" href="https://github.com/colelevy08" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faCode} className="mr-2 text-blue-500" />
              GitHub
            </a>
          </li>
          {/* LinkedIn */}
          <li className="text-base mb-2">
            <a className="text-blue-500 flex items-center" href="https://www.linkedin.com/in/colelevy" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGlobe} className="mr-2 text-blue-500" />
              LinkedIn
            </a>
          </li>
          {/* DEV Blog Posts */}
          <li className="text-base mb-2 flex items-center">
            <a className="text-blue-500 flex items-center" href="https://dev.to/colelevy" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faComment} className="mr-2 text-blue-500" />
              DEV Blog Posts
            </a>
          </li>
        </ul>
      </div>

      {/* Pinned Repositories Section */}
      <div className="bg-white p-4 rounded-md shadow-md">
        <h3 className="text-lg font-semibold flex items-center mt-4">
          <FontAwesomeIcon icon={faBookmark} className="mr-2 text-blue-500" />
          Top Projects on GitHub
        </h3>
        <ul className="list-none pl-5 mt-2">
          {[
            { name: 'Solo Project - My Portfolio', url: 'https://github.com/colelevy08/my_portfolio' },
            { name: 'Flatiron School Phase 5 Solo Project - EchoEcho', url: 'https://github.com/colelevy08/EchoEcho' },
            { name: 'Flatiron School Phase 4 Group Project - Happy Trails', url: 'https://github.com/rachelsteiner91/HappyTrails' },
            { name: 'Flatiron School Phase 3 Group Project - Expense Tracker', url: 'https://github.com/YasmeenY/Expense-Tracker-Project' },
            { name: 'Flatiron School Phase 2 Group Project - Closet Organizer', url: 'https://github.com/colelevy08/Closet-Organizer' },
            { name: 'Flatiron School Phase 1 Group Project - Corny Joke Generator', url: 'https://github.com/ThisBackpackersLife/phase-1-group-project' }
          ].map((project, index) => (
            <li key={index} className="text-base mb-2 p-2 rounded bg-white shadow-md">
              <a className="text-blue-500 flex items-center" href={project.url} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faStar} className="mr-2 text-yellow-400" />
                {project.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Exporting the HomePage component
export default my_portfolio;
