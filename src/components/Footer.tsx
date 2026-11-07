"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070b17] px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
        <div>
          <a href="#home" className="text-xl font-bold text-white">
            Abdisa<span className="text-cyan-400">.</span>
          </a>
          <p className="mt-2 text-sm text-slate-500">
            Full-Stack Software Developer
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-5 text-sm text-slate-400">
          <a href="#about" className="transition hover:text-cyan-400">
            About
          </a>
          <a href="#projects" className="transition hover:text-cyan-400">
            Projects
          </a>
          <a href="#experience" className="transition hover:text-cyan-400">
            Experience
          </a>
          <a href="#contact" className="transition hover:text-cyan-400">
            Contact
          </a>
        </div>

        <p className="text-xs text-slate-500">
          © 2026 Abdisa Alemayehu Niguse. All rights reserved. 
        </p>
      </div>
    </footer>
  );
}
