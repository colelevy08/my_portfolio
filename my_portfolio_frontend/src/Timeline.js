import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faInfoCircle, faBuilding, faStar } from '@fortawesome/free-solid-svg-icons';


// Timeline component to display a list of events
function Timeline({ data }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 flex items-start">
        <i className="fas fa-clock mr-2"></i> Timeline
      </h2>
      <div className="relative">
        {/* Vertical line connecting the boxes */}
        <div className="absolute left-1/2 h-full w-0.5 bg-blue-600"></div>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {data.map((event, index) => (
            <li key={index} className="relative mb-8">
              {/* Event box */}
              <div className="p-6 border border-gray-300 rounded-lg bg-white max-w-md mx-auto">
                <strong className="text-md font-semibold flex items-start mb-2">
                  <FontAwesomeIcon icon={faStar} className="mr-2" />
                  {event.event}
                </strong> 
                  <span className="text-blue-600">
                      <FontAwesomeIcon icon={faBuilding} className="mr-2" />
                    Location:</span> {event.place} < br/>
                  <span className="text-yellow-600">
                    <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                    Date:</span> {event.time} < br/>
                  <span className="text-green-600 ">
                   <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
                  Description:</span> {event.description}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Timeline;
