import React from 'react';

function Timeline({ data }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <i className="fas fa-clock mr-2"></i> Timeline
      </h2>
      <ul className="space-y-4">
        {data.map((event, index) => (
          <li key={index} className="border p-4 rounded-md relative">
            <div className="absolute left-0 top-0 h-full w-0.5 bg-blue-600" style={{ left: '50%' }}></div>
            <div className="absolute left-0 top-1/2 bg-blue-600 rounded-full" style={{ left: '50%', transform: 'translate(-50%, -50%)', width: '20px', height: '20px' }}></div>
            <strong className="text-lg font-semibold flex items-center">
              <i className="fas fa-flag mr-2"></i>
              {event.event}
            </strong> - {event.time} <br />
            <span className="text-blue-600 flex items-center">
              <i className="fas fa-map-marker-alt mr-2"></i>
              Location:
            </span> {event.place} <br />
            <span className="text-blue-600 flex items-center">
              <i className="fas fa-info-circle mr-2"></i>
              Description:
            </span> {event.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Timeline;