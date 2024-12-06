const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();


app.use(cors({
  origin: 'http://localhost:3000' // Your React app's URL
}));

app.use(express.json());

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail', // Or use another email service
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD
  }
});

app.post('/contact', async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "florencerasaq1@gmail.com", // Your email where you want to receive messages
    subject: `Portfolio Contact Me Submission from ${firstName} ${lastName}`,
    html: `
      <h3>Portfolio Contact Form Submission</h3>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    
    res.json({ 
      code: 200, 
      message: 'Message sent successfully' 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.json({ 
      code: 500, 
      message: 'Something went wrong, please try again later.'
    });
  }
});


const PORT = process.env.PORT || 5003;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});