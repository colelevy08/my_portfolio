import React from 'react';

function Software({ data }) {
  return (
    <div className="bg-white p-4 rounded-md">
      <h2 className="text-xl font-semibold">Software</h2>
      <ul>
        {data.map((software, index) => (
          <li key={index}>{software}</li>
        ))}
      </ul>
    </div>
  );
}

export default Software;
