import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/dbConnect";
import Contact from "@/models/Contact";
import nodemailer from "nodemailer";

// export async function POST(req) {
//   try {
//     const body = await req.json();
//     await dbConnect();
//     const newMessage = await Contact.create(body);
//     return NextResponse.json({ success: true, data: newMessage });
//   } catch (error) {
//     return NextResponse.json({ success: false, error: "Failed to send message" }, { status: 500 });
//   }
// }

export async function POST(req) {
  try {
    const body = await req.json();
    await dbConnect();

    // Save message to MongoDB
    const newMessage = await Contact.create(body);

    // --- Email Notification Setup ---
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your Gmail address
        pass: process.env.EMAIL_PASS, // your Gmail App Password
      },
    });

    const mailOptions = {
      from: `"KC Fire Protection System" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL, // your father’s email
      subject: "🔥 New Customer Inquiry - KC Fire Protection",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Service:</strong> ${body.service}</p>
        <p><strong>Phone No.:</strong> ${body.phone}</p>
        <p><strong>Message:</strong> ${body.message}</p>
        <hr/>
        <small>Received at: ${new Date().toLocaleString()}</small>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, data: newMessage });
  } catch (error) {
    console.error("Error in contact route:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send message" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await dbConnect();
    const messages = await Contact.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: messages });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to fetch messages" }, { status: 500 });
  }
}
