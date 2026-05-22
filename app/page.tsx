import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0a192f] text-[#ccd6f6] flex items-center px-8 pt-16">
        <div id="about" className="max-w-5xl">
          <p className="text-teal-400 mb-4 text-sm md:text-base font-medium tracking-widest uppercase">
            Hi, my name is
          </p>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight text-white">
            Nuwan Dhanushka.
          </h1>

          <h2 className="text-3xl md:text-4xl font-semibold text-slate-300 mb-8 leading-tight">
            I build scalable cloud and API solutions.
          </h2>

          <p className="max-w-2xl text-slate-400 text-base md:text-lg leading-8 mb-10">
            Senior Software Engineer experienced in AWS, .NET, Node.js, API
            platforms, Redis caching, microservices, and cloud-native
            architectures.
          </p>

          <a
            href="#projects"
            className="inline-block border-2 border-teal-400 text-teal-400 px-8 py-4 rounded font-semibold hover:bg-teal-400/10 transition duration-300"
          >
            View My Projects
          </a>
        </div>
      </main>
    </>
  );
}
