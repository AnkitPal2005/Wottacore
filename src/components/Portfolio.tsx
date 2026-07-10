"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Portfolio() {
  const categories = ["All", "Next.js", ".NET", "Python"];
  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [
    {
      name: "Apex Trading Platform",
      category: "Next.js",
      link: "#",
      tech: ["Next.js", "Redis", "TypeScript", "AWS"],
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=600&auto=format&fit=crop",
      description: "A highly resilient algorithmic trading terminal featuring multi-currency transactions and real-time execution.",
    },
    {
      name: "Volt Telehealth System",
      category: ".NET",
      link: "#",
      tech: [".NET", "React", "PostgreSQL", "Azure"],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop",
      description: "HIPAA-compliant medical infrastructure hosting seamless video consults and centralized patient charts.",
    },
    {
      name: "Core Logistics AI",
      category: "Python",
      link: "#",
      tech: ["Python", "Kubernetes", "ASP.NET Core", "SQL Server"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop",
      description: "Intelligent freight distribution system optimizing transport routes across global supply chains.",
    },
  ];

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category.toUpperCase() === activeCategory.toUpperCase());

  return (
    <section id="portfolio" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Our Work</h2>
          <p className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Our Portfolio
          </p>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold tracking-wider transition-all duration-300 border ${
                activeCategory === cat
                  ? "bg-primary border-transparent text-white shadow-md"
                  : "bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group bg-slate-50 rounded-xl overflow-hidden border border-slate-200 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-200">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent" />
                  </div>

                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-semibold font-mono px-2 py-0.5 rounded bg-slate-200 text-slate-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-primary transition-colors duration-300">
                      {project.name}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">{project.description}</p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0">
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors duration-200"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
