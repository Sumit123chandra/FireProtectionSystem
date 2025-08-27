// src/app/services/page.js
"use client";

import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

// export const metadata = {
//   title: "Our Services | KC Fire Protection System",
//   description:
//     "KC Fire Protection System provides fire detection, suppression, audits, and manpower services for homes, industries, and commercial spaces.",
// };

export default function Services() {
  const services = [
    {
      title: "Fire Detection System",
      description: "We install advanced fire alarm systems including detectors, sensors, and control panels, ensuring instant alerts and maximum protection for your premises.",
      image: "/images/services2.jpeg",
      link: "/services#detection",
    },
    {
      title: "Fire Hydrant & Sprinklers",
      description: "Our water-based hydrant and sprinkler systems ensure rapid suppression of fire hazards in residential, commercial, and industrial environments.",
      image: "/images/services4.jpeg",
      link: "/services#hydrant",
    },
    {
      title: "Fire Suppression System",
      description: "We provide CO₂ and Novec-based suppression systems that are safe for critical areas such as server rooms, data centers, and manufacturing units.",
      image: "/images/product4.jpg",
      link: "/services#gas",
    },
    {
      title: "Audit & Maintenance",
      description: "We conduct annual fire safety audits and provide preventive maintenance services to ensure your fire protection systems are always up to date.",
      image: "/images/services6.jpeg",
      link: "/services#audit",
    },
    {
      title: "Fire System Repairs & Upgradation",
      description: "Our team specializes in repairing and upgrading outdated systems, keeping them compliant with the latest safety standards.",
      image: "/images/services7.jpeg",
      link: "/services#repairs",
    },
    {
      title: "Technical Manpower Services",
      description: "We provide certified fire safety engineers and technicians for installation, operation, and maintenance of fire protection systems.",
      image: "/images/services8.jpeg",
      link: "/services#technical",
    },
    {
      title: "Panels",
      description: "Panels connection and integration.",
      image: "/images/panel.jpg",
      link: "/services#panel",
    },
    {
      title: "Other equipments",
      description: "Any other equipment also.",
      image: "/images/equipment.jpg",
      link: "/services#equipments",
    },
  ];

  return (
    <main className="space-y-16 p-8">
      <header className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-red-700">
          Our Services
        </h1>
        <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
           At KC Fire Protection System, we provide end-to-end fire safety
          solutions tailored for residential, commercial, and industrial
          facilities. Explore our wide range of services designed to keep you
          safe and compliant.
        </p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <Card
            key={idx}
            className="hover:scale-105 transition-transform duration-300 overflow-hidden"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-6 text-left">
              <h3 className="text-xl font-bold text-red-600">{service.title}</h3>
              <p className="text-gray-700 mt-2">{service.description}</p>
              <Link
                href={`/contact?service=${encodeURIComponent(service.title)}`}
                className="mt-4 inline-block text-red-700 font-semibold hover:underline"
              >
                Inquire →
              </Link>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  );
}
