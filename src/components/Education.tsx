"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, School } from "lucide-react";

const achievements = [
  {
    icon: GraduationCap,
    label: "Bachelor's Degree",
    value: "BSc Software Engineering",
    detail: "Jigjiga University · Class of 2026",
    color: "text-cyan-400", // Theme colors for each card
    glow: "bg-cyan-500",
  },
  {
    icon: Award,
    label: "University GPA",
    value: "3.7 / 4.0",
    detail: "Academic Performance",
    color: "text-amber-400",
    glow: "bg-amber-500",
  },
  {
    icon: BookOpen,
    label: "National Exit Exam",
    value: "81.25%",
    detail: "Ethiopian Higher Education Exit Exam",
    color: "text-emerald-400",
    glow: "bg-emerald-500",
  },
  {
    icon: School,
    label: "Secondary Education",
    value: "Gori Secondary School ",
    detail: "Completed by 443",
    color: "text-purple-400",
    glow: "bg-purple-500",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="max-w-[1400px] mx-auto px-6 lg:px-16 py-16 relative z-20"
    >
      <div className="flex items-center gap-3 mb-10">
        <div className="w-1.5 h-5 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,1)]"></div>
        <h2 className="text-2xl font-bold text-white">
          Education & Achievements
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {achievements.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative p-[1px] rounded-2xl overflow-hidden group bg-slate-800"
            >
              {/* AUTOMATIC SPINNING MOTION BORDER */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] aspect-square bg-[conic-gradient(from_0deg,transparent_0_300deg,currentColor_360deg)] opacity-20 group-hover:opacity-50 transition-opacity duration-300 z-0 ${item.color}`}
              />

              {/* Inner Card Content */}
              <div className="relative bg-slate-900/95 backdrop-blur-xl p-5 rounded-2xl h-full flex flex-col z-10 border border-white/5">
                {/* Icon with Glow */}
                <div className="mb-5 relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-slate-800/50 shadow-lg overflow-hidden">
                  <div
                    className={`absolute inset-0 opacity-20 blur-md ${item.glow}`}
                  />
                  <Icon className={`w-5 h-5 relative z-10 ${item.color}`} />
                </div>

                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                  {item.label}
                </p>
                <h3 className="mt-1.5 text-[15px] font-bold text-slate-100 leading-tight">
                  {item.value}
                </h3>
                <p className="mt-2 text-[11px] text-slate-400">{item.detail}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
