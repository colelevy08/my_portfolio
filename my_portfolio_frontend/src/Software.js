import React from 'react';

function Software({ data }) {
  return (
    <div className="bg-white p-4 rounded-md">
      <h2 className="text-xl font-semibold flex items-center">
        <i className="fas fa-laptop-code mr-2"></i> Software
      </h2>
      <ul>
        {data.map((software, index) => (
          <li key={index} className="flex items-center">
            <i className="fas fa-code text-blue-500 mr-2"></i>
            {software}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Software;
