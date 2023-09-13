import React from 'react';

function Languages({ data }) {
  return (
    <div className="bg-white p-4 rounded-md">
      <h2 className="text-xl font-semibold">Spoken Languages</h2>
      <ul>
        {data.map((language, index) => (
          <li key={index}>{language}</li>
        ))}
      </ul>
    </div>
  );
}

export default Languages;
