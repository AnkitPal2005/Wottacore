"use client";

import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", phone: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
        {/* Left Side: Text and CTAs */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Our Contacts</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
            Get in Touch With Us
          </h3>
          <p className="text-slate-600 leading-relaxed mb-8">
            WottaCore always welcome your comments, queries and suggestions. If you have any queries, please don&apos;t hesitate to contact us. You can contact us for advice on software architectures, website development quotation reviews, or general project planning.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-slate-700 font-semibold">
              <Phone size={18} className="text-primary" />
              <span>+1 (555) 019-2834</span>
            </div>
            <div className="flex items-center gap-3 text-slate-700 font-semibold">
              <Mail size={18} className="text-primary" />
              <span>hello@wottacore.com</span>
            </div>
            <div className="flex items-center gap-3 text-slate-700 font-semibold">
              <MapPin size={18} className="text-primary" />
              <span>San Francisco, CA</span>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 md:p-10 border border-slate-200 shadow-lg"
          >
            <h4 className="text-xl font-bold text-slate-800 mb-6">Send Us a Message</h4>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-500/10 border border-green-500/30 text-green-700 p-6 rounded-2xl text-center"
              >
                <p className="font-bold text-lg mb-2">Message Sent Successfully!</p>
                <p className="text-sm">We&apos;ve received your request and will reach out to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name.."
                    className="w-full px-4 py-3 rounded-md bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-primary transition-all duration-200"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Your phone.."
                      className="w-full px-4 py-3 rounded-md bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-primary transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Your email.."
                      className="w-full px-4 py-3 rounded-md bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-primary transition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Your Message
                  </label>
                  <textarea
                    rows={6}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Your message.."
                    className="w-full px-4 py-3 rounded-md bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-primary transition-all duration-200"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-md bg-primary font-semibold text-white shadow hover:bg-primary/95 flex items-center justify-center gap-2 hover:scale-[1.01] transition-all duration-300"
                >
                  <Send size={16} />
                  SEND MESSAGE
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
