import { Suspense } from "react";
import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <main className="p-8 space-y-16">
      {/* Hero / Intro */}
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-red-700 mb-4">
          Let&apos;s Talk Over a Coffee
        </h1>
        <p className="text-gray-700 text-lg">
          We’d love to discuss your fire safety requirements. Reach out and our
          team will get back to you.
        </p>
      </section>

      {/* Contact Info */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
        <div className="p-6 bg-red-50 rounded-xl shadow">
          <h3 className="text-xl font-bold text-red-700 mb-2">Ring Us Up</h3>
          <p className="text-gray-700 text-sm font-bold">+91 9910488125</p>
        </div>
        <div className="p-6 bg-red-50 rounded-xl shadow">
          <h3 className="text-xl font-bold text-red-700 mb-2">Send Us a Bird</h3>
          <p className="text-gray-700 text-sm">Fill the form to get in touch</p>
        </div>
      </section>

      {/* Contact Form wrapped in Suspense */}
      <Suspense fallback={<p className="text-center">Loading form...</p>}>
        <ContactForm />
      </Suspense>
    </main>
  );
}
