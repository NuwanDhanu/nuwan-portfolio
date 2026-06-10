"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a192f]/90 backdrop-blur border-b border-slate-800">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 md:px-8 py-5">

        <a href="#" className="text-teal-400 font-bold text-xl tracking-wider">
          ND
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-sm text-slate-300">
          <a href="#about" className="hover:text-teal-400">ABOUT</a>
          <a href="#experience" className="hover:text-teal-400">EXPERIENCE</a>
          <a href="#projects" className="hover:text-teal-400">PROJECTS</a>
          <a href="#contact" className="hover:text-teal-400">CONTACT</a>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-slate-300"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#112240] border-t border-slate-800">
          <div className="flex flex-col p-6 gap-6 text-slate-300">
            <a href="#about" onClick={() => setOpen(false)}>ABOUT</a>
            <a href="#experience" onClick={() => setOpen(false)}>EXPERIENCE</a>
            <a href="#projects" onClick={() => setOpen(false)}>PROJECTS</a>
            <a href="#contact" onClick={() => setOpen(false)}>CONTACT</a>
          </div>
        </div>
      )}
    </nav>
  );
}