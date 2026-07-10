"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const faqs = [
    {
      q: "What is your typical project delivery timeline?",
      a: "Depending on the scale of the requirements, custom MVP solutions can be fully built and deployed in 4 to 8 weeks. Larger enterprise migration plans typically span 3 to 6 months.",
    },
    {
      q: "Do you offer post-launch maintenance SLA setups?",
      a: "Yes. We offer continuous SLA support packages that cover server monitoring, performance tuning, regular security patches, and incremental feature updates.",
    },
    {
      q: "How do you handle IP rights and code ownership?",
      a: "Once all milestones are achieved and payments are completed, 100% of the IP rights and source code repositories are fully transferred directly to your organization.",
    },
    {
      q: "Can we integrate WottaCore engineers directly with our team?",
      a: "Absolutely. We support staff augmentation models where our senior developers align with your Git workflows, sprint meetings, and communication systems.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Frequently Asked Questions</h2>
          <p className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Everything You Need to Know
          </p>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl bg-slate-50 border border-slate-200 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="text-base md:text-lg font-semibold text-slate-800">{faq.q}</span>
                  <ChevronDown
                    size={20}
                    className={`text-slate-500 transition-transform duration-300 ${isOpen ? "rotate-180 text-primary" : ""}`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-6 pt-0 text-slate-600 text-sm md:text-base border-t border-slate-200 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
