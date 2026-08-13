import type { LucideIcon } from "lucide-react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Bot,
  Box,
  BrainCircuit,
  Cloud,
  Code2,
  Container,
  Database,
  Github,
  Linkedin,
  Mail,
  Network,
  Sparkles,
  Workflow,
} from "lucide-react";
import Navbar from "../components/Navbar";

const projects = [
  {
    title: "AWS SES Migration Automation",
    description:
      "Designed and implemented migration automation for AWS Pinpoint templates to SES using Python libraries and Lambda layers.",
    tech: ["AWS", "Python", "Lambda", "SES"],
  },
  {
    title: "High Traffic API Gateway",
    description:
      "Built and maintained a Hapi.js API gateway with ACL authorization and Redis caching for a platform handling 300K+ daily requests.",
    tech: ["Node.js", "Hapi.js", "Redis", "REST APIs"],
  },
  {
    title: "Cloud-Native Enterprise APIs",
    description:
      "Designed scalable RESTful microservices integrated with AWS services, Oracle, SQL Server, and CI/CD pipelines.",
    tech: [".NET", "AWS", "Docker", "Kubernetes", "Oracle", "Azure DevOps"],
  },
  {
    title: "Enterprise AI Knowledge Assistant",
    description:
      "Built an AI-powered knowledge platform connecting local and cloud LLMs with vector search for natural-language access to technical documentation, API specifications, and operational runbooks.",
    tech: [
      "LM Studio",
      "OpenAI",
      "LangChain",
      "Node.js",
      "Python",
      "Redis",
      "AWS",
      "Docker",
    ],
  },
];

const capabilities: { label: string; icon: LucideIcon }[] = [
  { label: "Cloud platforms", icon: Cloud },
  { label: "API systems", icon: Network },
  { label: "AI engineering", icon: BrainCircuit },
  { label: "Container platforms", icon: Container },
  { label: "Data & caching", icon: Database },
  { label: "Delivery automation", icon: Workflow },
];

const technologies = [
  ".NET",
  "Python",
  "Node.js",
  "AWS",
  "Kubernetes",
  "Docker",
  "LangChain",
  "LangGraph",
  "RAG",
  "Redis",
  "SQL Server",
  "Oracle",
];

function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="mb-4 text-xs font-semibold tracking-[0.22em] text-teal-300 uppercase">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
        {title}
      </h2>
      {copy && <p className="mt-5 leading-7 text-slate-400">{copy}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <main id="top" className="min-h-screen overflow-hidden bg-[#07121d] text-slate-200 selection:bg-teal-300/30 selection:text-white">
      <Navbar />

      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-52 left-[10%] h-[38rem] w-[38rem] rounded-full bg-teal-400/10 blur-[120px]" />
        <div className="absolute top-[38rem] -right-52 h-[32rem] w-[32rem] rounded-full bg-sky-400/10 blur-[120px]" />
      </div>

      <section className="relative mx-auto flex min-h-[760px] max-w-7xl items-center px-6 pt-28 pb-20 sm:px-10 lg:px-12">
        <div className="grid w-full gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-teal-200/15 bg-teal-200/5 px-3.5 py-2 text-xs font-medium text-teal-100 shadow-lg shadow-teal-950/20">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-300" />
              Senior Software Engineer · AI Engineer
            </div>
            <p className="text-sm font-medium tracking-[0.18em] text-teal-300 uppercase">
              Nuwan Dhanushka
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.065em] text-white sm:text-6xl lg:text-7xl lg:leading-[1.02]">
              Engineering dependable systems for a more intelligent future.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
              I build cloud-native API platforms and AI-powered applications
              that make complex enterprise systems feel clear, resilient, and
              useful.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-teal-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-teal-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-200"
              >
                Explore selected work
                <ArrowDownRight size={17} className="transition group-hover:translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="mailto:nuwandhanushka2901@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-teal-200/40 hover:bg-white/[0.07] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-200"
              >
                Start a conversation <ArrowUpRight size={17} />
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:justify-self-end">
            <div className="absolute -inset-5 rounded-[2rem] bg-linear-to-br from-teal-300/15 via-transparent to-sky-300/10 blur-2xl" />
            <div className="relative rounded-3xl border border-white/10 bg-slate-950/45 p-6 shadow-2xl shadow-slate-950/40 backdrop-blur-xl sm:p-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs font-medium tracking-[0.16em] text-slate-500 uppercase">Engineering focus</p>
                  <p className="mt-1 text-lg font-medium text-white">Cloud + Applied AI</p>
                </div>
                <Sparkles className="text-teal-300" size={22} />
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {capabilities.map(({ label, icon: Icon }) => (
                  <div key={label} className="rounded-2xl border border-white/8 bg-white/[0.035] p-4">
                    <Icon size={19} className="mb-5 text-sky-300" />
                    <p className="text-sm font-medium text-slate-200">{label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-2xl border border-teal-200/10 bg-teal-300/[0.06] p-4">
                <p className="text-xs font-medium tracking-[0.14em] text-teal-200 uppercase">Current direction</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Building practical LLM integrations, knowledge workflows, and
                  developer automation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="relative mx-auto max-w-7xl scroll-mt-24 px-6 py-24 sm:px-10 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24">
          <SectionHeading eyebrow="01 / About" title="Pragmatic by design." />
          <div className="space-y-6 text-lg leading-8 text-slate-400">
            <p>
              I am a Senior Software Engineer at Singapore National Library
              Board, focused on scalable API platforms, cloud-native enterprise
              systems, and high-performance backend services.
            </p>
            <p>
              My work spans AWS Lambda, API Gateway, Docker, Kubernetes, Redis,
              Hapi.js, .NET, CI/CD, and enterprise REST API design. I bring the
              same systems mindset to AI engineering—connecting language models
              to useful, reliable workflows.
            </p>
            <div className="grid grid-cols-3 gap-3 pt-3 sm:max-w-xl">
              {[
                ["9+", "years building software"],
                ["300K+", "daily API requests"],
                ["2", "engineering disciplines"],
              ].map(([value, label]) => (
                <div key={label} className="border-l border-teal-300/40 pl-3">
                  <p className="text-2xl font-semibold tracking-tight text-white">{value}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="ai" className="relative mx-auto max-w-7xl scroll-mt-24 px-6 py-24 sm:px-10 lg:px-12">
        <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 shadow-xl shadow-slate-950/20 backdrop-blur-sm sm:p-10 lg:grid lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
          <SectionHeading eyebrow="02 / AI Engineering" title="AI that earns its place in the stack." />
          <div className="mt-8 lg:mt-0">
            <p className="text-lg leading-8 text-slate-400">
              I explore AI-powered engineering through LLM integration, local
              model deployment, prompt engineering, model evaluation, and
              retrieval-augmented knowledge systems. The goal is always the
              same: make software teams faster without compromising the
              reliability their systems require.
            </p>
            <div className="mt-8 flex items-start gap-4 border-l border-sky-300/50 pl-5">
              <Bot className="mt-1 shrink-0 text-sky-300" size={21} />
              <p className="text-sm leading-6 text-slate-300">
                Focused on LLM integration, LangChain, LangGraph, RAG, local
                models, documentation workflows, and intelligent automation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="relative mx-auto max-w-7xl scroll-mt-24 px-6 py-24 sm:px-10 lg:px-12">
        <SectionHeading eyebrow="03 / Experience" title="Enterprise systems, thoughtfully evolved." copy="A systems-first approach to APIs, cloud delivery, and the practical use of AI." />
        <article className="mt-12 rounded-3xl border border-white/10 bg-slate-900/45 p-7 shadow-xl shadow-slate-950/20 sm:p-10">
          <div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-8 md:flex-row">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-teal-200/15 bg-teal-200/5 px-3 py-1 text-xs font-medium text-teal-200">Nov 2021 — Present</div>
              <h3 className="text-2xl font-semibold tracking-tight text-white">Senior Software Developer</h3>
              <p className="mt-2 text-slate-400">Singapore National Library Board</p>
            </div>
            <Code2 className="hidden text-teal-300 md:block" size={30} />
          </div>
          <div className="mt-8 grid gap-x-12 gap-y-4 text-sm leading-7 text-slate-400 md:grid-cols-2">
            {[
              "Developed and maintained enterprise API gateways using Node.js and Hapi.js.",
              "Managed systems handling 200K–300K daily requests with Redis caching and ACL authorization.",
              "Standardized services with Docker and contributed to Kubernetes-oriented deployment workflows.",
              "Designed AWS solutions using Lambda, EC2, RDS, S3, SES, and CloudWatch.",
              "Optimized Oracle and SQL Server queries, and built CI/CD workflows with Azure DevOps.",
              "Built and evaluated AI prototypes using Python and local LLMs for automation and developer productivity.",
            ].map((item) => (
              <p key={item} className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-300" />{item}</p>
            ))}
          </div>
        </article>
      </section>

      <section id="projects" className="relative mx-auto max-w-7xl scroll-mt-24 px-6 py-24 sm:px-10 lg:px-12">
        <SectionHeading eyebrow="04 / Selected work" title="Systems built to carry real work." copy="A selection of cloud, API, and applied-AI projects." />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <article key={project.title} className="group flex min-h-72 flex-col rounded-3xl border border-white/10 bg-white/[0.035] p-7 transition duration-300 hover:-translate-y-1 hover:border-teal-200/30 hover:bg-white/[0.055] sm:p-8">
              <div className="flex items-start justify-between gap-6">
                <span className="text-sm font-medium text-teal-300">0{index + 1}</span>
                <Box className="text-slate-500 transition group-hover:text-sky-300" size={22} />
              </div>
              <h3 className="mt-10 text-xl font-semibold tracking-tight text-white">{project.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-400">{project.description}</p>
              <div className="mt-auto flex flex-wrap gap-x-4 gap-y-2 pt-7 text-xs font-medium text-slate-500">
                {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-10 sm:px-10 lg:px-12">
        <div className="border-y border-white/10 py-8">
          <p className="mb-5 text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase">Technologies I work with</p>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">
            {technologies.map((technology) => <span key={technology}>{technology}</span>)}
          </div>
        </div>
      </section>

      <section id="contact" className="relative mx-auto max-w-4xl scroll-mt-24 px-6 py-28 text-center sm:px-10">
        <p className="text-xs font-semibold tracking-[0.22em] text-teal-300 uppercase">05 / Contact</p>
        <h2 className="mt-5 text-4xl font-semibold tracking-[-0.055em] text-white sm:text-5xl">Let’s talk about building useful things.</h2>
        <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-400">For a technical discussion or collaboration, feel free to get in touch.</p>
        <a href="mailto:nuwandhanushka2901@gmail.com" className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-teal-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-200">
          <Mail size={17} /> Send an email
        </a>
      </section>

      <footer className="relative mx-auto flex max-w-7xl flex-col gap-5 border-t border-white/10 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-12">
        <p>© {new Date().getFullYear()} Nuwan Dhanushka</p>
        <div className="flex items-center gap-5">
          <a href="https://github.com/NuwanDhanu" target="_blank" rel="noreferrer" aria-label="GitHub profile" className="transition hover:text-teal-200"><Github size={18} /></a>
          <a href="https://www.linkedin.com/in/nuwan-dhanushka/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="transition hover:text-teal-200"><Linkedin size={18} /></a>
          <a href="mailto:nuwandhanushka2901@gmail.com" aria-label="Send email" className="transition hover:text-teal-200"><Mail size={18} /></a>
        </div>
      </footer>
    </main>
  );
}
