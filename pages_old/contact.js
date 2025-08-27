import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/contact", form);
      setStatus("✅ Message sent! We will contact you soon.");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setStatus("❌ Something went wrong.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <input type="text" placeholder="Your Name" className="border p-2 rounded"
          value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
        <input type="email" placeholder="Your Email" className="border p-2 rounded"
          value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
        <input type="text" placeholder="Your Phone" className="border p-2 rounded"
          value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
        <textarea placeholder="Your Message" className="border p-2 rounded"
          value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
        <button type="submit" className="bg-red-600 text-white py-2 rounded">Send</button>
      </form>
      {status && <p className="mt-4">{status}</p>}
    </div>
  );
}
