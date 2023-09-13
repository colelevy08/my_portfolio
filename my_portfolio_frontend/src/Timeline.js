import React from 'react';

// Timeline component to display a list of events
function Timeline({ data }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <i className="fas fa-clock mr-2"></i> Timeline
      </h2>
      <div className="relative">
        {/* Vertical line connecting the boxes */}
        <div className="absolute left-1/2 h-full w-0.5 bg-blue-600"></div>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.map((event, index) => (
            <li key={index} className="relative">
              {/* Event box */}
              <div className="p-4 border border-gray-300 rounded-lg bg-white max-w-md mx-auto">
                <strong className="text-md font-semibold flex items-center">
                  <i className="fas fa-flag mr-1"></i>
                  {event.event}
                </strong>
                <span className="ml-1 text-gray-600 text-sm">{event.time}</span>
                <div className="mt-1 text-blue-600 flex items-center text-sm">
                  <i className="fas fa-map-marker-alt mr-1"></i>
                  Location: {event.place}
                </div>
                <div className="mt-1 text-blue-600 flex items-center text-sm">
                  <i className="fas fa-info-circle mr-1"></i>
                  Description: {event.description}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Timeline;
