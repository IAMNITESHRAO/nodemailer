// src/components/DropZone.jsx
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const DropZone = ({ onFileAccepted }) => {
  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      onFileAccepted(acceptedFiles[0]);
    }
  }, [onFileAccepted]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'] },
    multiple: false,
  });

  return (
    <div
      {...getRootProps()}
      style={{
        border: '2px dashed #007bff',
        padding: '30px',
        textAlign: 'center',
        cursor: 'pointer',
        marginBottom: '20px',
      }}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the file here...</p>
      ) : (
        <p>Drag & drop an Excel (.xlsx) file here, or click to select</p>
      )}
    </div>
  );
};

export default DropZone;
