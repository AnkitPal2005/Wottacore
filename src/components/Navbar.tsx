"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "About Us", href: "#about-us" },
    { name: "Testimonial", href: "#testimonials" },
    { name: "Contacts", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-md py-3 border-b border-slate-200" : "bg-white py-5 border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <img
            src="/logo.png"
            alt="WottaCore logo"
            className="h-12 w-auto object-contain rounded-full group-hover:scale-105 transition-transform duration-300"
          />
          <span className="font-bold text-lg md:text-xl tracking-tight text-slate-800 flex flex-col md:flex-row md:items-center md:gap-2">
            <span>Wotta<span className="text-primary">Core</span></span>
            <span className="text-[10px] md:text-xs tracking-wider uppercase font-semibold text-slate-400 border-t md:border-t-0 md:border-l border-slate-200 pt-0.5 md:pt-0 md:pl-2">
              Digital Solutions
            </span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors duration-200 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white rounded-md bg-primary hover:bg-primary/95 shadow transition-all duration-200"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-600 hover:text-slate-900 focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-semibold text-slate-700 hover:text-primary py-2 border-b border-slate-100"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 flex items-center justify-center gap-2 w-full py-3 rounded-md bg-primary font-semibold text-white shadow hover:bg-primary/95 transition-all duration-300"
              >
                Get Started <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
