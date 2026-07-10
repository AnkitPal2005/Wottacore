"use client";

import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "Home", href: "#home" },
        { name: "About Us", href: "#about-us" },
        { name: "Portfolio", href: "#portfolio" },
        { name: "Contacts", href: "#contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Custom Software", href: "#services" },
        { name: "Web Development", href: "#services" },
        { name: "Mobile Apps", href: "#services" },
        { name: "Cloud & DevOps", href: "#services" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Testimonial", href: "#testimonials" },
        { name: "Career Portal", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Terms & Conditions", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-20 pb-10 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
        {/* Brand Information */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="WottaCore logo"
              className="h-12 w-auto object-contain rounded-full"
            />
            <span className="font-bold text-lg md:text-xl tracking-tight text-white flex flex-col md:flex-row md:items-center md:gap-2">
              <span>Wotta<span className="text-primary font-bold">Core</span></span>
            </span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
            High-performance engineering architectures for global enterprises and startups. Let&apos;s engineer the future.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200 text-sm font-semibold">
              Twitter
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200 text-sm font-semibold">
              LinkedIn
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200 text-sm font-semibold">
              Facebook
            </a>
          </div>
        </div>

        {/* Footer Links mapping */}
        {footerLinks.map((section) => (
          <div key={section.title} className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">{section.title}</h4>
            <ul className="space-y-2.5">
              {section.links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact Info */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider">Contact Details</h4>
          <ul className="space-y-3 text-slate-400">
            <li className="flex items-start gap-2 text-sm">
              <Mail size={16} className="text-primary mt-0.5" />
              <span>hello@wottacore.com</span>
            </li>
            <li className="flex items-start gap-2 text-sm">
              <Phone size={16} className="text-primary mt-0.5" />
              <span>+1 (555) 019-2834</span>
            </li>
            <li className="flex items-start gap-2 text-sm">
              <MapPin size={16} className="text-primary mt-0.5" />
              <span>San Francisco, CA</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p>© Copyright {currentYear} WottaCore Digital Solutions Pvt. Ltd. All Rights Reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
