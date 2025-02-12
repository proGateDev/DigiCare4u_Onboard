"use client";
import { useState } from "react";
import { ImMobile } from "react-icons/im";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu toggle
  const pathname = usePathname(); // Get the current path

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => pathname === path; // Check if a path is active

  return (
    <nav className="bg-white w-full mx-auto sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-2">
        {/* Left Side Logo */}
        <div className="flex items-center">
          <Link href="/">
            <img
              src="/images/logo.jpg" // Replace with your logo URL
              alt="Logo"
              className="w-13 h-12 cursor-pointer rounded-md" // 50x50
            />
          </Link>
        </div>

        {/* Navigation Links for desktop */}
        <div className={`hidden md:flex space-x-6`}>
          <Link href="/">
            <p
              className={`${
                isActive("/") ? "text-white font-bold bg-blue-700 px-5 rounded" : "text-gray-700"
              } hover:text-gray-200`}
            >
              Home
            </p>
          </Link>
          <Link href="/about">
            <p
              className={`${
                isActive("/about") ? "text-white font-bold bg-blue-700 px-5 rounded" : "text-gray-700"
              } hover:text-gray-200`}
            >
              About
            </p>
          </Link>
          <Link href="/pricing">
            <p
              className={`${
                isActive("/pricing") ? "text-white font-bold bg-blue-700 px-5 rounded" : "text-gray-700"
              } hover:text-gray-200`}
            >
              Pricing
            </p>
          </Link>
          <Link href="/features">
            <p
              className={`${
                isActive("/features")
                  ? "text-white font-bold bg-blue-700 px-5 rounded"
                  : "text-gray-700"
              } hover:text-gray-200`}
            >
              Features
            </p>
          </Link>
          <Link href="/testimonials">
            <p
              className={`${
                isActive("/testimonials")
                  ? "text-white font-bold bg-blue-700 px-5 rounded"
                  : "text-gray-700"
              } hover:text-gray-200`}
            >
              Testimonials
            </p>
          </Link>
          <Link href="/blog">
            <p
              className={`${
                isActive("/blog") ? "text-white font-bold bg-blue-700 px-5 rounded" : "text-gray-700"
              } hover:text-gray-200`}
            >
              Blog
            </p>
          </Link>
          <Link href="/contact">
            <p
              className={`${
                isActive("/contact") ? "text-white font-bold bg-blue-700 px-5 rounded" : "text-gray-700"
              } hover:text-gray-200`}
            >
              Contact
            </p>
          </Link>
        </div>

        {/* Right Side Login Button and Mobile Menu Toggle */}
        <div className="flex items-center justify-between">
          <Link href="tel:+919876543210" className="mx-3">
            <button className="bg-blue-700 text-white px-4 py-2 rounded flex items-center space-x-2 hover:bg-blue-700 transition duration-200">
              <ImMobile />
              <span>Contact</span>
            </button>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
            <button
              className="text-gray-700 focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      <div
        className={`md:hidden ${isMenuOpen ? "block" : "hidden"} space-y-4 p-4`}
      >
        <Link href="/">
          <p
            className={`${
              isActive("/") ? "text-white font-bold bg-blue-700 px-5 rounded" : "text-gray-700"
            } hover:text-blue-700`}
          >
            Home
          </p>
        </Link>
        <Link href="/about">
          <p
            className={`${
              isActive("/about") ? "text-white font-bold bg-blue-700 px-5 rounded" : "text-gray-700"
            } hover:text-blue-700`}
          >
            About
          </p>
        </Link>
        <Link href="/pricing">
          <p
            className={`${
              isActive("/pricing") ? "text-white font-bold bg-blue-700 px-5 rounded" : "text-gray-700"
            } hover:text-blue-700`}
          >
            Pricing
          </p>
        </Link>
        <Link href="/testimonials">
          <p
            className={`${
              isActive("/testimonials") ? "text-white font-bold bg-blue-700 px-5 rounded" : "text-gray-700"
            } hover:text-blue-700`}
          >
            Testimonials
          </p>
        </Link>
        <Link href="/blog">
          <p
            className={`${
              isActive("/blog") ? "text-white font-bold bg-blue-700 px-5 rounded" : "text-gray-700"
            } hover:text-blue-700`}
          >
            Blog
          </p>
        </Link>
        <Link href="/contact">
          <p
            className={`${
              isActive("/contact") ? "text-white font-bold bg-blue-700 px-5 rounded" : "text-gray-700"
            } hover:text-blue-700`}
          >
            Contact
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
