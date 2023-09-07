// Languages.js

import React from 'react';

function Languages({ data }) {
  return (
    <div className="m-4">
      <h2 className="text-xl font-bold">Spoken Languages</h2>
      <ul className="list-disc pl-5">
        {data && data.map((language, index) => <li key={index} className="text-base">{language}</li>)}
      </ul>
    </div>
  );
}

export default Languages;
