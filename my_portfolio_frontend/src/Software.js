import React from 'react';

// Mapping software names to their respective icons
const softwareIcons = {
  'Python': 'fab fa-python',
  'Flask': 'fas fa-flask',
  'SQL': 'fas fa-database',
  'JavaScript': 'fab fa-js',
  'React': 'fab fa-react',
  'Node.js': 'fab fa-node-js',
  'HTML': 'fab fa-html5',
  'CSS': 'fab fa-css3-alt',
  'Github': 'fab fa-github',
  'VSCode': 'fas fa-code',
  'Full Stack Development': 'fas fa-code-branch',
  'Macintosh Applications, Software, and CLI': 'fab fa-apple',
  'Google Applications and Software': 'fab fa-google',
  'Microsoft Office': 'fab fa-windows'
};

function Software({ data }) {
  return (
    <div className="bg-white p-4 rounded-md">
      <h2 className="text-xl font-semibold flex items-center">
        <i className="fas fa-laptop-code mr-2"></i> Software
      </h2>
      <ul>
        {data.map((software, index) => (
          <li key={index} className="flex items-center">
            <i className={`${softwareIcons[software] || 'fas fa-code'} text-blue-500 mr-2`}></i>
            {software}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Software;
