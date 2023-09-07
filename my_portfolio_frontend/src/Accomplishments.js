// Accomplishments.js

import React from 'react';

function Accomplishments({ data }) {
  return (
    <div className="m-4">
      <h2 className="text-xl font-bold">Accomplishments</h2>
      <ul className="list-disc pl-5">
        {data && data.map((accomplishment, index) => <li key={index} className="text-base">{accomplishment}</li>)}
      </ul>
    </div>
  );
}

export default Accomplishments;
