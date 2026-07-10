"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Hero() {
  const slides = [
    {
      title: "We are WottaCore",
      heading1: "Building Scalable Digital",
      heading2: "Products for Modern Businesses",
      btnText: "Get Started",
      btnLink: "#contact",
      bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Ready to Innovate",
      heading1: "Custom Web & Mobile Apps",
      heading2: "Tailored to Your Specific Scale",
      btnText: "Our Portfolio",
      btnLink: "#portfolio",
      bgImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Premium Solutions",
      heading1: "Cloud Architectures & DevOps",
      heading2: "Engineered for 99.99% Uptime",
      btnText: "Our Services",
      btnLink: "#services",
      bgImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-slate-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Background image with parallax alignment */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[7000ms] scale-105"
            style={{
              backgroundImage: `url(${slides[current].bgImage})`,
            }}
          />
          {/* Dark Overlay (gradient overlay matching Ashriya slider mask) */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-950/70" />
        </motion.div>
      </AnimatePresence>

      {/* Slide Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-start z-10 max-w-7xl mx-auto px-6 w-full text-left">
        <motion.p
          key={`title-${current}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-primary font-bold text-sm md:text-base tracking-widest uppercase mb-4"
        >
          {slides[current].title}
        </motion.p>
        <motion.h1
          key={`heading-${current}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl md:text-7xl font-extrabold text-white leading-tight tracking-tight mb-3"
        >
          {slides[current].heading1}
        </motion.h1>
        <motion.h2
          key={`heading2-${current}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-4xl font-semibold text-slate-300 mb-8"
        >
          {slides[current].heading2}
        </motion.h2>
        <motion.div
          key={`btn-${current}`}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a
            href={slides[current].btnLink}
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-white font-bold tracking-wider uppercase rounded-md bg-primary hover:bg-transparent transition-all duration-300 shadow-lg shadow-primary/20 hover:scale-105"
          >
            {slides[current].btnText}
          </a>
        </motion.div>
      </div>

      {/* Nav Controls */}
      <button
        onClick={handlePrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-white/10 transition-colors"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-white/10 transition-colors"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === i ? "bg-primary w-8" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
