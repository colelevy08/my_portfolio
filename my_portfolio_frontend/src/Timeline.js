// Timeline.js

import React from 'react';

function Timeline({ data }) {
  return (
    <div  style={{ margin: '1rem 0' }}>
      <h2>Timeline</h2>
      <ul>
        {data && data.map((event, index) => <li key={index}>{`${event.event} at ${event.place}, ${event.time}`}</li>)}
      </ul>
    </div>
  );
}

export default Timeline;
