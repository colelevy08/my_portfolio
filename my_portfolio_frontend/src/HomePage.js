import React from 'react';

const HomePage = () => {
    return (
      <div style={{ margin: '1rem 0' }}>
        <h2>About Me</h2>
        <p>
          Software developer with experience in developing and designing web applications using HTML, CSS, JavaScript, React, Node.js, Python, Flask, SQL, and more. Adept at developing and deploying complex full stack systems, web services, and databases.
        </p>
        <h3>Contact</h3>
        <ul>
          <li>
            Send me an email: <a href="mailto:colelevy08@gmail.com">colelevy08@gmail.com</a>
          </li>
          <li>
            <a href="https://github.com/colelevy08" target="_blank" rel="noopener noreferrer">GitHub</a>
            <ul>
              <li><a href="https://github.com/colelevy08/EchoEcho" target="_blank" rel="noopener noreferrer">EchoEcho - Solo Project</a></li>
              <li><a href="https://github.com/vcali02/Happy_Trails" target="_blank" rel="noopener noreferrer">Happy Trails - Group Project</a></li>
              <li><a href="https://github.com/colelevy08/Closet-Organizer" target="_blank" rel="noopener noreferrer">Closet Organizer - Group Project</a></li>
              <li><a href="https://github.com/colelevy08/phase-1-group-project" target="_blank" rel="noopener noreferrer">Phase 1 - 8Group Project</a></li>
            </ul>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/colelevy" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </li>
        </ul>
      </div>
    );
  };
  
export default HomePage;
