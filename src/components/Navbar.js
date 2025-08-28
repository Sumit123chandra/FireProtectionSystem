"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-red-700 text-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/services1.jpeg"
            alt="KC Fire Protection Logo"
            width={40}
            height={40}
            className="rounded"
          />
          <span className="font-bold text-lg">KC Fire Protection</span>
        </Link>

        {/* Pay Now button */}
        <Link
          href="/payment"
          className="bg-white text-red-700 px-4 py-1 rounded hover:bg-gray-200 font-semibold"
        >
          Pay Now
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-gray-200 hover:underline transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-red-700 px-6 py-4 space-y-4 flex flex-col">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="hover:text-gray-200 transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
