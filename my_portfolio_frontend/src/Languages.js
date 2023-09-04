// Languages.js

import React from 'react';

function Languages({ data }) {
  return (
    <div style={{ margin: '1rem 0' }}>
      <h2>Spoken Languages</h2>
      <ul>
        {data && data.map((language, index) => <li key={index}>{language}</li>)}
      </ul>
    </div>
  );
}

export default Languages;
