import React from 'react';

function WorkHistory({ data }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Work History</h2>
      <ul className="space-y-4">
        {data.map((work, index) => (
          <li key={index} className="border p-4 rounded-md">
            <strong className="text-lg font-semibold">{work.role}</strong> - {work.company} <br />
            <span className="text-blue-600">Date:</span> {work.time} <br />
            <span className="text-blue-600">Description:</span> {work.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WorkHistory;
