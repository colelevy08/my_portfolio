// WorkHistory.js

import React from 'react';
import './index.css'; // Importing Tailwind CSS


function WorkHistory({ data }) {
  return (
    <div className="m-4">
      <h2 className="text-xl font-bold">Work History</h2>
      <ul className="list-disc pl-5">
        {data && data.map((work, index) => <li key={index} className="text-base">{`${work.role} at ${work.company}, ${work.time}`}</li>)}
      </ul>
    </div>
  );
}

export default WorkHistory;
