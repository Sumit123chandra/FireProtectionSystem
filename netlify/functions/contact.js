import mongoose from "mongoose";
import nodemailer from "nodemailer";
import Contact from "../../src/models/Contact.js"; 
import { dbConnect } from "../../src/lib/dbConnect.js";

export async function handler(event, context) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
    };
  }

  try {
    const data = JSON.parse(event.body);

    // Setup transporter (Gmail SMTP in this case)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // App password (not your Gmail password)
      },
    });

    // Mail options
    const mailOptions = {
      from: `"KC Fire Protection" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL, // where you want to receive messages
      subject: `New Contact Form Submission from ${data.name}`,
      text: `
        Name: ${data.name}
        Phone: ${data.phone}
        Email: ${data.email}
        Service: ${data.service}
        Message: ${data.message}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: "Message sent successfully!" }),
    };
  } catch (error) {
    console.error("Email(Netlify) send error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, message: "Server Error. Could not send email(Netlify)." }),
    };
  }
}
