import React from 'react';
import personalInfo from './Data'; // Import data from Data.js

const { spoken_languages } = personalInfo;


// Mapping language names to their respective icons
const languageIcons = {
  'English': 'fas fa-comment-alt',
  'Spanish': 'fas fa-comments',
  'French': 'fas fa-comments',
  'Mandarin': 'fas fa-comments'
};

function Languages(spoken_languages) {
  return (
    <div className="bg-white p-4 rounded-md">
      <h2 className="text-xl font-semibold flex items-start">
        <i className="fas fa-language mr-2"></i> Spoken Languages
      </h2>
      <ul>
        {spoken_languages.map((language, index) => (
          <li key={index} className="flex items-center">
            <i className={`${languageIcons[language] || 'fas fa-globe'} text-blue-500 mr-2`}></i>
            {language}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Languages;
