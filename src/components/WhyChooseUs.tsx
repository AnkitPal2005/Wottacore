"use client";

import { motion } from "framer-motion";
import { Users, MessageSquare, Repeat, Zap, Shield, HeartHandshake } from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    {
      title: "Experienced Engineers",
      description: "Senior architects and developers working together to build maintainable, battle-tested solutions.",
      icon: <Users size={22} />,
    },
    {
      title: "Transparent Communication",
      description: "Direct engineering contact, real-time Slack channels, and automated weekly sprint delivery updates.",
      icon: <MessageSquare size={22} />,
    },
    {
      title: "Agile Development",
      description: "Rapid iteration cycles with functional test builds delivered at the end of every single sprint.",
      icon: <Repeat size={22} />,
    },
    {
      title: "Fast Delivery",
      description: "Pre-assembled design libraries and template architectures allowing us to ship MVP releases incredibly fast.",
      icon: <Zap size={22} />,
    },
    {
      title: "Scalable Architecture",
      description: "Cloud designs ready to scale from zero users to millions of global connections with zero downtime.",
      icon: <Shield size={22} />,
    },
    {
      title: "Long-Term Support",
      description: "SLA-backed engineering support and performance tuning long after the initial version is deployed.",
      icon: <HeartHandshake size={22} />,
    },
  ];

  return (
    <section id="about-us" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-3">About Us</h2>
          <p className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Welcome to WottaCore Digital Solutions
          </p>
          <p className="text-sm text-slate-600 mt-4 leading-relaxed">
            WottaCore is a leading custom software development agency. We engineer high-performance web applications, cloud systems, and AI models designed for hyperscale. Partner with us to turn bold concepts into reality.
          </p>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="p-6 rounded-xl bg-slate-50 border border-slate-200 flex flex-col gap-4 hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                {point.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-800">{point.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
