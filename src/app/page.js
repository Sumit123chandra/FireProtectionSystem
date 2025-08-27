"use client";

import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import React, { createContext } from "react";



export default function Home() {
  return (
    <div className="space-y-20 pt-24">
      {/* Hero Section */}
      <Swiper
  modules={[Autoplay]}
  autoplay={{ delay: 5000, disableOnInteraction: false }}
  loop={true}
>
  <SwiperSlide>
    <section
      className="relative text-center py-28 bg-cover bg-center text-white rounded-2xl shadow-xl"
      style={{ backgroundImage: "url('/images/hero1.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Protecting Lives, Preserving Futures
        </h1>
        <p className="text-xl mt-6">
          Trusted fire safety for industries, businesses & homes
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block bg-white text-red-700 px-6 py-3 rounded-xl font-semibold shadow hover:bg-gray-100"
        >
          Get a Consultation
        </Link>
      </div>
    </section>
  </SwiperSlide>

  <SwiperSlide>
    <section
      className="relative text-center py-28 bg-cover bg-center text-white rounded-2xl shadow-xl"
      style={{ backgroundImage: "url('/images/hero2.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          From Concept to Commissioning, We’ve Got You Covered
        </h1>
        <p className="text-xl mt-6">
          Seamless solutions from design to maintenance
        </p>
        <Link
          href="/services"
          className="mt-6 inline-block bg-white text-red-700 px-6 py-3 rounded-xl font-semibold shadow hover:bg-gray-100"
        >
          View Services
        </Link>
      </div>
    </section>
  </SwiperSlide>

  <SwiperSlide>
    <section
      className="relative text-center py-28 bg-cover bg-center text-white rounded-2xl shadow-xl"
      style={{ backgroundImage: "url('/images/hero3.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          From Concept to Commissioning, We’ve Got You Covered
        </h1>
        <p className="text-xl mt-6">
          Seamless solutions from design to maintenance
        </p>
        <Link
          href="/services"
          className="mt-6 inline-block bg-white text-red-700 px-6 py-3 rounded-xl font-semibold shadow hover:bg-gray-100"
        >
          View Services
        </Link>
      </div>
    </section>
  </SwiperSlide>

  <SwiperSlide>
    <section
      className="relative text-center py-28 bg-cover bg-center text-white rounded-2xl shadow-xl"
      style={{ backgroundImage: "url('/images/hero4.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          From Concept to Commissioning, We’ve Got You Covered
        </h1>
        <p className="text-xl mt-6">
          Seamless solutions from design to maintenance
        </p>
        <Link
          href="/services"
          className="mt-6 inline-block bg-white text-red-700 px-6 py-3 rounded-xl font-semibold shadow hover:bg-gray-100"
        >
          View Services
        </Link>
      </div>
    </section>
  </SwiperSlide>
</Swiper>


      {/* Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center py-16">
  <Card className="hover:scale-105 transition-transform duration-300 bg-red-50">
    <CardContent className="p-8">
      <h3 className="text-4xl md:text-5xl font-extrabold text-red-700">600+</h3>
      <p className="text-gray-700 mt-2 text-lg">Clients</p>
    </CardContent>
  </Card>

  <Card className="hover:scale-105 transition-transform duration-300 bg-red-50">
    <CardContent className="p-8">
      <h3 className="text-4xl md:text-5xl font-extrabold text-red-700">20+ Years</h3>
      <p className="text-gray-700 mt-2 text-lg">Experience</p>
    </CardContent>
  </Card>

  <Card className="hover:scale-105 transition-transform duration-300 bg-red-50">
    <CardContent className="p-8">
      <h3 className="text-4xl md:text-5xl font-extrabold text-red-700">500+</h3>
      <p className="text-gray-700 mt-2 text-lg">Projects Delivered</p>
    </CardContent>
  </Card>
</section>


      {/* Why Choose Us */}
      <section className="text-center py-16 bg-red-50 rounded-2xl px-6 md:px-20">
  <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-6">
    Why Choose KC Fire Protection?
  </h2>
  <p className="text-gray-700 max-w-3xl mx-auto text-lg">
    Licensed experts for fire prevention and life safety, authorized by the Fire Department.  
    Certified Fire System Auditors with proven expertise across residential, commercial, and industrial sectors.
  </p>

  <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
    <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
      <span className="text-red-600 text-2xl mt-1">✔️</span>
      <p className="text-gray-700 font-medium">Certified Fire Safety Professionals</p>
    </div>
    <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
      <span className="text-red-600 text-2xl mt-1">✔️</span>
      <p className="text-gray-700 font-medium">End-to-End Fire Protection Solutions</p>
    </div>
    <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
      <span className="text-red-600 text-2xl mt-1">✔️</span>
      <p className="text-gray-700 font-medium">Preventive Maintenance & Audits</p>
    </div>
    <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
      <span className="text-red-600 text-2xl mt-1">✔️</span>
      <p className="text-gray-700 font-medium">Advanced Fire Detection Systems</p>
    </div>
    <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
      <span className="text-red-600 text-2xl mt-1">✔️</span>
      <p className="text-gray-700 font-medium">24/7 Customer Support</p>
    </div>
  </div>
</section>


      {/* Services Preview */}
      <section className="text-center py-16">
  <h2 className="text-3xl font-bold text-red-700 mb-10">Our Services & Projects</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {/* Example Item */}
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
      <Image src="/images/services1.jpeg" alt="Gas Suppression System" className="w-full h-48 object-cover"/>
      <div className="p-4 text-left">
        <h3 className="text-lg font-bold text-gray-800 mt-1">Gas Suppression System</h3>
      </div>
    </div>

    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
      <Image src="/images/services2.jpeg" alt="Fire Detection System" className="w-full h-48 object-cover"/>
      <div className="p-4 text-left">
        <h3 className="text-lg font-bold text-gray-800 mt-1">Fire Detection System</h3>
      </div>
    </div>

    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
      <Image src="/images/services3.jpeg" alt="Fire Sprinkler System" className="w-full h-48 object-cover"/>
      <div className="p-4 text-left">
        <h3 className="text-lg font-bold text-gray-800 mt-1">Fire Sprinkler System</h3>
      </div>
    </div>

    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
      <Image src="/images/services4.jpeg" alt="Fire Hydrant System" className="w-full h-48 object-cover"/>
      <div className="p-4 text-left">
        <h3 className="text-lg font-bold text-gray-800 mt-1">Fire Hydrant System</h3>
      </div>
    </div>

    {/* Add more items below */}
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
      <Image src="/images/services5.jpeg" alt="Fire Protection System" className="w-full h-48 object-cover"/>
      <div className="p-4 text-left">
        <h3 className="text-lg font-bold text-gray-800 mt-1">Fire Protection System</h3>
      </div>
    </div>

    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
      <Image src="/images/services6.jpeg" alt="Fire Audit Training and Maintainence" className="w-full h-48 object-cover"/>
      <div className="p-4 text-left">
        <h3 className="text-lg font-bold text-gray-800 mt-1">Fire Audit Training and Maintainence</h3>
      </div>
    </div>

    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
      <Image src="/images/services7.jpeg" alt="Fire system repair and upgradation" className="w-full h-48 object-cover"/>
      <div className="p-4 text-left">
        <h3 className="text-lg font-bold text-gray-800 mt-1">Fire system repair and upgradation</h3>
      </div>
    </div>

    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
      <Image src="/images/services8.jpeg" alt="Technical Manpower Services" className="w-full h-48 object-cover"/>
      <div className="p-4 text-left">
        <h3 className="text-lg font-bold text-gray-800 mt-1">Technical Manpower Services</h3>
      </div>
    </div>


  </div>

  <div className="mt-10">
    <Link
      href="/services"
      className="bg-red-600 text-white px-6 py-3 rounded-xl shadow hover:bg-red-700 transition"
    >
      View All Services & Projects
    </Link>
  </div>
</section>

      {/* Client Section */}
<section className="text-center py-16 bg-gray-50">
  <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-4">
    Trusted By
  </h2>
  <p className="text-gray-600 mb-10 text-lg max-w-2xl mx-auto">
    Some of the top companies and industries rely on KC Fire Protection for their safety solutions
  </p>

  <div className="flex flex-wrap justify-center items-center gap-8">
    <div className="flex flex-col items-center hover:scale-110 transition-transform duration-300">
      <Image src="/images/client1.png" alt="Client 1" className="h-16 md:h-20 object-contain" />
    </div>
    <div className="flex flex-col items-center hover:scale-110 transition-transform duration-300">
      <Image src="/images/client2.png" alt="Client 2" className="h-16 md:h-20 object-contain" />
    </div>
    <div className="flex flex-col items-center hover:scale-110 transition-transform duration-300">
      <Image src="/images/client3.png" alt="Client 3" className="h-16 md:h-20 object-contain" />
    </div>
    <div className="flex flex-col items-center hover:scale-110 transition-transform duration-300">
      <Image src="/images/client4.png" alt="Client 4" className="h-16 md:h-20 object-contain" />
    </div>
    <div className="flex flex-col items-center">
      <h3 className="text-gray-700 font-medium text-sm md:text-base">
        And 100+ companies & industries
      </h3>
    </div>
  </div>
</section>

    </div>
  );
}
