// Software.js

import React from 'react';

function Software({ data }) {
  return (
    <div style={{ margin: '1rem 0' }}>
      <h2>Software</h2>
      <ul>
        {data && data.map((software, index) => <li key={index}>{software}</li>)}
      </ul>
    </div>
  );
}

export default Software;
