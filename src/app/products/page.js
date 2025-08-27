"use client";

import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";


export default function Products() {
  const products = [
    {
      title: "Fire Alarm Panels",
      description: "Advanced panels for monitoring and controlling fire alarms efficiently.",
      image: "/images/panel.jpg",
    },
    {
      title: "Hooters & Detectors",
      description: "Reliable fire alarm hooters and detectors for all premises.",
      image: "/images/product2.jpeg",
    },
    {
      title: "CO₂ Cylinders",
      description: "High-quality CO₂ cylinders for sensitive and industrial areas.",
      image: "/images/product3.jpeg",
    },
    {
      title: "Novec Cylinders",
      description: "Environment-friendly Novec cylinders for safe fire suppression.",
      image: "/images/product4.jpg",
    },
    {
      title: "Emergency Equipment",
      description: "Complete range of emergency tools and safety kits.",
      image: "/images/product5.png",
    },
    {
      title: "Any Other Equipments",
      description: "Wide variety of other equiments from Solenoid to connectors.",
      image: "/images/equipment.jpg",
    },
  ];

  return (
    <main className="space-y-16 p-8 max-w-6xl mx-auto">
      <header className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-red-700">Our Products</h1>
        <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
          We supply certified fire protection products at the best cost.
        </p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product, idx) => (
          <Card
            key={idx}
            className="hover:scale-105 transition-transform duration-300 overflow-hidden"
          >
            <Image
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-6 text-left">
              <h3 className="text-xl font-bold text-red-600">{product.title}</h3>
              <p className="text-gray-700 mt-2">{product.description}</p>
              <Link
                href={`/contact?service=${encodeURIComponent(product.title)}`}
                className="mt-4 inline-block text-red-700 font-semibold hover:underline"
              >
                Enquire Now →
              </Link>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  );
}
