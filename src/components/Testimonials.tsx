"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "WottaCore delivered our core trading engine three weeks ahead of schedule. The code quality, system robustness, and DevOps setups are top-tier.",
      author: "Marcus Aurelius",
      title: "CTO, Apex Finance",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
    },
    {
      quote: "Their transparent communication style felt like an extension of our in-house engineering team. Excellent architecture design and execution.",
      author: "Sophia Chen",
      title: "VP of Engineering, Volt Health",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
    },
    {
      quote: "Deploying deep-learning workflows onto orchestrated clusters is inherently complex. WottaCore simplified the entire pipeline effortlessly.",
      author: "David Vance",
      title: "Director of Product, Core Logistics",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Testimonials</h2>
          <p className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Loved by Leading Tech Innovators
          </p>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 rounded-xl bg-white border border-slate-200 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <p className="text-slate-600 leading-relaxed italic mb-8">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-12 h-12 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-800">{t.author}</h4>
                  <p className="text-xs text-slate-500">{t.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
