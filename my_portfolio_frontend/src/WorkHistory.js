import React from 'react';

function WorkHistory({ data }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        <i className="fas fa-briefcase mr-2"></i> Work History
      </h2>
      <ul className="space-y-4">
        {data.map((work, index) => (
          <li key={index} className="border p-4 rounded-md">
            <strong className="text-lg font-semibold ">
              <i className="fas fa-user-tie mr-2"></i>
              {work.role}
            </strong> < br/>
            <span className="text-blue-600">
            <i className="fas fa-calendar-alt mr-2"></i>
               Company: </span> {work.company} < br/>
            <span className="text-blue-600">
              <i className="fas fa-calendar-alt mr-2"></i>
              Date:
            </span> {work.time} <br />
            <span className="text-blue-600 ">
              <i className="fas fa-info-circle mr-2"></i>
              Description:
            </span> {work.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WorkHistory;
