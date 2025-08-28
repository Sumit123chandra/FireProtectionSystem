// models/Contact.js
import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  service: String,
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
}, { timestamps: true });

export default mongoose.models.Contact || mongoose.model("Contact", ContactSchema);
