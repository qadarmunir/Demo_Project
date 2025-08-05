const fs = require('fs');
const nodemailer = require('nodemailer');

// Read the JSON file
const missingUrls = JSON.parse(fs.readFileSync('cypress/results/missing_services_urls.json', 'utf8'));

// Format the email body
const emailBody = missingUrls.length
  ? missingUrls.map(item =>
      `Service: ${item.service}\nState: ${item.state}\nEntity: ${item.entity}\nURL: ${item.url}\n`
    ).join('\n---------------------\n')
  : 'No missing service URLs found.';

// Configure your SMTP (replace with your real SMTP details)
const transporter = nodemailer.createTransport({
  host: 'sandbox.smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '8de7bab3f5704f',
    pass: '60cdfeeff95c5e'
  }
});

const mailOptions = {
  from: 'test@FormVerification.com',
  to: 'g.qadar.qa@gmail.com',
  subject: 'Missing Services URLs Report',
  text: emailBody
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log('Error sending email:', error);
  }
  console.log('Email sent:', info.response);
});