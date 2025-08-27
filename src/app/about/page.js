"use client";

export default function About() {
  return (
    <main className="space-y-16 p-8 max-w-5xl mx-auto">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-red-700">About KC Fire Protection</h1>
        <p className="text-gray-700 mt-4 text-lg max-w-3xl mx-auto">
          Led by an experienced Fire Protection Engineer, KC Fire Protection System provides cost-effective, reliable, and certified fire safety solutions for residential, commercial, and industrial buildings.
        </p>
        <p className="text-gray-700 mt-4 text-lg max-w-3xl mx-auto">
          We have successfully implemented fire safety solutions across multiple industries, ensuring compliance, safety, and peace of mind for our clients. Our team is committed to excellence in every project.
        </p>
      </section>

      {/* Mission, Vision, Values */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="bg-red-50 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-bold text-red-600">Our Mission</h2>
          <p className="text-gray-700 mt-2">
            To safeguard lives and properties through cutting-edge fire protection systems.
          </p>
        </div>
        <div className="bg-red-50 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-bold text-red-600">Our Vision</h2>
          <p className="text-gray-700 mt-2">
            To be the most trusted fire protection solutions provider in India.
          </p>
        </div>
        <div className="bg-red-50 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-bold text-red-600">Our Values</h2>
          <p className="text-gray-700 mt-2">
            Integrity, safety, reliability, and innovation in every project we undertake.
          </p>
        </div>
      </section>


      {/* Contact Link */}
      <section className="text-center">
        <a
          href="/contact"
          className="mt-6 inline-block bg-red-600 text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-red-700 transition"
        >
          Contact Us
        </a>
      </section>
    </main>
  );
}
