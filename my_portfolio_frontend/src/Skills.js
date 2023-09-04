import React from 'react';

const Skills = ({ data }) => {
  return (
    <div style={{ margin: '1rem 0' }}>
      <h2>Skills</h2>
      {data ? (
        <ul>
          {data.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Skills;
