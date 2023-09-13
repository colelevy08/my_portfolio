import React from 'react';

function Accomplishments({ data }) {
  return (
    <div className="bg-white p-4 rounded-md">
      <h2 className="text-xl font-semibold flex items-center">
        <i className="fas fa-trophy mr-2"></i> Accomplishments
      </h2>
      <ul>
        {data.map((accomplishment, index) => (
          <li key={index} className="flex items-center">
            <i className="fas fa-medal text-yellow-500 mr-2"></i>
            {accomplishment}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Accomplishments;
