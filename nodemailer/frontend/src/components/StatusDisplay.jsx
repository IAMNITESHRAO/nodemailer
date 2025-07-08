// frontend/src/components/StatusDisplay.jsx
import React from 'react';

const StatusDisplay = ({ results }) => {
  if (!results || results.length === 0) return null;

  return (
    <div style={{ marginTop: '20px' }}>
      <h4>Status</h4>
      <ul>
        {results.map((r, i) => (
          <li key={i}>
            <b>{r.Email}</b>: {r.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StatusDisplay;
