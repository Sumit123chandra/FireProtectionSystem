/*"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [messages, setMessages] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const isAdmin = localStorage.getItem("admin");
    if (!isAdmin) {
      router.push("/admin/login");
    } else {
      fetchMessages();
    }
  }, [router]);

  const fetchMessages = async () => {
    try {
        const endpoint =
      process.env.NEXT_PUBLIC_HOSTING === "vercel"
        ? "/api/contact"
        : "/.netlify/functions/contact";

    //   const res = await fetch("/api/contact");
    // const res = await fetch("/.netlify/functions/contact");
      const res = await fetch(endpoint);
      const data = await res.json();
      if (data.success) {
        setMessages(data.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold text-red-600 mb-6">Admin Dashboard</h1>

      {messages.length === 0 ? (
        <p>No messages yet.</p>
      ) : (
        <div className="space-y-4">
          {messages.map((msg) => (
            <div key={msg._id} className="p-4 border rounded bg-white shadow">
              <p><strong>Name:</strong> {msg.name}</p>
              <p><strong>Email:</strong> {msg.email}</p>
              <p><strong>Service:</strong> {msg.service}</p>
              <p><strong>Message:</strong> {msg.message}</p>
              <p className="text-sm text-gray-500">Received: {new Date(msg.createdAt).toLocaleString()}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
*/

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [messages, setMessages] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const isAdmin = localStorage.getItem("admin");
    if (!isAdmin) {
      router.push("/admin/login");
    } else {
      fetchMessages();
    }
  }, [router]);

  const fetchMessages = async () => {
    try {
      const endpoint =
        process.env.NEXT_PUBLIC_HOSTING === "vercel"
          ? "/api/contact"
          : "/.netlify/functions/contact";

      const res = await fetch(endpoint);
      const data = await res.json();
      if (data.success) {
        setMessages(data.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // ✅ Delete a message
  const deleteMessage = async (id) => {
    try {
      const endpoint =
        process.env.NEXT_PUBLIC_HOSTING === "vercel"
          ? `/api/contact/${id}`
          : `/.netlify/functions/contact?id=${id}`;

      const res = await fetch(endpoint, {
        method: "DELETE",
      });

      const data = await res.json();
      if (data.success) {
        setMessages((prev) => prev.filter((msg) => msg._id !== id));
      } else {
        alert("Failed to delete message");
      }
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold text-red-600 mb-6">Admin Dashboard</h1>

      {messages.length === 0 ? (
        <p>No messages yet.</p>
      ) : (
        <div className="space-y-4">
          {messages.map((msg) => (
            <div
              key={msg._id}
              className="p-4 border rounded bg-white shadow flex justify-between items-start"
            >
              <div>
                <p><strong>Name:</strong> {msg.name}</p>
                <p><strong>Email:</strong> {msg.email}</p>
                <p><strong>Service:</strong> {msg.service}</p>
                <p><strong>Message:</strong> {msg.message}</p>
                <p className="text-sm text-gray-500">
                  Received: {new Date(msg.createdAt).toLocaleString()}
                </p>
              </div>
              <button
                onClick={() => deleteMessage(msg._id)}
                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
