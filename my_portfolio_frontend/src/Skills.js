// Skills.js

import React from 'react';
import './index.css'; // Importing Tailwind CSS

const Skills = ({ data }) => {
  return (
    <div className="m-4">
      <h2 className="text-xl font-bold">Skills</h2>
      {data ? (
        <ul className="list-disc pl-5">
          {data.map((skill, index) => (
            <li key={index} className="text-base">{skill}</li>
          ))}
        </ul>
      ) : (
        <p className="text-base">Loading...</p>
      )}
    </div>
  );
};

export default Skills;

