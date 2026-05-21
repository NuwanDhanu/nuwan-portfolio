import Navbar from "@/components/Navbar";

export default function Home() {
  return (   
  <>
  <Navbar />
    <main className="min-h-screen bg-[#0a192f] text-[#ccd6f6] flex items-center px-8">
      <div className="max-w-4xl">
        <p className="text-teal-400 mb-5">Hi, my name is</p>

        <h1 className="text-6xl font-bold mb-4">
          Nuwan Dhanushka.
        </h1>

        <h2 className="text-5xl font-bold text-slate-400 mb-6">
          I build scalable cloud and API solutions.
        </h2>

        <p className="max-w-2xl text-slate-400 text-lg leading-8">
          Senior Software Engineer experienced in AWS, .NET,
          Node.js, API platforms, Redis caching, microservices,
          and cloud-native architectures.
        </p>

        <div className="mt-10">
          <a
            href="#projects"
            className="border border-teal-400 text-teal-400 px-6 py-4 rounded hover:bg-teal-400/10 transition"
          >
            View My Projects
          </a>
        </div>
      </div>
    </main>
    </>
  );
}