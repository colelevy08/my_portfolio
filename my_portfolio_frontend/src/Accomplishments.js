import React from 'react';

function Accomplishments({ data }) {
  return (
    <div className="bg-white p-4 rounded-md">
      <h2 className="text-xl font-semibold">Accomplishments</h2>
      <ul>
        {data.map((accomplishment, index) => (
          <li key={index}>{accomplishment}</li>
        ))}
      </ul>
    </div>
  );
}

export default Accomplishments;
