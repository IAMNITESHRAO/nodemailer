// frontend/src/components/TemplateEditor.jsx
import React from 'react';

const TemplateEditor = ({ value, onChange }) => {
  return (
    <div style={{ marginTop: '20px' }}>
      <h4>Edit Email Template</h4>
      <textarea
        rows={10}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ width: '100%', fontFamily: 'monospace' }}
      />
    </div>
  );
};

export default TemplateEditor;
