import React from 'react';

function Skills({ data }) {
  return (
    <div className="bg-white p-4 rounded-md">
      <h2 className="text-xl font-semibold flex items-center">
        <i className="fas fa-tools mr-2"></i> Skills
      </h2>
      <ul>
        {data.map((skill, index) => (
          <li key={index} className="flex items-center">
            <i className="fas fa-check-circle text-green-500 mr-2"></i>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
