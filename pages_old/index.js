import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-700 via-red-600 to-red-500 text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold">Fire Protection Systems & Services</h1>
        <p className="mt-6 text-lg max-w-2xl">
          We provide turnkey fire protection solutions: fire alarms, CO₂ & Novec cylinders,
          sprinklers, hydrants, and annual maintenance contracts at affordable prices.
        </p>
        <div className="mt-8 flex gap-4">
          <Link href="/services" className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold">Our Services</Link>
          <Link href="/contact" className="border border-white px-6 py-3 rounded-lg">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}
