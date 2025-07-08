const xlsx = require('xlsx');
const fs = require('fs');
const sendEmail = require('../sendEmail');

exports.uploadAndSendEmails = async (req, res) => {
  try {
    if (!req.file) {
      console.log('❌ No file uploaded');
      return res.status(400).json({ error: 'No file uploaded' });
    }

    console.log('✅ File received:', req.file.path);

    const workbook = xlsx.readFile(req.file.path);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = xlsx.utils.sheet_to_json(worksheet);

    console.log(`📄 Total rows: ${data.length}`);

    for (const row of data) {
      if (!row.Email) {
        console.log('⚠️ Missing Email in row:', row);
        continue;
      }

      console.log(`📤 Sending email to: ${row.Email}`);
      await sendEmail(row);
    }

    fs.unlinkSync(req.file.path); // Delete uploaded file
    return res.status(200).json({ message: 'Emails sent successfully' });

  } catch (err) {
    console.error('❌ BACKEND ERROR:\n', err); // 🧠 COPY THIS and share with me
    return res.status(500).json({ error: err.message || 'Server error' });
  }
};
