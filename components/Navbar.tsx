"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const navigation = [
  { href: "#about", label: "About" },
  { href: "#ai", label: "AI" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 shadow-2xl shadow-slate-950/30 backdrop-blur-xl sm:px-5" aria-label="Main navigation">
        <a href="#top" onClick={closeMenu} className="rounded-md px-1 text-base font-semibold tracking-[-0.06em] text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-200">
          ND<span className="text-teal-300">.</span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="rounded-lg px-3 py-2 text-sm text-slate-400 transition hover:bg-white/[0.06] hover:text-white focus-visible:outline-2 focus-visible:outline-teal-200">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="ml-2 rounded-lg bg-teal-300 px-3.5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-teal-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-200">
            Contact
          </a>
        </div>
        <button type="button" className="rounded-lg p-2 text-slate-200 transition hover:bg-white/[0.08] md:hidden focus-visible:outline-2 focus-visible:outline-teal-200" onClick={() => setOpen((current) => !current)} aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-white/10 bg-slate-950/95 p-2 shadow-2xl backdrop-blur-xl md:hidden">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu} className="block rounded-xl px-4 py-3 text-sm text-slate-300 transition hover:bg-white/[0.06] hover:text-white">
              {item.label}
            </a>
          ))}
          <a href="#contact" onClick={closeMenu} className="mt-1 block rounded-xl bg-teal-300 px-4 py-3 text-sm font-semibold text-slate-950">Contact</a>
        </div>
      )}
    </header>
  );
}
