const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, '../logs/email-log.json');

const writeLog = (email, status, error = '') => {
  const log = {
    email,
    status,
    time: new Date().toISOString(),
    error,
  };

  let logs = [];
  if (fs.existsSync(logFilePath)) {
    logs = JSON.parse(fs.readFileSync(logFilePath, 'utf8'));
  }

  logs.push(log);
  fs.writeFileSync(logFilePath, JSON.stringify(logs, null, 2));
};

module.exports = { writeLog };
