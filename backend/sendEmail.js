const nodemailer = require('nodemailer');

require('dotenv').config();

console.log("📧 Email User:", process.env.EMAIL_USER);
console.log("🔑 Email Pass:", process.env.EMAIL_PASS ? 'SET ✅' : '❌ NOT SET');

const createTransporter = () =>
  nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

const sendEmail = async ({ Name, Company, Email, Role, Link }) => {
  const name = Name?.split(' ')[0] || 'there';

  const mailOptions = {
    from: `Nitesh Kumar <${process.env.EMAIL_USER}>`,
    to: Email,
    subject: `Request for an Interview Opportunity - ${Role} at ${Company}`,
    html: `
      <p>Greetings ${name},</p>
      <p>I'm Nitesh Kumar, a Software Developer at Cybercube Services Pvt. Ltd. I saw that <b>${Company}</b> is hiring for the role of <b>${Role}</b>, and I wanted to express my interest. Here's a quick overview:</p>
      <ul>
        <li><b>1+ years</b> of frontend development experience</li>
        <li><b>1 years</b> at <a href="https://www.cybercube.co/">Cybercube Services</a></li>
        <li>Skills: <b>JavaScript, TypeScript, React, Next.js</b></li>
        <li>Experience with <b>REST APIs, GraphQL, Monorepos, Jest</b></li>
        <li>Worked on <b>25M+ MAU products in Indian Equity and F&O</b></li>
        <li><b>Chandigarh University Punjab, 2024 Grad</b></li>
        <li>Competitive coder: <b>Codeforces Rating – 1645</b></li>
      </ul>
      <p>I’m currently serving notice and can join within <b>15 days</b>. Please consider my application for this role.</p>
      <p>
        <b><a href="https://drive.google.com/file/d/14GPrl1RhXtTnKpEWhb_fnlpMwEDD7-vP/view?usp=sharing">Resume</a></b> |
        <b><a href="https://www.linkedin.com/in/im-nitesh-kumar/">LinkedIn</a></b>
        |
        <b><a href="https://github.com/IAMNITESHRAO">Github</a></b>

        ${Link ? `| <b><a href="${Link}">${Role} Opening</a></b>` : ''}
      </p>
      <p>Regards,<br/><b>Nitesh Kumar</b><br/>Contact: +91 9653986412</p>
    `,
  };

  try {
    const transporter = createTransporter();
    await transporter.sendMail(mailOptions);
    console.log(`✅ Email sent to: ${Email}`);
  } catch (error) {
    console.error(`❌ Failed to send email to ${Email}`, error);
    throw error; // bubble the error to the controller
  }
};

module.exports = sendEmail;
