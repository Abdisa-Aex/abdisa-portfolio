// "use client";

// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowRight, X, ExternalLink, Clock, Code2 } from "lucide-react";
// import Image from "next/image";
// import { useState } from "react";

// const projects = [
//   {
//     title: "ResourceHub",
//     subtitle: "Student Resource Sharing Platform",
//     description:
//       "A student-focused resource-sharing platform helping students discover, share, manage, and exchange academic resources.",
//     stack: [
//       "Next.js",
//       "React",
//       "Tailwind",
//       "Node.js",
//       "Express",
//       "MongoDB",
//       "Firebase",
//       "Clerk",
//       "Socket.io",
//       "Swagger",
//       "Cloudinary",
//     ],
//     features: [
//       "RBAC with 4 roles",
//       "JWT + Refresh Tokens",
//       "2FA Authentication",
//       "Magic-link verification",
//       "Resource uploads & exchange",
//       "Real-time communication",
//     ],
//     // ADDED 3 IMAGES HERE
//     images: ["/bg.png", "/bg.png", "/bg.png"],
//     github: "https://github.com/Abdisa-Aex/student-resource-sharing-platform",
//     live: "https://student-resource-sharing-platform.vercel.app/",
//     featured: true,
//     status: "completed",
//   },
//   {
//     title: "E-commerce Platform",
//     subtitle: "Online Shopping Application",
//     description:
//       "A web-based e-commerce application with structured frontend and backend architecture.",
//     stack: ["React", "Node.js", "Express", "MongoDB", "Mongoose", "REST APIs"],
//     features: [
//       "Product management",
//       "Shopping cart",
//       "User accounts",
//       "Backend API integration",
//     ],
//     images: ["/bg.png"],
//     github: "",
//     live: "",
//     featured: false,
//     status: "ongoing", // ADDED ONGOING STATUS
//   },
//   {
//     title: "React To-Do List",
//     subtitle: "Task Management App",
//     description:
//       "A task-management application built to practice React development and interactive UIs.",
//     stack: ["React", "JavaScript", "HTML", "CSS"],
//     features: ["Add/delete tasks", "Mark complete", "State management"],
//     images: ["/bg.png"],
//     github: "",
//     live: "",
//     featured: false,
//     status: "completed",
//   },
//   {
//     title: "Drum Sound App",
//     subtitle: "Interactive Audio Application",
//     description:
//       "An interactive sound application demonstrating frontend development and audio handling.",
//     stack: ["HTML", "CSS", "JavaScript"],
//     features: ["Keyboard events", "Audio playback", "Interactive UI"],
//     images: ["/bg.png"],
//     github: "",
//     live: "",
//     featured: false,
//     status: "completed",
//   },
// ];

// export default function Projects() {
//   const [selected, setSelected] = useState<(typeof projects)[0] | null>(null);
//   const [activeImage, setActiveImage] = useState(0);

//   // Reset image index when opening a new project
//   const handleOpenModal = (project: (typeof projects)[0]) => {
//     setActiveImage(0);
//     setSelected(project);
//   };

//   return (
//     <section
//       id="projects"
//       className="max-w-[1400px] mx-auto px-6 lg:px-16 py-16 relative z-20"
//     >
//       <div className="flex items-center gap-3 mb-8">
//         <div className="w-1.5 h-5 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,1)]"></div>
//         <h2 className="text-2xl font-bold text-white">Featured Projects</h2>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {projects.map((project, i) => (
//           <motion.div
//             key={project.title}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: i * 0.1 }}
//             onClick={() => handleOpenModal(project)}
//             // Added the auto-spinning motion border to the project cards too!
//             className="relative p-[1px] rounded-2xl overflow-hidden group bg-slate-800 cursor-pointer flex flex-col"
//           >
//             {/* AUTO SPINNING BORDER */}
//             <motion.div
//               animate={{ rotate: 360 }}
//               transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
//               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] aspect-square bg-[conic-gradient(from_0deg,transparent_0_300deg,#3b82f6_360deg)] opacity-50 group-hover:opacity-100 transition-opacity duration-300 z-0"
//             />

//             {/* Inner Card */}
//             <div className="relative bg-slate-900/95 backdrop-blur-xl p-5 rounded-2xl h-full flex flex-col z-10 border border-white/5">
//               <div className="relative h-36 rounded-xl overflow-hidden mb-4 bg-slate-800 border border-white/5">
//                 <Image
//                   src={project.images[0]}
//                   alt={project.title}
//                   fill
//                   className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 group-hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
//               </div>

//               <div className="flex-grow">
//                 <div className="flex items-center justify-between gap-2 mb-1">
//                   <h3 className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">
//                     {project.title}
//                   </h3>

//                   {/* Status Badges */}
//                   {project.featured && (
//                     <span className="bg-blue-600 text-white text-[9px] px-2 py-0.5 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.5)]">
//                       Featured
//                     </span>
//                   )}
//                   {project.status === "ongoing" && (
//                     <span className="bg-amber-500/20 text-amber-400 border border-amber-500/30 text-[9px] px-2 py-0.5 rounded-full flex items-center gap-1">
//                       <Clock className="w-2.5 h-2.5" /> In Dev
//                     </span>
//                   )}
//                 </div>

//                 <p className="text-[11px] text-slate-400 mb-4">
//                   {project.subtitle}
//                 </p>

//                 <div className="flex flex-wrap gap-1.5">
//                   {project.stack.slice(0, 4).map((t) => (
//                     <span
//                       key={t}
//                       className="text-[9px] px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-300"
//                     >
//                       {t}
//                     </span>
//                   ))}
//                   {project.stack.length > 4 && (
//                     <span className="text-[9px] px-1.5 py-0.5 text-slate-500">
//                       +{project.stack.length - 4}
//                     </span>
//                   )}
//                 </div>
//               </div>

//               <div className="flex items-center justify-end mt-4 pt-3 border-t border-white/5">
//                 <span className="text-[10px] text-cyan-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
//                   View Details <ArrowRight className="w-3 h-3" />
//                 </span>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* MODAL POPUP */}
//       <AnimatePresence>
//         {selected && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setSelected(null)}
//             className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 lg:p-8"
//           >
//             <motion.div
//               initial={{ scale: 0.95, y: 20 }}
//               animate={{ scale: 1, y: 0 }}
//               exit={{ scale: 0.95, y: 20 }}
//               onClick={(e) => e.stopPropagation()}
//               className="relative bg-slate-900 border border-slate-700/50 max-w-3xl w-full p-6 lg:p-8 rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto custom-scrollbar"
//             >
//               <button
//                 onClick={() => setSelected(null)}
//                 className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red-500 hover:text-white hover:border-red-500 transition-all z-20"
//               >
//                 <X className="w-4 h-4" />
//               </button>

//               <h3 className="text-2xl font-bold text-white mb-1 pr-10">
//                 {selected.title}
//               </h3>
//               <p className="text-sm text-cyan-400 mb-6">{selected.subtitle}</p>

//               {/* IMAGE GALLERY */}
//               <div className="mb-6 space-y-3">
//                 <div className="relative h-64 md:h-80 w-full rounded-xl overflow-hidden border border-white/10 bg-slate-800">
//                   <Image
//                     src={selected.images[activeImage]}
//                     alt={`${selected.title} preview`}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//                 {/* Thumbnails (Only show if there's more than 1 image) */}
//                 {selected.images.length > 1 && (
//                   <div className="flex gap-2">
//                     {selected.images.map((img, idx) => (
//                       <button
//                         key={idx}
//                         onClick={() => setActiveImage(idx)}
//                         className={`relative w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
//                           activeImage === idx
//                             ? "border-cyan-400 opacity-100"
//                             : "border-transparent opacity-50 hover:opacity-100"
//                         }`}
//                       >
//                         <Image
//                           src={img}
//                           alt={`Thumbnail ${idx + 1}`}
//                           fill
//                           className="object-cover"
//                         />
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               <p className="text-[13px] text-slate-300 leading-relaxed mb-6">
//                 {selected.description}
//               </p>

//               <div className="grid md:grid-cols-2 gap-6 mb-8">
//                 <div>
//                   <h4 className="text-[11px] font-bold text-slate-400 mb-3 uppercase tracking-wider">
//                     Key Features
//                   </h4>
//                   <ul className="space-y-2 text-[12px] text-slate-300">
//                     {selected.features.map((f) => (
//                       <li key={f} className="flex items-start gap-2">
//                         <span className="text-cyan-500 mt-0.5">▹</span>
//                         {f}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//                 <div>
//                   <h4 className="text-[11px] font-bold text-slate-400 mb-3 uppercase tracking-wider">
//                     Tech Stack
//                   </h4>
//                   <div className="flex flex-wrap gap-1.5">
//                     {selected.stack.map((t) => (
//                       <span
//                         key={t}
//                         className="text-[10px] px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-slate-300"
//                       >
//                         {t}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               <div className="flex flex-wrap gap-3 pt-6 border-t border-slate-700/50">
//                 {selected.github && (
//                   <a
//                     href={selected.github}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl text-xs font-medium flex items-center gap-2 transition"
//                   >
//                     <Code2 className="w-4 h-4" /> GitHub Repo
//                   </a>
//                 )}
//                 {selected.live && (
//                   <a
//                     href={selected.live}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-xl text-xs font-medium flex items-center gap-2 transition shadow-[0_0_15px_rgba(6,182,212,0.3)]"
//                   >
//                     <ExternalLink className="w-4 h-4" /> Live Demo
//                   </a>
//                 )}
//                 {selected.status === "ongoing" && (
//                   <span className="px-5 py-2.5 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-xl text-xs font-medium flex items-center gap-2">
//                     <Clock className="w-4 h-4" /> Currently In Development
//                   </span>
//                 )}
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Clock, Code2, ExternalLink, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    title: "ResourceHub",
    subtitle: "Student Resource Sharing Platform",
    description:
      "A student-focused resource-sharing platform helping students discover, share, manage, and exchange academic resources.",
    stack: [
      "Next.js",
      "React",
      "Tailwind",
      "Node.js",
      "Express",
      "MongoDB",
      "Firebase",
      "Clerk",
      "Socket.io",
      "Swagger",
      "Cloudinary",
    ],
    features: [
      "RBAC with 4 roles",
      "JWT + Refresh Tokens",
      "2FA Authentication",
      "Magic-link verification",
      "Resource uploads & exchange",
      "Real-time communication",
    ],
    images: ["/resourcehub-1.png", "/resourcehub-2.png", "/resourcehub-3.png"],
    github: "https://github.com/Abdisa-Aex/student-resource-sharing-platform",
    live: "https://student-resource-sharing-platform.vercel.app/",
    featured: true,
    status: "completed",
  },
  {
    title: "E-commerce Platform",
    subtitle: "Online Shopping Application",
    description:
      "A web-based e-commerce application with structured frontend and backend architecture.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Mongoose", "REST APIs"],
    features: [
      "Product management",
      "Shopping cart",
      "User accounts",
      "Backend API integration",
    ],
    images: ["/eco.png"],
    github: "",
    live: "",
    featured: false,
    status: "ongoing",
  },
  {
    title: "React To-Do List",
    subtitle: "Task Management App",
    description:
      "A robust task-management application built to demonstrate React state management and local storage persistence.",
    // UPDATED TECH STACK & FEATURES BASED ON REPO
    stack: ["React", "JavaScript", "HTML5", "CSS3", "Vite", "localStorage"],
    features: [
      "Add tasks",
      "Edit tasks",
      "Delete tasks",
      "Mark complete",
      "Filter tasks",
    ],
    images: ["/todo list.png"], // Make sure to add this image to your public folder!
    github: "https://github.com/Abdisa-Aex/To-Do-lists-By-React-",
    live: "https://to-do-lists-by-react.vercel.app/", // ADDED LIVE LINK
    featured: false,
    status: "completed",
  },
  {
    title: "Drum Sound App",
    subtitle: "Interactive Audio Application",
    description:
      "An interactive sound application demonstrating frontend development, event handling, and audio playback.",
    // UPDATED TECH STACK & FEATURES BASED ON REPO
    stack: ["HTML5", "CSS3", "JavaScript"],
    features: [
      "Interactive drum controls",
      "Audio playback",
      "Keyboard events",
    ],
    images: ["/drum.png"], // Make sure to add this image to your public folder!
    github: "https://github.com/Abdisa-Aex/Drum-sound",
    live: "https://drum-sound-hb3b.vercel.app/",
    featured: false,
    status: "completed",
  },
];

export default function Projects() {
  const [selected, setSelected] = useState<(typeof projects)[0] | null>(null);
  const [activeImage, setActiveImage] = useState(0);

  const handleOpenModal = (project: (typeof projects)[0]) => {
    setActiveImage(0);
    setSelected(project);
  };

  return (
    <section
      id="projects"
      className="max-w-[1400px] mx-auto px-6 lg:px-16 py-16 relative z-20"
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="w-1.5 h-5 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,1)]"></div>
        <h2 className="text-2xl font-bold text-white">Featured Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            onClick={() => handleOpenModal(project)}
            className="relative p-[1px] rounded-2xl overflow-hidden group bg-slate-800 cursor-pointer flex flex-col"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] aspect-square bg-[conic-gradient(from_0deg,transparent_0_300deg,#3b82f6_360deg)] opacity-50 group-hover:opacity-100 transition-opacity duration-300 z-0"
            />

            <div className="relative bg-slate-900/95 backdrop-blur-xl p-5 rounded-2xl h-full flex flex-col z-10 border border-white/5">
              <div className="relative h-36 rounded-xl overflow-hidden mb-4 bg-slate-800 border border-white/5">
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
              </div>

              <div className="flex-grow">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  {project.featured && (
                    <span className="bg-blue-600 text-white text-[9px] px-2 py-0.5 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.5)]">
                      Featured
                    </span>
                  )}
                  {project.status === "ongoing" && (
                    <span className="bg-amber-500/20 text-amber-400 border border-amber-500/30 text-[9px] px-2 py-0.5 rounded-full flex items-center gap-1">
                      <Clock className="w-2.5 h-2.5" /> In Dev
                    </span>
                  )}
                </div>

                <p className="text-[11px] text-slate-400 mb-4">
                  {project.subtitle}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.stack.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="text-[9px] px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                  {project.stack.length > 4 && (
                    <span className="text-[9px] px-1.5 py-0.5 text-slate-500">
                      +{project.stack.length - 4}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-end mt-4 pt-3 border-t border-white/5">
                <span className="text-[10px] text-cyan-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  View Details <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 lg:p-8"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-slate-900 border border-slate-700/50 max-w-3xl w-full p-6 lg:p-8 rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto custom-scrollbar"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red-500 hover:text-white hover:border-red-500 transition-all z-20"
              >
                <X className="w-4 h-4" />
              </button>

              <h3 className="text-2xl font-bold text-white mb-1 pr-10">
                {selected.title}
              </h3>
              <p className="text-sm text-cyan-400 mb-6">{selected.subtitle}</p>

              <div className="mb-6 space-y-3">
                <div className="relative h-64 md:h-80 w-full rounded-xl overflow-hidden border border-white/10 bg-slate-800">
                  <Image
                    src={selected.images[activeImage]}
                    alt={`${selected.title} preview`}
                    fill
                    className="object-cover"
                  />
                </div>
                {selected.images.length > 1 && (
                  <div className="flex gap-2">
                    {selected.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImage(idx)}
                        className={`relative w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                          activeImage === idx
                            ? "border-cyan-400 opacity-100"
                            : "border-transparent opacity-50 hover:opacity-100"
                        }`}
                      >
                        <Image
                          src={img}
                          alt={`Thumbnail ${idx + 1}`}
                          fill
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <p className="text-[13px] text-slate-300 leading-relaxed mb-6">
                {selected.description}
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="text-[11px] font-bold text-slate-400 mb-3 uppercase tracking-wider">
                    Key Features
                  </h4>
                  <ul className="space-y-2 text-[12px] text-slate-300">
                    {selected.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <span className="text-cyan-500 mt-0.5">▹</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-slate-400 mb-3 uppercase tracking-wider">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selected.stack.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-6 border-t border-slate-700/50">
                {selected.github && (
                  <a
                    href={selected.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl text-xs font-medium flex items-center gap-2 transition"
                  >
                    <Code2 className="w-4 h-4" /> GitHub Repo
                  </a>
                )}
                {selected.live && (
                  <a
                    href={selected.live}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-xl text-xs font-medium flex items-center gap-2 transition shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                  >
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                )}
                {selected.status === "ongoing" && (
                  <span className="px-5 py-2.5 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-xl text-xs font-medium flex items-center gap-2">
                    <Clock className="w-4 h-4" /> Currently In Development
                  </span>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
