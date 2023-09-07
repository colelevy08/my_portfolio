// Education.js

import React from 'react';

function Education({ data }) {
  return (
    <div className="m-4">
      <h2 className="text-xl font-bold">Education</h2>
      <ul className="list-disc pl-5">
        {data && data.map((edu, index) => <li key={index} className="text-base">{`${edu.degree} at ${edu.school}, ${edu.time}`}</li>)}
      </ul>
    </div>
  );
}

export default Education;
