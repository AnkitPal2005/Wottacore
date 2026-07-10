"use client";

import { motion } from "framer-motion";

export default function TrustedCompanies() {
  const companies = [
    { name: "Vercel", logo: "VERCEL" },
    { name: "Stripe", logo: "STRIPE" },
    { name: "Linear", logo: "LINEAR" },
    { name: "Apple", logo: "APPLE" },
    { name: "Sentry", logo: "SENTRY" },
    { name: "Supabase", logo: "SUPABASE" },
  ];

  return (
    <section className="py-12 border-y border-slate-200 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-bold uppercase tracking-wider text-slate-500 mb-8">
          Accelerating growth for forward-thinking engineering teams
        </p>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-items-center">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <span className="text-lg font-extrabold tracking-widest text-slate-400 group-hover:text-primary transition-colors duration-300">
                {company.logo}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
