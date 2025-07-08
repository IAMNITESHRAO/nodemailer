const express = require('express');
const multer = require('multer');
const cors = require('cors');
require('dotenv').config();
const emailController = require('./controllers/emailController');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(cors());
app.use(express.json());

app.post('/send-emails', upload.single('file'), emailController.uploadAndSendEmails);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
