// src/app/privacy-policy/page.js
"use client";

export default function PrivacyPolicy() {
  return (
    <main className="max-w-5xl mx-auto p-8 space-y-8">
      <h1 className="text-4xl font-bold text-red-700 text-center">
        Privacy Policy
      </h1>

      <p className="text-gray-700 text-lg">
        At KC Fire Protection System, your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website.
      </p>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-red-600">1. Information We Collect</h2>
        <p className="text-gray-700">
          We may collect personal information such as your name, email address, phone number, and messages when you fill out contact forms or subscribe to our services.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-red-600">2. How We Use Your Information</h2>
        <p className="text-gray-700">
          The information you provide is used to respond to inquiries, provide services, improve our website, and communicate important updates. We do not sell your personal information to third parties.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-red-600">3. Cookies and Tracking</h2>
        <p className="text-gray-700">
          Our website may use cookies or similar technologies to enhance your browsing experience. You can manage cookie settings through your browser.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-red-600">4. Security</h2>
        <p className="text-gray-700">
          We take appropriate measures to protect your personal data from unauthorized access, alteration, or disclosure.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-red-600">5. Contact Us</h2>
        <p className="text-gray-700">
          If you have any questions regarding this Privacy Policy, please contact us at: <br />
          <strong>Email:</strong> enquiry@kcfireprotection.com <br />
          <strong>Phone:</strong> 9910488125
        </p>
      </section>
    </main>
  );
}
