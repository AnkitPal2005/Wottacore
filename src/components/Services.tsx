"use client";

import { motion } from "framer-motion";
import {
  Code,
  Laptop,
  Smartphone,
  Cloud,
  Palette,
  Brain,
  CheckCircle2,
  GitBranch,
  ArrowRight,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Custom Software Development",
      description: "Tailored enterprise systems designed to optimize complex business processes and scale gracefully.",
      icon: <Code size={24} />,
    },
    {
      title: "Web Development",
      description: "High-performance, search-optimized web applications built with Next.js, React, and server-side runtimes.",
      icon: <Laptop size={24} />,
    },
    {
      title: "Mobile App Development",
      description: "Native iOS and Android applications engineered for fluid performance and exceptional user retention.",
      icon: <Smartphone size={24} />,
    },
    {
      title: "Cloud Solutions",
      description: "Fully automated, resilient AWS/Azure infrastructures implementing zero-trust security designs.",
      icon: <Cloud size={24} />,
    },
    {
      title: "UI/UX Design",
      description: "Immersive user experiences designed from continuous user-testing and high-fidelity wireframing.",
      icon: <Palette size={24} />,
    },
    {
      title: "AI Solutions",
      description: "Integrating intelligent LLMs, custom training algorithms, and automated pipeline intelligence.",
      icon: <Brain size={24} />,
    },
    {
      title: "QA Testing",
      description: "Comprehensive end-to-end automated pipelines ensuring regression-free application deployments.",
      icon: <CheckCircle2 size={24} />,
    },
    {
      title: "DevOps",
      description: "Continuous delivery setups using Docker, Kubernetes, and streamlined Git-driven deployment flows.",
      icon: <GitBranch size={24} />,
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Our Services</h2>
          <p className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Solutions Built for Scale and Resilience
          </p>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="group p-6 rounded-xl bg-white border border-slate-200 hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col justify-between min-h-[260px]"
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{service.description}</p>
              </div>

              <div className="mt-6 flex items-center gap-1 text-xs font-bold text-primary group-hover:text-primary/80 transition-colors duration-300 cursor-pointer">
                <span>View Details</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
