// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import { ArrowRight, Mail } from "lucide-react";

// export default function Hero() {
//   return (
//     <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
//       <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
//         {/* Glowing Rings */}
//         <div className="hero-ring-1 hidden lg:block"></div>
//         <div className="hero-ring-2 hidden lg:block"></div>

//         {/* Left Text */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           className="flex flex-col justify-center relative z-20"
//         >
//           <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-1.5 w-fit mb-6">
//             <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
//             <span className="text-xs font-medium text-emerald-300">
//               Available for Opportunities
//             </span>
//           </div>

//           <h1 className="text-5xl lg:text-[70px] font-extrabold leading-[1.1] mb-4 tracking-tight">
//             Modern <span className="gradient-text">Portfolio</span>
//           </h1>

//           <h2 className="text-xl lg:text-2xl font-semibold mb-4">
//             Building Digital Solutions Through Engineering.
//           </h2>

//           <p className="text-gray-400 text-sm lg:text-base leading-relaxed mb-8 max-w-lg">
//             I'm Abdissa Alemayehu Niguse, a Software Engineer and Full-Stack
//             Developer who turns ideas into reliable, scalable and user-friendly
//             web applications.
//           </p>

//           <div className="flex items-center gap-4 mb-10">
//             <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-6 py-3 rounded-full font-medium text-sm flex items-center gap-2 shadow-[0_0_20px_rgba(34,211,238,0.4)] transition">
//               Explore My Work <ArrowRight className="w-4 h-4" />
//             </button>
//             <button className="border border-white/20 hover:bg-white/5 text-white px-6 py-3 rounded-full font-medium text-sm flex items-center gap-2 transition">
//               Contact Me <Mail className="w-4 h-4" />
//             </button>
//           </div>

//           <div className="flex items-center gap-8 text-sm text-gray-400">
//             <div className="flex items-center gap-2">
//               <span className="text-cyan-400 text-lg">🎓</span>
//               <div>
//                 <p className="text-white font-medium text-xs">
//                   BSc Software Engineering
//                 </p>
//                 <p className="text-[10px]">Jigjiga University</p>
//               </div>
//             </div>
//             <div className="flex items-center gap-2">
//               <span className="text-cyan-400 text-lg">⭐</span>
//               <div>
//                 <p className="text-white font-medium text-xs">GPA 3.7 / 4.0</p>
//               </div>
//             </div>
//             <div className="flex items-center gap-2">
//               <span className="text-cyan-400 text-lg">📍</span>
//               <div>
//                 <p className="text-white font-medium text-xs">
//                   Addis Ababa, Ethiopia
//                 </p>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Right Image */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           className="relative flex justify-center items-end h-[400px] lg:h-[600px] z-10"
//         >
//           <div className="absolute top-10 right-10 z-20 text-2xl text-white -rotate-12 font-serif italic">
//             Code · Build · Innovate
//           </div>
//           {/* Ensure your image is named profile.png in the public folder */}
//           <Image
//             src="/profile.png"
//             alt="Abdissa"
//             width={500}
//             height={700}
//             className="profile-image-mask w-full max-w-[450px] h-full object-cover object-top rounded-t-[100px] z-10"
//             priority
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/bg.png')" }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#030611] via-[#030611]/85 to-transparent" />
      <div className="hero-ring-1 hidden lg:block"></div>
      <div className="hero-ring-2 hidden lg:block"></div>

      {/* Floating Orbs */}
      <div className="absolute top-[15%] left-[10%] w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_15px_#00d2ff] animate-pulse" />
      <div
        className="absolute top-[65%] left-[5%] w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_15px_#a855f7] animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-[30%] right-[15%] w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_20px_#00d2ff] animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-1.5 w-fit mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-medium text-emerald-300">
              Available for Opportunities
            </span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-extrabold leading-[1.1] mb-3 tracking-tight">
            Abdisa Alemayehu <span className="gradient-text">Niguse</span>
          </h1>
          <h2 className="text-xl lg:text-2xl font-semibold text-cyan-400 mb-5">
            Full-Stack Software Developer
          </h2>
          <p className="text-gray-300 text-sm lg:text-base leading-relaxed mb-3 max-w-lg">
            Building modern, scalable, and user-focused digital solutions.
          </p>
          <p className="text-gray-400 text-sm lg:text-base leading-relaxed mb-8 max-w-lg">
            I specialize in developing web applications, designing backend
            systems, integrating APIs, and managing databases. I combine
            software engineering with practical IT troubleshooting to create
            reliable technology solutions.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-8">
            <a
              href="#projects"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] text-white px-6 py-3 rounded-full font-medium text-sm flex items-center gap-2 transition"
            >
              Explore My Projects <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/Abdisa-Alemayehu-Resume.pdf"
              download
              className="border border-white/20 hover:bg-white/5 text-white px-6 py-3 rounded-full font-medium text-sm flex items-center gap-2 transition"
            >
              Download My CV <Download className="w-4 h-4" />
            </a>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <a
              href="https://github.com/Abdisa-Aex"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-cyan-400/30 flex items-center justify-center hover:bg-cyan-400/10 hover:border-cyan-400 transition"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 fill-current text-white"
              >
                <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.23-1.63-1.23-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.92.1-.72.39-1.21.7-1.49-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.27-2.6 5.21-5.08 5.49.4.35.75 1.02.75 2.06V22c0 .29.2.63.76.52A11.1 11.1 0 0 0 12 .9Z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/abdisa-alex-96ba03353/"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-cyan-400/30 flex items-center justify-center hover:bg-cyan-400/10 hover:border-cyan-400 transition"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 fill-current text-white"
              >
                <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM8.02 18.45H5.06V9h2.96v9.45ZM6.54 7.71a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12 10.74h-2.96v-4.6c0-1.1-.02-2.52-1.54-2.52-1.54 0-1.78 1.2-1.78 2.44v4.68H9.3V9h2.84v1.29h.04c.4-.75 1.36-1.54 2.8-1.54 3 0 3.56 1.97 3.56 4.53v5.17Z" />
              </svg>
            </a>
            <a
              href="mailto:abdisaalex77@gmail.com"
              className="w-10 h-10 rounded-full border border-cyan-400/30 flex items-center justify-center hover:bg-cyan-400/10 hover:border-cyan-400 transition"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-cyan-400">🎓</span>
              <span className="text-white font-medium text-xs">
                BSc Software Engineering · Jigjiga University
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-cyan-400">⭐</span>
              <span className="text-white font-medium text-xs">
                GPA 3.7/4.0
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-cyan-400">📍</span>
              <span className="text-white font-medium text-xs">
                Addis Ababa, Ethiopia
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative flex justify-center items-end h-[400px] lg:h-[600px]"
        >
          <div className="absolute top-10 right-10 z-20 text-2xl text-white -rotate-12 font-serif italic">
            Code · Build · Innovate
          </div>
          <Image
            src="/profile.png"
            alt="Abdisa Alemayehu Niguse"
            width={500}
            height={700}
            className="profile-image-mask w-full max-w-[450px] h-full object-cover object-top rounded-t-[100px]"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}