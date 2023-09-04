// Education.js

import React from 'react';

function Education({ data }) {
  return (
    <div style={{ margin: '1rem 0' }}>
      <h2>Education</h2>
      <ul>
        {data && data.map((edu, index) => <li key={index}>{`${edu.degree} at ${edu.school}, ${edu.time}`}</li>)}
      </ul>
    </div>
  );
}

export default Education;
