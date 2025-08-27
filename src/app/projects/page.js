"use client";

import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "Residential Buildings",
      description: "Fire safety systems installed in apartments and housing complexes.",
      image: "/images/projects1.jpeg",
    },
    {
      title: "Commercial Complexes",
      description: "Complete fire protection solutions for office buildings and complexes.",
      image: "/images/projects2.jpeg",
    },
    {
      title: "Factories & Warehouses",
      description: "Industrial fire protection with advanced suppression systems.",
      image: "/images/projects3.jpeg",
    },
    {
      title: "Shopping Malls",
      description: "Comprehensive fire alarm and sprinkler systems for malls.",
      image: "/images/projects4.jpeg",
    },
    {
      title: "Hospitals & Schools",
      description: "Ensuring safety in healthcare and educational facilities.",
      image: "/images/projects5.jpeg",
    },
  ];

  return (
    <main className="space-y-16 p-8 max-w-6xl mx-auto">
      <header className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-red-700">Our Projects</h1>
        <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
          KC Fire Protection System has successfully delivered fire safety systems in a variety of sectors.
        </p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <Card
            key={idx}
            className="hover:scale-105 transition-transform duration-300 overflow-hidden"
          >
            
            <CardContent className="p-6 text-left">
              <h3 className="text-xl font-bold text-red-600">{project.title}</h3>
              <p className="text-gray-700 mt-2">{project.description}</p>
              <Link
                href={`/contact?service=${encodeURIComponent(project.title)}`}
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
