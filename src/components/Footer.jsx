import React from 'react'
import {
  FaTwitter,
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaGithub,
} from 'react-icons/fa'

// ✅ If you use React Router
import { Link } from 'react-router-dom'

// ✅ If Next.js, use this instead:
// import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex-auto  w-full bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col items-center gap-6">
        {/* Logo + Brand */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-md bg-yellow-400 flex items-center justify-center">
            <span className="text-2xl">🛍️</span>
          </div>
          <h2 className="text-3xl font-extrabold text-red-600 tracking-wide">
            SHOPPER
          </h2>
        </div>

        {/* Redirect Links */}
        <ul className="flex flex-wrap justify-center gap-8 text-gray-700 font-medium text-lg">
          <li>
            <Link to="/company" className="hover:text-red-600 transition">
              Company
            </Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-red-600 transition">
              Products
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-red-600 transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-red-600 transition">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/offices" className="hover:text-red-600 transition">
              Offices
            </Link>
          </li>
        </ul>

        {/* Social Links */}
        <div className="flex items-center gap-5 text-2xl text-gray-800">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaTwitter />
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-500 transition"
          >
            <FaWhatsapp />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-black transition"
          >
            <FaGithub />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500 border-t w-full pt-4 text-center">
          Copyright © {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  )
}
