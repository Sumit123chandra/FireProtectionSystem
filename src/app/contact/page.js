"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function Contact() {
  const searchParams = useSearchParams();
  const serviceName = searchParams.get("service");

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  // Auto-fill message if serviceName exists
  useEffect(() => {
    if (serviceName) {
      setForm((prev) => ({
        ...prev,
        message: `Hi, I actually want to know about "${serviceName}" :`,
      }));
    }
  }, [serviceName]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("✅ Message sent successfully!");
        setForm({
          name: "",
          phone: "",
          email: "",
          service: "",
          message: "",
        });
      } else {
        setStatus("❌ Failed to send message.");
      }
    } catch (err) {
      setStatus("❌ Server error. Try again later.");
    }
  };

  return (
    <main className="p-8 space-y-16">
      {/* Hero / Intro */}
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-red-700 mb-4">
          Let's Talk Over a Coffee
        </h1>
        <p className="text-gray-700 text-lg">
          We’d love to discuss your fire safety requirements. Reach out and our team will get back to you.
        </p>
      </section>

      {/* Contact Info */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
        

        <div className="p-6 bg-red-50 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-red-700 mb-2">Ring Us Up</h3>
          <p className="text-gray-700 text-sm font-bold">+91 9910488125</p>
        </div>

        <div className="p-6 bg-red-50 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-red-700 mb-2">Send Us a Bird</h3>
          <p className="text-gray-700 text-sm">Fill the form to get in touch</p>
          </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-3xl mx-auto bg-gray-200 outline-stone-700 p-8 rounded-xl shadow space-y-6">
        <h2 className="text-3xl font-bold text-red-700 text-center">Send Us a Query</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid rounded-xl grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-xl outline outline-2 outline-slate-500 focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="w-full p-3 border rounded-xl outline outline-2 outline-slate-500 focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl outline outline-2 outline-slate-400 focus:outline-none focus:ring-2 focus:ring-red-600"
            required
          />
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl outline outline-2 outline-slate-400 focus:outline-none focus:ring-2 focus:ring-red-600"
          >
            <option value="">Select Service</option>
            <option value="Fire Detection System">Fire Detection System</option>
            <option value="Fire Hydrant & Sprinklers">Fire Hydrant & Sprinklers</option>
            <option value="Fire Suppression System">Fire Suppression System</option>
            <option value="Audit & Maintenance">Audit & Maintenance</option>
            <option value="Fire System Repairs & Upgradation">Repairs & Upgradation</option>
            <option value="Technical Manpower Services">Technical Manpower Services</option>
            <option value="other">other</option>
          </select>
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600"
            rows={5}
            required
          />
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded-xl font-semibold hover:bg-red-700 transition"
          >
            Send Message
          </button>
        </form>

        {status && <p className="mt-4 text-center text-gray-700">{status}</p>}
      </section>
    </main>
  );
}
