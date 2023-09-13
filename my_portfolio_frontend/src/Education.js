import React from 'react';

function Education({ data }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      <ul className="space-y-4">
        {data.map((education, index) => (
          <li key={index} className="border p-4 rounded-md">
            <strong className="text-lg font-semibold block">School: {education.school}</strong>
            <span className="text-blue-600 block">Studies: {education.studies} </span> 
            <span className="text-blue-600">Time:</span> {education.time} < br/>
            <span className="text-blue-600">Description:</span> {education.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Education;
