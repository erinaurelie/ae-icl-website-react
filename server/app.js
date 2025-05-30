import cors from 'cors';
import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';


const app = express();
dotenv.config();

app.use(express.json());
app.use(cors({ origin: 'http://localhost:5713' }));
app.use(express.urlencoded({ extended: true })); // when using form to send data

const transporter = nodemailer.createTransport({
  host: "smtp.mail.yahoo.com",
  port: 465,
  secure: true,
  auth: {
    user: "inconsult_2013logistics@yahoo.fr",
    pass: process.env.YAHOO_APP_PASSWORD,
  }
});



app.post('/api/contact', async (req, res) => {
  const { name, email, phone, company, message } = req.body;

  try {
    // Send email to your company
    await transporter.sendMail({
      from: '"AE-ICL Website" <inconsult_2013logistics@yahoo.fr>',
      to: "bar@example.com, baz@example.com",
      subject: "New Contact Form Submission",
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Company: ${company}
        Message: ${message}
      `,
      html: `
        <div style="background:#0E2433;padding:32px;border-radius:12px;color:#fff;font-family:sans-serif;max-width:600px;margin:auto;">
          <h2 style="color:#2ec4b6;margin-bottom:24px;">New Contact Form Submission from the AE - ICL website</h2>
          <p><strong>Name:</strong> <span style="color:#e0e0e0;">${name}</span></p>
          <p><strong>Email:</strong> <span style="color:#e0e0e0;">${email}</span></p>
          <p><strong>Phone:</strong> <span style="color:#e0e0e0;">${phone}</span></p>
          <p><strong>Company:</strong> <span style="color:#e0e0e0;">${company}</span></p>
          <p><strong>Message:</strong><br/><span style="color:#e0e0e0;">${message}</span></p>
        </div>
      `,
    });

    // Send auto-reply to the user
    await transporter.sendMail({
      from: '"AE-ICL Website" <inconsult_2013logistics@yahoo.fr>',
      to: email,
      subject: "Thank you for contacting AE-ICL",
      text: `
        Dear ${name},
        Thank you for reaching out to AE-International Consulting & Logistics LTD. We have received your message and will get back to you as soon as possible.

        Best regards,
        AE-ICL Team
      `,
      html: `
        <div style="background:#0E2433;padding:32px;border-radius:12px;color:#fff;font-family:sans-serif;max-width:600px;margin:auto;">
          <h2 style="color:#2ec4b6;margin-bottom:24px;">Thank you for contacting AE-ICL!</h2>
          <p>Dear <span style="color:#e0e0e0;">${name}</span>,</p>
          <p>Thank you for reaching out to AE-International Consulting & Logistics LTD.<br>
          We have received your message and will get back to you as soon as possible.</p>
          <p style="margin-top:24px;">Best regards,<br/>The AE-ICL Team</p>
          
          <hr style="border:none;border-top:1px solid #2ec4b6;margin:32px 0 16px 0;">
          <div style="text-align:center;font-size:14px;color:#b0b0b0;">
            <p>
              Visit us: 
              <a href="https://ae-icl.com" style="color:#2ec4b6;text-decoration:underline;">ae-icl.com</a>
            </p>
            <p>
              Office: 123 Main Street, Accra, Ghana
            </p>
          </div>
        </div>
      `,
    });

    // Only send confirmation if both emails succeed
    res.json({
      success: true,
      message: "Your message has been sent successfully. Thank you for contacting us!",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({
      success: false,
      message: "There was an error sending your message. Please try again later.",
    });
  }
});

app.get('/', (req, res) => {
  res.send('IT WORKS');
})


app.listen(5000, () => {
  console.log(`Listening on http://localhost:5000`);
});