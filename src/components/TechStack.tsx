"use client";

import { motion } from "framer-motion";

export default function TechStack() {
  const techs = [
    { name: ".NET", category: "Backend" },
    { name: "ASP.NET Core", category: "Backend" },
    { name: "C#", category: "Language" },
    { name: "Angular", category: "Frontend" },
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "TypeScript", category: "Language" },
    { name: "PostgreSQL", category: "Database" },
    { name: "SQL Server", category: "Database" },
    { name: "Azure", category: "Cloud" },
    { name: "AWS", category: "Cloud" },
    { name: "Docker", category: "DevOps" },
    { name: "Kubernetes", category: "DevOps" },
    { name: "Redis", category: "Database" },
    { name: "GitHub", category: "DevOps" },
  ];

  return (
    <section className="py-24 bg-bg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Our Technology Stack</h2>
          <p className="text-3xl md:text-5xl font-bold tracking-tight bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
            Modern Tools for Cutting-Edge Solutions
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {techs.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-6 py-3 rounded-full glass border border-white/5 hover:border-accent/40 hover:bg-accent/5 cursor-pointer text-sm font-medium text-slate-300 hover:text-white transition-all duration-200 flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span>{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
