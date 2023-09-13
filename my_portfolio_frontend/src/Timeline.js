import React from 'react';

function Timeline({ data }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Timeline</h2>
      <ul className="space-y-4">
        {data.map((event, index) => (
          <li key={index} className="border p-4 rounded-md">
            <strong className="text-lg font-semibold">{event.event}</strong> - {event.time} <br />
            <span className="text-blue-600">Location:</span> {event.place} <br />
            <span className="text-blue-600">Description:</span> {event.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Timeline;
