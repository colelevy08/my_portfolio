// HomePage.js

import React from 'react';
import './index.css'; // Importing Tailwind CSS


const HomePage = () => {
  return (
    <div className="m-4">
      <h2 className="text-xl font-bold">About Me</h2>
      <p className="text-base">
        Software developer with experience in developing and designing web applications using HTML, CSS, JavaScript, React, Node.js, Python, Flask, SQL, and more. Adept at developing and deploying complex full stack systems, web services, and databases.
      </p>
      <h3 className="text-lg font-semibold">Contact</h3>
      <ul className="list-disc pl-5">
        <li className="text-base">
          Send me an email: <a className="text-blue-500" href="mailto:colelevy08@gmail.com">colelevy08@gmail.com</a>
        </li>
        <li className="text-base">
          <a className="text-blue-500" href="https://github.com/colelevy08" target="_blank" rel="noopener noreferrer">GitHub</a>
          <ul className="list-disc pl-5">
            <li className="text-base"><a className="text-blue-500" href="https://github.com/colelevy08/my_portfolio" target="_blank" rel="noopener noreferrer">This Portfolio! - Solo Project</a></li>
            <li className="text-base"><a className="text-blue-500" href="https://github.com/colelevy08/EchoEcho" target="_blank" rel="noopener noreferrer">EchoEcho - Solo Project</a></li>
            <li className="text-base"><a className="text-blue-500" href="https://github.com/vcali02/Happy_Trails" target="_blank" rel="noopener noreferrer">Happy Trails - Group Project</a></li>
            <li className="text-base"><a className="text-blue-500" href="https://github.com/colelevy08/Closet-Organizer" target="_blank" rel="noopener noreferrer">Closet Organizer - Group Project</a></li>
            <li className="text-base"><a className="text-blue-500" href="https://github.com/colelevy08/phase-1-group-project" target="_blank" rel="noopener noreferrer">Phase 1 - Group Project</a></li>
          </ul>
        </li>
        <li className="text-base">
          <a className="text-blue-500" href="https://www.linkedin.com/in/colelevy" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
