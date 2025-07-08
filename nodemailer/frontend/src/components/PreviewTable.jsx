// frontend/src/components/PreviewTable.jsx
import React from 'react';

const PreviewTable = ({ rows }) => {
  if (!rows || rows.length === 0) return null;

  const keys = Object.keys(rows[0]);

  return (
    <table border="1" style={{ width: '100%', marginTop: '10px' }}>
      <thead>
        <tr>
          {keys.map((key) => (
            <th key={key}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {keys.map((key) => (
              <td key={key}>{row[key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PreviewTable;
