import React from 'react';

function Languages({ data }) {
  return (
    <div className="bg-white p-4 rounded-md">
      <h2 className="text-xl font-semibold flex items-center">
        <i className="fas fa-language mr-2"></i> Spoken Languages
      </h2>
      <ul>
        {data.map((language, index) => (
          <li key={index} className="flex items-center">
            <i className="fas fa-globe text-blue-500 mr-2"></i>
            {language}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Languages;
