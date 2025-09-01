"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react"; // Using lucide-react for icons
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {
      title: "PROJECTS",
      href: "/projects",
      superscript: "10",
    },
    {
      title: "ABOUT",
      href: "/about",
    },
    {
      title: "RÉSUMÉ",
      href: "/resume.pdf", // Example link to a PDF
      external: true,
    },
    {
      title: "CONTACT",
      href: "/contact",
    },
  ];

  return (
    <nav className="bg-white w-full z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left Side: Logo and Name */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center">
              {/* You can place a logo initial or icon here */}
              <div className="w-3 h-3 bg-black rounded-full"></div>
            </div>
            <span className="font-semibold text-lg tracking-widest">
              KATHERINE LE
            </span>
          </Link>

          {/* Right Side: Desktop Navigation Links */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-gray-800 hover:text-gray-500 text-sm font-medium tracking-widest flex items-center"
              >
                {link.title}
                {link.superscript && (
                  <sup className="ml-1 text-xs">{link.superscript}</sup>
                )}
                {link.external && <ArrowUpRight className="ml-1 h-4 w-4" />}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-500 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-gray-800 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium tracking-widest flex items-center"
              >
                {link.title}
                {link.superscript && (
                  <sup className="ml-1 text-xs">{link.superscript}</sup>
                )}
                {link.external && <ArrowUpRight className="ml-1 h-4 w-4" />}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
