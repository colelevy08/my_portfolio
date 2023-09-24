import React from 'react';
import personalInfo from './Data'; // Import data from Data.js

const { skill } = personalInfo;


// Mapping skill names to their respective icons
const skillIcons = {
  'Communication': 'fas fa-comments',
  'Media Literacy': 'fas fa-tv',
  'Foreign Languages': 'fas fa-language',
  'Guest Relations Management': 'fas fa-user-friends',
  'Hospitality Service Expertise': 'fas fa-concierge-bell',
  'Dining Customer Service': 'fas fa-utensils',
  'Point-of-sale (POS) Software': 'fas fa-cash-register',
  'Process Payments': 'fas fa-credit-card',
  'Cash Handling': 'fas fa-hand-holding-usd',
  'Suggestive Selling': 'fas fa-comment-dollar',
  'Guest and Employee Relations and Rapport': 'fas fa-smile',
  'Quality Control': 'fas fa-check-double',
  'Adaptable and Flexible': 'fas fa-arrows-alt',
  'Critical Thinking': 'fas fa-brain'
};

function Skills(personalInfo) {
  return (
    <div className="bg-white p-4 rounded-md">
      <h2 className="text-xl font-semibold flex items-start">
        <i className="fas fa-tools mr-2"></i> Skills
      </h2>
      <ul>
        {personalInfo.map((skill, index) => (
          <li key={index} className="flex items-center">
            <i className={`${skillIcons[skill] || 'fas fa-check-circle'} text-green-500 mr-2`}></i>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
