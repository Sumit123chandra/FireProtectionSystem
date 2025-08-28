"use client";

import { useEffect, useState } from "react";

export default function PaymentPage() {
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    amount: "",
  });

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => setRazorpayLoaded(true);
    script.onerror = () => console.error("Razorpay SDK failed to load.");
    document.body.appendChild(script);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePayNow = async () => {
  if (!razorpayLoaded) return alert("Razorpay is not loaded yet. Try again.");

  const { name, phone, amount } = form;

  if (!name || !phone || !amount) return alert("Please fill all fields");
  if (isNaN(amount) || Number(amount) <= 0) return alert("Enter a valid amount");

  try {
    // Call backend API to create Razorpay order
    const res = await fetch("/api/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: Number(amount) * 100 }), // INR → paise
    });

    const data = await res.json();
    if (!data.success) return alert("Failed to create order");

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: data.order.amount,
      currency: data.order.currency,
      name: "KC Fire Protection",
      description: `Payment by ${name}, Phone: ${phone}`,
      order_id: data.order.id,
      handler: function (response) {
        // Redirect to receipt page
        const params = new URLSearchParams({
          name,
          phone,
          amount,
          paymentId: response.razorpay_payment_id,
        }).toString();

        window.location.href = `/payment/receipt?${params}`;
      },
      theme: { color: "#ff0000" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  } catch (err) {
    console.error(err);
    alert("Payment failed. Try again.");
  }
};


  return (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
    <h1 className="text-4xl font-extrabold mb-8 text-red-700 text-center">
      KC Fire Protection - Payments
    </h1>

    <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
      <p className="text-gray-600 mb-6 text-center">
        Enter your details and the amount to pay
      </p>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-1">Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={form.name}
            onChange={handleChange}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-1">Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="XXXXXXXXXX"
            value={form.phone}
            onChange={handleChange}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-1">Amount (INR)</label>
          <input
            type="number"
            name="amount"
            placeholder="1000"
            value={form.amount}
            onChange={handleChange}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition"
          />
        </div>

        <button
          onClick={handlePayNow}
          className="mt-4 bg-red-600 text-white py-3 rounded-xl hover:bg-red-700 font-semibold shadow-lg transition-all transform hover:scale-105"
        >
          Pay Now
        </button>
      </div>
    </div>
  </div>
);
}
