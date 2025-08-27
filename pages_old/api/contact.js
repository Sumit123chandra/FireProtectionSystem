import dbConnect from "../../src/lib/dbConnect";
import Contact from "../../models/Contact";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    try {
      const { name, email, phone, message } = req.body;
      const contact = await Contact.create({ name, email, phone, message });
      return res.status(201).json({ success: true, data: contact });
    } catch (error) {
      return res.status(400).json({ success: false, error: error.message });
    }
  } else {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }
}
