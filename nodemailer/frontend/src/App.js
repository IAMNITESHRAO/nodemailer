// import React, { useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [file, setFile] = useState(null);
//   const [sending, setSending] = useState(false);
//   const [message, setMessage] = useState('');

//   const handleFileChange = (e) => setFile(e.target.files[0]);

//   const handleUpload = async () => {
//     if (!file) return alert("Upload an Excel file!");
//     const formData = new FormData();
//     formData.append('file', file);

//     try {
//       setSending(true);
//       const res = await axios.post('http://localhost:5000/send-emails', formData);
//       setMessage(res.data.message);
//     } catch (err) {
//       setMessage('Something went wrong!');
//     } finally {
//       setSending(false);
//     }
//   };

//   return (
//     <div style={{ padding: '2rem' }}>
//       <h2>📧 Bulk Email Sender</h2>
//       <input type="file" accept=".xlsx" onChange={handleFileChange} />
//       <button onClick={handleUpload} disabled={sending} style={{ marginLeft: '1rem' }}>
//         {sending ? 'Sending...' : 'Send Emails'}
//       </button>
//       <p>{message}</p>
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [file, setFile] = useState(null);
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Remove scrollbars from html & body
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
  }, []);

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = async () => {
    if (!file) return alert('Please upload an Excel (.xlsx) file!');
    const formData = new FormData();
    formData.append('file', file);

    try {
      setSending(true);
      const res = await axios.post('http://localhost:5000/send-emails', formData);
      setMessage(res.data.message);
    } catch (err) {
      setMessage('❌ Failed to send emails!');
    } finally {
      setSending(false);
    }
  };

  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        background: 'linear-gradient(135deg, #e0f7fa, #e3f2fd)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Segoe UI, sans-serif',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          background: '#ffffff',
          padding: '2rem',
          borderRadius: '20px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
          width: '90%',
          maxWidth: '420px',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            marginBottom: '1.5rem',
            color: '#0f172a',
            fontSize: '24px',
          }}
        >
          📧 Bulk Email Sender
        </h2>

        <label
          htmlFor="fileUpload"
          style={{
            display: 'block',
            border: '2px dashed #94a3b8',
            borderRadius: '12px',
            padding: '15px',
            marginBottom: '1.5rem',
            backgroundColor: '#f8fafc',
            color: '#475569',
            fontSize: '14px',
            cursor: 'pointer',
          }}
        >
          {file ? file.name : 'Click to upload Excel (.xlsx)'}
          <input
            id="fileUpload"
            type="file"
            accept=".xlsx"
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
        </label>

        <button
          onClick={handleUpload}
          disabled={sending}
          style={{
            width: '100%',
            padding: '12px',
            fontSize: '15px',
            borderRadius: '10px',
            border: 'none',
            backgroundColor: sending ? '#94a3b8' : '#3b82f6',
            color: '#ffffff',
            fontWeight: 'bold',
            cursor: sending ? 'not-allowed' : 'pointer',
            transition: 'background-color 0.2s ease',
          }}
        >
          {sending ? 'Sending...' : 'Send Emails'}
        </button>

        {message && (
          <p
            style={{
              marginTop: '1rem',
              color: message.includes('Failed') ? '#dc2626' : '#059669',
              fontSize: '14px',
              fontWeight: '500',
            }}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
