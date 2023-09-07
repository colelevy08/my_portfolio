// Timeline.js

import React from 'react';

function Timeline({ data }) {
  return (
    <div className="m-4">
      <h2 className="text-xl font-bold">Timeline</h2>
      <ul className="list-disc pl-5">
        {data && data.map((event, index) => <li key={index} className="text-base">{`${event.event} at ${event.place}, ${event.time}`}</li>)}
      </ul>
    </div>
  );
}

export default Timeline;
