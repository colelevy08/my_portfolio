// WorkHistory.js

import React from 'react';

function WorkHistory({ data }) {
  return (
    <div>
      <h2>Work History</h2>
      <ul>
        {data && data.map((work, index) => <li key={index}>{`${work.role} at ${work.company}, ${work.time}`}</li>)}
      </ul>
    </div>
  );
}

export default WorkHistory;
