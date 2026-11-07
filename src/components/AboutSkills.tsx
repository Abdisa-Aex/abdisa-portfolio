"use client";

import {
  Database,
  HardDrive,
  Key,
  Lock,
  Monitor,
  Printer,
  Server,
  Settings,
  Shield,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { motion } from "motion/react";
import {
  SiClerk,
  SiCloudinary,
  SiCss,
  SiExpress,
  SiFirebase,
  SiFramer,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSocketdotio,
  SiSwagger,
  SiTailwindcss,
} from "react-icons/si";

const iconMap = {
  HTML5: { icon: <SiHtml5 />, color: "text-[#E34F26]" },
  CSS3: { icon: <SiCss />, color: "text-[#1572B6]" },
  JavaScript: { icon: <SiJavascript />, color: "text-[#F7DF1E]" },
  React: { icon: <SiReact />, color: "text-[#61DAFB]" },
  "Next.js": { icon: <SiNextdotjs />, color: "text-white" },
  "Tailwind CSS": { icon: <SiTailwindcss />, color: "text-[#06B6D4]" },
  "Node.js": { icon: <SiNodedotjs />, color: "text-[#339933]" },
  "Express.js": { icon: <SiExpress />, color: "text-white" },
  "REST APIs": { icon: <Server />, color: "text-blue-400" },
  Auth: { icon: <ShieldCheck />, color: "text-emerald-400" },
  JSON: { icon: <SiJsonwebtokens />, color: "text-yellow-400" },
  Python: { icon: <SiPython />, color: "text-[#3776AB]" },
  MongoDB: { icon: <SiMongodb />, color: "text-[#47A248]" },
  PostgreSQL: { icon: <SiPostgresql />, color: "text-[#4169E1]" },
  MySQL: { icon: <SiMysql />, color: "text-[#4479A1]" },
  "Schema Design": { icon: <Database />, color: "text-purple-400" },
  Git: { icon: <SiGit />, color: "text-[#F05032]" },
  GitHub: { icon: <SiGithub />, color: "text-white" },
  Swagger: { icon: <SiSwagger />, color: "text-[#85EA2D]" },
  Firebase: { icon: <SiFirebase />, color: "text-[#FFCA28]" },
  Cloudinary: { icon: <SiCloudinary />, color: "text-[#3448C5]" },
  Clerk: { icon: <SiClerk />, color: "text-white" },
  "Socket.io": { icon: <SiSocketdotio />, color: "text-white" },
  "Framer Motion": { icon: <SiFramer />, color: "text-[#F024B2]" },
  RBAC: { icon: <Shield />, color: "text-indigo-400" },
  "4-Level Permissions": { icon: <Key />, color: "text-amber-400" },
  "2FA": { icon: <Lock />, color: "text-rose-400" },
  JWT: { icon: <SiJsonwebtokens />, color: "text-yellow-400" },
  "Refresh Tokens": { icon: <Settings />, color: "text-cyan-400" },
  "API Permissions": { icon: <Server />, color: "text-blue-400" },
  Windows: { icon: <Monitor />, color: "text-[#0078D7]" },
  Linux: { icon: <SiLinux />, color: "text-[#FCC624]" },
  Troubleshooting: { icon: <Wrench />, color: "text-orange-400" },
  Hardware: { icon: <HardDrive />, color: "text-slate-400" },
  "Printer Maintenance": { icon: <Printer />, color: "text-slate-300" },
  "IT Support": { icon: <Monitor />, color: "text-teal-400" },
};

const skillGroups = [
  {
    title: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "Auth", "JSON", "Python"],
  },
  {
    title: "Database",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Schema Design"],
  },
  {
    title: "Tools",
    items: [
      "Git",
      "GitHub",
      "Swagger",
      "Firebase",
      "Cloudinary",
      "Clerk",
      "Socket.io",
      "Framer Motion",
    ],
  },
  {
    title: "Security",
    items: [
      "RBAC",
      "4-Level Permissions",
      "2FA",
      "JWT",
      "Refresh Tokens",
      "API Permissions",
    ],
  },
  {
    title: "IT & Systems",
    items: [
      "Windows",
      "Linux",
      "Troubleshooting",
      "Hardware",
      "Printer Maintenance",
      "IT Support",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

export default function AboutSkills() {
  return (
    <>
      {/* =========================================
          1. ABOUT ME SECTION
          ========================================= */}
      <section
        id="about"
        className="max-w-[1400px] mx-auto px-6 lg:px-16 pt-20 pb-12 relative z-20 scroll-mt-32"
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1.5 h-5 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
          <h2 className="text-2xl font-bold text-white">About Me</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative p-[1px] rounded-2xl bg-slate-800 overflow-hidden group hover:bg-slate-700 transition-colors duration-500"
        >
          <motion.div
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent z-0"
          />

          <div className="relative bg-slate-900/95 backdrop-blur-xl p-6 md:p-8 rounded-2xl z-10">
            <p className="text-[14px] text-slate-300 leading-relaxed max-w-5xl">
              I am{" "}
              <span className="text-white font-medium">
                Abdisa Alemayehu Niguse
              </span>
              , a Software Engineering graduate from Jigjiga University. I
              combine academic knowledge with practical experience in full-stack
              development and IT operations. Currently an{" "}
              <span className="text-cyan-400 font-medium">IT Officer</span> and
              former{" "}
              <span className="text-cyan-400 font-medium">
                Frontend Intern at GA Engineering Group
              </span>
              , I build scalable web apps and solve technical challenges.
            </p>
          </div>
        </motion.div>
      </section>

      {/* =========================================
          2. SKILLS SECTION
          ========================================= */}
      <section
        id="skills"
        className="max-w-[1400px] mx-auto px-6 lg:px-16 py-12 relative z-20 scroll-mt-32"
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1.5 h-5 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,1)]"></div>
          <h2 className="text-2xl font-bold text-white">My Skills</h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillGroups.map((group, idx) => (
            <motion.div
              key={group.title}
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative p-[1px] rounded-2xl overflow-hidden group bg-slate-800"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] aspect-square bg-[conic-gradient(from_0deg,transparent_0_300deg,#3b82f6_360deg)] opacity-50 group-hover:opacity-100 transition-opacity duration-300 z-0"
              />

              <div className="relative bg-slate-900 backdrop-blur-xl p-5 rounded-2xl h-full flex flex-col gap-4 z-10 border border-white/5">
                <h3 className="text-sm font-bold text-slate-100 tracking-wider uppercase flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_5px_rgba(59,130,246,1)]" />
                  {group.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => {
                    const iconData = iconMap[item] || {
                      icon: <Server />,
                      color: "text-slate-400",
                    };

                    return (
                      <div
                        key={item}
                        className="group/icon relative flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-white/[0.02] border border-white/5 hover:border-blue-500/40 hover:bg-slate-800 transition-all duration-300 cursor-default"
                      >
                        <motion.div
                          animate={{
                            y: [0, -3, 0],
                            rotate:
                              idx % 2 === 0 ? [0, 8, -8, 0] : [0, -8, 8, 0],
                          }}
                          transition={{
                            duration: 2.5 + (item.length % 5) * 0.2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className={`text-sm ${iconData.color} drop-shadow-[0_0_8px_currentColor] transition-all duration-300`}
                        >
                          {iconData.icon}
                        </motion.div>

                        <span className="text-[11px] font-medium text-slate-300 group-hover/icon:text-white transition-colors">
                          {item}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
