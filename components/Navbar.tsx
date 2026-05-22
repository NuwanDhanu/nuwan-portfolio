export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a192f]/90 backdrop-blur border-b border-slate-800">
      {" "}
      <div className="max-w-6xl mx-auto flex justify-between items-center px-8 py-5">
        {" "}
        <a href="#" className="text-teal-400 font-bold text-xl tracking-wider">
          {" "}
          ND{" "}
        </a>{" "}
        <div className="hidden md:flex items-center gap-10 text-sm text-slate-300">
          {" "}
          <a href="#about" className="hover:text-teal-400 transition">
            {" "}
            ABOUT{" "}
          </a>{" "}
          <a href="#experience" className="hover:text-teal-400 transition">
            {" "}
            EXPERIENCE{" "}
          </a>{" "}
          <a href="#projects" className="hover:text-teal-400 transition">
            {" "}
            PROJECTS{" "}
          </a>{" "}
          <a href="#contact" className="hover:text-teal-400 transition">
            {" "}
            CONTACT{" "}
          </a>{" "}
          <a
            href="https://github.com"
            target="_blank"
            className="border border-teal-400 text-teal-400 px-4 py-2 rounded hover:bg-teal-400/10 transition"
          >
            {" "}
            Github{" "}
          </a>{" "}
        </div>{" "}
      </div>{" "}
    </nav>
  );
}
