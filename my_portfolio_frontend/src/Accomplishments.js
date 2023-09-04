// Accomplishments.js

import React from 'react';

function Accomplishments({ data }) {
  return (
    <div  style={{ margin: '1rem 0' }}>
      <h2>Accomplishments</h2>
      <ul>
        {data && data.map((accomplishment, index) => <li key={index}>{accomplishment}</li>)}
      </ul>
    </div>
  );
}

export default Accomplishments;
