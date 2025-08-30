/*import mongoose from "mongoose";
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

    // --- Connect to MongoDB ---
    await dbConnect();

    // --- Save to MongoDB ---
    const newMessage = await Contact.create(data);

    // --- Send email notification ---
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"KC Fire Protection" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Contact Form Submission from ${data.name}`,
      text: `
        Name: ${data.name}
        Phone: ${data.phone}
        Email: ${data.email}
        Service: ${data.service}
        Message: ${data.message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: "Message saved & sent!", data: newMessage }),
    };

  } catch (error) {
    console.error("Netlify handler error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, message: "Server Error (Netlify)." }),
    };
  }
}
*/

// netlify/functions/contact.js
import mongoose from "mongoose";
import nodemailer from "nodemailer";
import Contact from "../../src/models/Contact.js";
import { dbConnect } from "../../src/lib/dbConnect.js";

export async function handler(event, context) {
    // ✅ Handle DELETE (Remove one message)
    if (event.httpMethod === "DELETE") {
    try {
      const id = event.queryStringParameters.id; // /contact?id=123
      await dbConnect();
      await Contact.findByIdAndDelete(id);

      return {
        statusCode: 200,
        body: JSON.stringify({ success: true }),
      };
    } catch (error) {
      console.error("Netlify DELETE error:", error);
      return {
        statusCode: 500,
        body: JSON.stringify({ success: false, message: "Failed to delete" }),
      };
    }
  }



  // ✅ Handle POST (Save + Email)
  if (event.httpMethod === "POST") {
    try {
      const data = JSON.parse(event.body);

      // --- Connect to MongoDB ---
      await dbConnect();

      // --- Save to MongoDB ---
      const newMessage = await Contact.create(data);

      // --- Send email notification ---
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: `"KC Fire Protection" <${process.env.EMAIL_USER}>`,
        to: process.env.RECEIVER_EMAIL,
        subject: `New Contact Form Submission from ${data.name}`,
        text: `
          Name: ${data.name}
          Phone: ${data.phone}
          Email: ${data.email}
          Service: ${data.service}
          Message: ${data.message}
        `,
      };

      await transporter.sendMail(mailOptions);

      return {
        statusCode: 200,
        body: JSON.stringify({
          success: true,
          message: "Message saved & sent!",
          data: newMessage,
        }),
      };
    } catch (error) {
      console.error("Netlify POST error:", error);
      return {
        statusCode: 500,
        body: JSON.stringify({
          success: false,
          message: "Server Error (Netlify POST).",
        }),
      };
    }
  }

  // ✅ Handle GET (Fetch all messages for Dashboard)
  if (event.httpMethod === "GET") {
    try {
      await dbConnect();
      const messages = await Contact.find().sort({ createdAt: -1 });

      return {
        statusCode: 200,
        body: JSON.stringify({
          success: true,
          data: messages,
        }),
      };
    } catch (error) {
      console.error("Netlify GET error:", error);
      return {
        statusCode: 500,
        body: JSON.stringify({
          success: false,
          message: "Server Error (Netlify GET).",
        }),
      };
    }
  }

  // ✅ Method not allowed fallback
  return {
    statusCode: 405,
    body: JSON.stringify({ success: false, message: "Method Not Allowed" }),
  };
}
