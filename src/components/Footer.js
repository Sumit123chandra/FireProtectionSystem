import Link from "next/link";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">KC Fire Protection</h2>
          <p className="text-gray-400">
            Reliable fire safety solutions for residential, commercial, and industrial sectors.
          </p>
          <p className="text-gray-300">
            Udyam Registration ID: <span className="font-medium text-white">UDYAM-DL-10-0098808</span>
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-red-500">Home</Link></li>
            <li><Link href="/services" className="hover:text-red-500">Services</Link></li>
            <li><Link href="/products" className="hover:text-red-500">Products</Link></li>
            <li><Link href="/projects" className="hover:text-red-500">Projects</Link></li>
            <li><Link href="/about" className="hover:text-red-500">About</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-red-500">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-red-500">Terms and Conditions</Link></li>
            <li><Link href="/contact" className="hover:text-red-500">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
          <p className="flex items-center gap-2">
            <FiPhone /> +91 9910488125
          </p>

          {/* Socials */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-red-500"><FaFacebookF /></a>
            <a href="#" className="hover:text-red-500"><FaTwitter /></a>
            <a href="#" className="hover:text-red-500"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-red-500"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} KC Fire Protection System | All Rights Reserved
      </div>
    </footer>
  );
}
