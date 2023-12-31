import React from 'react';

// Destructure 'data' from props
function Accomplishments({ data }) {
  // Mapping accomplishment names to their respective icons
  const accomplishmentIcons = {
    'Rowing National Champion (4x)': 'fas fa-award',
    '6th place in Head of the Charles (2x)': 'fas fa-trophy',
    'Adirondack 46er': 'fas fa-mountain'
  };

  return (
    <div className="bg-white p-4 rounded-md">
      <h2 className="text-xl font-semibold flex items-start">
        <i className="fas fa-trophy mr-2"></i> Accomplishments
      </h2>
      <ul>
        {data.map((accomplishment, index) => (
          <li key={index} className="flex items-center">
            <i className={`${accomplishmentIcons[accomplishment] || 'fas fa-medal'} text-yellow-500 mr-2`}></i>
            {accomplishment}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Accomplishments;
