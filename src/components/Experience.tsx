"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, Code2 } from "lucide-react";

const experiences = [
  {
    icon: BriefcaseBusiness,
    role: "IT Officer",
    organization: "Yonatan BT Furniture",
    period: "Current",
    color: "from-emerald-500/40 via-teal-500/20", // Theme for IT role
    glow: "bg-emerald-500",
    bullets: [
      "Troubleshoot hardware and software problems",
      "Install and configure computer software",
      "Diagnose and resolve printer problems",
      "Support printer color and toner refill activities",
      "Assist with daily IT operations",
      "Provide technical support to improve workplace efficiency",
    ],
    tags: ["IT Support", "Troubleshooting", "Windows", "Linux"],
  },
  {
    icon: Code2,
    role: "Software Development Intern — Frontend",
    organization: "GA Engineering Group",
    period: "Internship",
    color: "from-cyan-500/40 via-blue-500/20", // Theme for Dev role
    glow: "bg-cyan-500",
    bullets: [
      "Selected through an examination and practical project evaluation process",
      "Contributed to frontend development for company websites",
      "Developed UI components using React",
      "Used Tailwind CSS for responsive interface styling",
      "Implemented navigation using React Router",
      "Collaborated within a professional dev environment",
      "Gained basic exposure to Odoo ERP",
    ],
    tags: ["React", "Tailwind CSS", "React Router", "Odoo ERP"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="max-w-[1400px] mx-auto px-6 lg:px-16 py-16 relative z-20"
    >
      <div className="flex items-center gap-3 mb-10">
        <div className="w-1.5 h-5 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,1)]"></div>
        <h2 className="text-2xl font-bold text-white">
          Professional Experience
        </h2>
      </div>

      <div className="space-y-6">
        {experiences.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.organization}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative p-[1px] rounded-2xl overflow-hidden group bg-slate-800"
            >
              {/* AUTOMATIC SPINNING MOTION BORDER */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] aspect-square bg-[conic-gradient(from_0deg,transparent_0_300deg,currentColor_360deg)] opacity-30 group-hover:opacity-60 transition-opacity duration-300 z-0 ${item.glow.replace("bg-", "text-")}`}
              />

              {/* Inner Card Content */}
              <div className="relative bg-slate-900/95 backdrop-blur-xl p-6 lg:p-8 rounded-2xl h-full flex flex-col md:flex-row gap-6 z-10 border border-white/5">
                {/* Left Column: Icon */}
                <div className="flex-shrink-0">
                  <div
                    className={`p-3.5 rounded-xl border border-white/10 bg-slate-800/50 text-white shadow-xl flex items-center justify-center relative overflow-hidden`}
                  >
                    {/* Icon Glow */}
                    <div
                      className={`absolute inset-0 opacity-20 ${item.glow} blur-xl`}
                    />
                    <Icon className="w-6 h-6 relative z-10" />
                  </div>
                </div>

                {/* Right Column: Details */}
                <div className="flex-grow">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-slate-100">
                      {item.role}
                    </h3>
                    <span className="text-[10px] px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-slate-300 font-medium tracking-wide uppercase shadow-sm">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-cyan-400 mb-4">
                    {item.organization}
                  </p>

                  <ul className="text-[13px] text-slate-400 space-y-2 mb-6">
                    {item.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5">
                        <span className="text-slate-600 mt-0.5">▹</span>
                        <span className="leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] px-3 py-1 rounded-md bg-slate-800 border border-slate-700 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors cursor-default"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
