import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faUniversity, faChalkboardTeacher, faCalendarAlt, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

function Education({ data }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <FontAwesomeIcon icon={faGraduationCap} className="mr-2" />
        Education
      </h2>
      <ul className="space-y-4">
        {data.map((education, index) => (
          <li key={index} className="border p-4 rounded-md">
            <strong className="text-lg font-semibold block flex items-center">
              <FontAwesomeIcon icon={faUniversity} className="mr-2" />
              School: {education.school}
            </strong>
            <span className="text-blue-600">
              <FontAwesomeIcon icon={faChalkboardTeacher} className="mr-2" />
              Studies: </span> {education.studies} <br />
            <span className="text-yellow-600">
              <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
              Date: </span> {education.time} <br />
            <span className="text-green-600">
              <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
              Description: </span> {education.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Education;
