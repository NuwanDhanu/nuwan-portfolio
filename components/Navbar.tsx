export default function Navbar() {
    return (
      <nav className="fixed top-0 w-full bg-[#0a192f]/90 backdrop-blur z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-8 py-6">
          <h1 className="text-teal-400 font-bold text-xl">
            ND
          </h1>
  
          <div className="space-x-8 text-sm text-slate-300">
            <a href="#about" className="hover:text-teal-400">
              About
            </a>
  
            <a href="#projects" className="hover:text-teal-400">
              Projects
            </a>
  
            <a href="#contact" className="hover:text-teal-400">
              Contact
            </a>
          </div>
        </div>
      </nav>
    );
  }