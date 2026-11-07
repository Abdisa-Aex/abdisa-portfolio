// "use client";
// import { Link as ScrollLink } from "react-scroll";
// import { Download } from "lucide-react";

// export default function Navbar() {
//   return (
//     <nav className="fixed top-0 w-full z-50 py-4 px-6 lg:px-16 flex items-center justify-between bg-[#030611]/80 backdrop-blur-md border-b border-white/5">
//       <div className="flex items-center gap-3">
//         <svg
//           width="30"
//           height="30"
//           viewBox="0 0 100 100"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M50 10 L20 90 H40 L50 65 L60 90 H80 L50 10Z"
//             fill="#1a66ff"
//           />
//           <path d="M50 35 L42 55 H58 L50 35Z" fill="#61DAFB" />
//         </svg>
//         <span className="text-xl font-bold tracking-wide">
//           Abdissa Alemayehu
//         </span>
//       </div>

//       <div className="hidden lg:flex items-center gap-8 text-sm text-gray-400 font-medium">
//         <a
//           href="#"
//           className="px-5 py-2 rounded-full border border-cyan-500/50 bg-cyan-500/10 text-white shadow-[0_0_15px_rgba(34,211,238,0.2)]"
//         >
//           Home
//         </a>
//         <a href="#about" className="hover:text-white transition">
//           About
//         </a>
//         <a href="#projects" className="hover:text-white transition">
//           Projects
//         </a>
//         <a href="#skills" className="hover:text-white transition">
//           Skills
//         </a>
//         <a href="#experience" className="hover:text-white transition">
//           Experience
//         </a>
//         <a href="#education" className="hover:text-white transition">
//           Education
//         </a>
//         <a href="#contact" className="hover:text-white transition">
//           Contact
//         </a>
//       </div>

//       <div>
//         <a
//           href="/Abdisa-CV.pdf"
//           download
//           className="flex items-center gap-2 px-5 py-2 rounded-full border border-white/30 text-sm hover:bg-white/10 transition"
//         >
//           Download CV <Download className="w-4 h-4" />
//         </a>
//       </div>
//     </nav>
//   );
// }

"use client";

import { Download } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },

  { label: "Experience", id: "experience" },
  { label: "Education", id: "education" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-1/2 -translate-x-1/2 w-[100%] max-w-[1300px] z-50 py-3 px-6 flex items-center justify-between rounded-2xl bg-[#030611]/60 backdrop-blur-xl border border-cyan-500/20 shadow-[0_0_30px_rgba(0,180,255,0.15)]">
      <div className="flex items-center gap-3">
        <svg width="30" height="30" viewBox="0 0 100 100" fill="none">
          <path
            d="M50 10 L20 90 H40 L50 65 L60 90 H80 L50 10Z"
            fill="#1a66ff"
          />
          <path d="M50 35 L42 55 H58 L50 35Z" fill="#61DAFB" />
        </svg>
        <span className="text-lg font-bold tracking-wide">Abdissa</span>
      </div>

      <div className="hidden lg:flex items-center gap-1 text-sm font-medium">
        {links.map(({ label, id }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`px-4 py-2 rounded-full transition-all duration-500 relative ${
              active === id
                ? "text-white bg-cyan-500/20 border border-cyan-400/60 shadow-[0_0_20px_rgba(34,211,238,0.5)]"
                : "text-gray-400 hover:text-white hover:bg-white/5"
            }`}
          >
            {label}
          </a>
        ))}
      </div>

      <a
        href="/Abdisa-CV.pdf"
        download
        className="flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/40 text-sm text-cyan-300 hover:bg-cyan-400/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition"
      >
        CV <Download className="w-4 h-4" />
      </a>
    </nav>
  );
}
