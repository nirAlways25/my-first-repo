const nodemailer = require('nodemailer');

// Load environment variables
const smtpServer = process.env.SMTP_SERVER;
const smtpPort = process.env.SMTP_PORT;
const smtpUsername = process.env.SMTP_USERNAME;
const smtpPassword = process.env.SMTP_PASSWORD;
const buildVersion = process.env.BUILD_VERSION;

async function sendEmail() {
  let transporter = nodemailer.createTransport({
    host: smtpServer,
    port: smtpPort,
    secure: true, // true for port 465, false for others
    auth: {
      user: smtpUsername,
      pass: smtpPassword,
    },
  });

  let info = await transporter.sendMail({
    from: smtpUsername,
    to: "Niranjan.Ambekar@novatiosolutions.com", // or any other email you want
    subject: "Docker Image Successfully Pushed!",
    text: `Hello,

The Docker image my-demo-calculator:${buildVersion} was successfully pushed to Artifact Registry.

Regards,
GitHub Actions 🚀`,
  });

  console.log("Message sent: %s", info.messageId);
}

sendEmail().catch(console.error);
