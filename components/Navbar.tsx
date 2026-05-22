export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-[#0a192f]/90 backdrop-blur z-50 border-b border-teal-400/10">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-8 py-6">
        <a href="#" className="text-teal-400 font-bold text-2xl hover:text-teal-300 transition">
          ND
        </a>

        <div className="space-x-8 text-sm text-slate-300">
          <a href="#about" className="hover:text-teal-400 transition duration-300">
            About
          </a>

          <a href="#projects" className="hover:text-teal-400 transition duration-300">
            Projects
          </a>

          <a href="#contact" className="hover:text-teal-400 transition duration-300">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}