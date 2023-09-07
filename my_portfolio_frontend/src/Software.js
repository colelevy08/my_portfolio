// Software.js

import React from 'react';

function Software({ data }) {
  return (
    <div className="m-4">
      <h2 className="text-xl font-bold">Software</h2>
      <ul className="list-disc pl-5">
        {data && data.map((software, index) => <li key={index} className="text-base">{software}</li>)}
      </ul>
    </div>
  );
}

export default Software;
