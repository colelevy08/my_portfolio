import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faUserTie, faCalendarAlt, faInfoCircle, faBuilding } from '@fortawesome/free-solid-svg-icons';

// Destructure 'data' from props
function WorkHistory({ data }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
        Work History
      </h2>
      <ul className="space-y-4">
        {data.map((work, index) => (
          <li key={index} className="border p-4 rounded-md">
            <strong className="text-lg font-semibold">
              <FontAwesomeIcon icon={faUserTie} className="mr-2" />
              {work.role}
            </strong> <br />
            <span className="text-blue-600">
              <FontAwesomeIcon icon={faBuilding} className="mr-2" />
              Company: </span> {work.company} <br />
            <span className="text-yellow-600">
              <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
              Date: </span> {work.time} <br />
            <span className="text-green-600 ">
              <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
              Description: </span> {work.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WorkHistory;
