import React from 'react';

function Skills({ data }) {
  return (
    <div className="bg-white p-4 rounded-md">
      <h2 className="text-xl font-semibold">Skills</h2>
      <ul>
        {data.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
