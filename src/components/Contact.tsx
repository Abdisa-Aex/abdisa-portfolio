"use client";

import { motion } from "framer-motion";
import { Mail, Send, MapPin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:abdisaalex77@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section
      id="contact"
      className="max-w-[1400px] mx-auto px-6 lg:px-16 py-20 relative z-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Let's Build Something{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Meaningful
          </span>{" "}
          Together.
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm leading-relaxed">
          I am open to software development opportunities, IT-related positions,
          internships, professional collaborations, and projects where I can
          contribute and continue growing as a developer.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* CONTACT INFO CARD */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative p-[1px] rounded-2xl overflow-hidden group bg-slate-800"
        >
          {/* AUTO MOTION BORDER */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] aspect-square bg-[conic-gradient(from_0deg,transparent_0_300deg,#06b6d4_360deg)] opacity-30 group-hover:opacity-60 transition-opacity duration-300 z-0"
          />

          <div className="relative bg-slate-900/95 backdrop-blur-xl p-6 md:p-8 rounded-2xl h-full border border-white/5 z-10">
            <h3 className="text-lg font-bold text-white mb-6">
              Contact Information
            </h3>

            <a
              href="mailto:abdisaalex77@gmail.com"
              className="group/item flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-slate-800/50 hover:bg-slate-800 hover:border-cyan-500/30 transition-all duration-300 mb-3"
            >
              <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover/item:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
                  Email
                </p>
                <p className="text-sm text-slate-200 mt-0.5">
                  abdisaalex77@gmail.com
                </p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-slate-800/50 mb-6">
              <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
                  Location
                </p>
                <p className="text-sm text-slate-200 mt-0.5">
                  Addis Ababa, Ethiopia
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-auto">
              <a
                href="https://github.com/Abdisa-Aex"
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-800 border border-white/5 hover:border-slate-500 hover:text-white text-slate-300 text-xs font-medium transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.23-1.63-1.23-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.92.1-.72.39-1.21.7-1.49-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.27-2.6 5.21-5.08 5.49.4.35.75 1.02.75 2.06V22c0 .29.2.63.76.52A11.1 11.1 0 0 0 12 .9Z" />
                </svg>
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/abdisa-alex-96ba03353/"
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-[#0A66C2]/10 border border-[#0A66C2]/20 hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/20 text-[#0A66C2] hover:text-[#3b82f6] text-xs font-medium transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM8.02 18.45H5.06V9h2.96v9.45ZM6.54 7.71a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12 10.74h-2.96v-4.6c0-1.1-.02-2.52-1.54-2.52-1.54 0-1.78 1.2-1.78 2.44v4.68H9.3V9h2.84v1.29h.04c.4-.75 1.36-1.54 2.8-1.54 3 0 3.56 1.97 3.56 4.53v5.17Z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>

        {/* CONTACT FORM CARD */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative p-[1px] rounded-2xl overflow-hidden group bg-slate-800"
        >
          {/* AUTO MOTION BORDER */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] aspect-square bg-[conic-gradient(from_0deg,transparent_0_300deg,#3b82f6_360deg)] opacity-30 group-hover:opacity-60 transition-opacity duration-300 z-0"
          />

          <div className="relative bg-slate-900/95 backdrop-blur-xl p-6 md:p-8 rounded-2xl h-full border border-white/5 z-10 flex flex-col">
            <h3 className="text-lg font-bold text-white mb-6">
              Send a Message
            </h3>

            <div className="space-y-4 flex-grow">
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="w-full rounded-xl border border-white/10 bg-slate-800/50 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-cyan-500/50 focus:bg-slate-800 transition-all duration-300"
              />
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className="w-full rounded-xl border border-white/10 bg-slate-800/50 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-cyan-500/50 focus:bg-slate-800 transition-all duration-300"
              />
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your Message..."
                className="w-full rounded-xl border border-white/10 bg-slate-800/50 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-cyan-500/50 focus:bg-slate-800 transition-all duration-300 resize-none"
              />
            </div>

            <button
              type="submit"
              className="mt-6 w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-3.5 text-sm font-semibold text-white hover:shadow-[0_0_25px_rgba(34,211,238,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              <Send className="w-4 h-4" /> Send Message
            </button>
            <p className="mt-3 text-center text-[10px] text-slate-500">
              Opens your email app with the message ready to send.
            </p>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
