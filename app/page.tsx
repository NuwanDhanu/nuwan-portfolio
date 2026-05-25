"use client";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Cloud,
  Server,
  Database,
  BrainCircuit,
} from "lucide-react";
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
      "Built and maintained Hapi.js API gateway handling 300K+ daily requests with ACL authorization and Redis caching.",
    tech: ["Node.js", "Hapi.js", "Redis", "REST APIs"],
  },
  {
    title: "Cloud-Native Enterprise APIs",
    description:
      "Designed scalable RESTful microservices integrated with AWS services, Oracle, SQL Server, and CI/CD pipelines.",
    tech: [".NET", "AWS", "Docker", "Kubernetes", "Oracle", "Azure DevOps"],
  },
];
export default function Home() {
  const [activeSection, setActiveSection] = useState("about");

  const { ref: aboutRef } = useInView({
    threshold: 0.3,
    onChange: (inView) => {
      if (inView) setActiveSection("about");
    },
  });

  const { ref: experienceRef } = useInView({
    threshold: 0.3,
    onChange: (inView) => {
      if (inView) setActiveSection("experience");
    },
  });

  const { ref: projectsRef } = useInView({
    threshold: 0.5,
    onChange: (inView) => {
      if (inView) setActiveSection("projects");
    },
  });

  const { ref: contactRef } = useInView({
    threshold: 0.3,
    onChange: (inView) => {
      if (inView) setActiveSection("contact");
    },
  });

  return (
    <>
      {" "}
      <Navbar />{" "}
      <main className="bg-[#0a192f] text-slate-300 min-h-screen scroll-smooth">
        <Sidebar activeSection={activeSection} /> {/* LEFT SOCIAL */}{" "}
        <div className="hidden lg:flex fixed left-10 bottom-0 flex-col items-center gap-6 z-40">
          {" "}
          <a
            href="https://github.com/NuwanDhanu"
            target="_blank"
            className="hover:text-teal-400 transition"
          >
            {" "}
            <Github size={22} />{" "}
          </a>{" "}
          <a
            href="https://www.linkedin.com/in/nuwan-dhanushka/"
            target="_blank"
            className="hover:text-teal-400 transition"
          >
            {" "}
            <Linkedin size={22} />{" "}
          </a>{" "}
          <a
            href="mailto:nuwandhanushka93@gmail.com"
            className="hover:text-teal-400 transition"
          >
            {" "}
            <Mail size={22} />{" "}
          </a>{" "}
          <div className="w-[1px] h-32 bg-slate-500 mt-2"></div>{" "}
        </div>{" "}
        {/* HERO */}{" "}
        <section className="max-w-6xl mx-auto min-h-screen flex items-center px-8 pt-20 lg:pl-40">
          {" "}
          <div>
            {" "}
            <p className="text-teal-400 mb-5 text-sm tracking-widest">
              {" "}
              HI, MY NAME IS{" "}
            </p>{" "}
            <h1 className="text-5xl md:text-7xl font-bold text-slate-100 leading-tight">
              {" "}
              Nuwan Dhanushka.{" "}
            </h1>{" "}
            <h2 className="text-4xl md:text-6xl font-bold text-slate-400 mt-3 leading-tight max-w-4xl">
              {" "}
              I engineer scalable cloud-native platforms, enterprise APIs, and
              modern distributed systems.{" "}
            </h2>{" "}
            <p className="max-w-2xl text-slate-400 mt-8 text-lg leading-8">
              {" "}
              Senior Software Engineer experienced in AWS, .NET, Node.js,
              Hapi.js, Docker, Kubernetes, REST APIs, Redis caching,
              microservices, CI/CD pipelines, SQL Server, Oracle, and
              cloud-native enterprise architectures.{" "}
            </p>{" "}
            <div className="mt-10 flex gap-4 flex-wrap">
              {" "}
              <a
                href="#projects"
                className="border border-teal-400 text-teal-400 px-7 py-4 rounded hover:bg-teal-400/10 transition"
              >
                {" "}
                View My Work{" "}
              </a>{" "}
              <a
                href="https://github.com/NuwanDhanu"
                target="_blank"
                className="border border-slate-600 text-slate-300 px-7 py-4 rounded hover:border-teal-400 hover:text-teal-400 transition"
              >
                {" "}
                GitHub{" "}
              </a>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        {/* ABOUT */}{" "}
        <section
          ref={aboutRef}
          id="about"
          className="max-w-6xl mx-auto px-8 py-28 grid md:grid-cols-2 gap-16 items-center lg:pl-40"
        >
          {" "}
          <div>
            {" "}
            <div className="flex items-center gap-4 mb-10">
              {" "}
              <span className="text-teal-400 text-xl">01.</span>{" "}
              <h2 className="text-3xl font-bold text-slate-100">About Me</h2>{" "}
              <div className="h-[1px] bg-slate-700 flex-1"></div>{" "}
            </div>{" "}
            <div className="space-y-6 text-slate-400 leading-8">
              {" "}
              <p>
                {" "}
                I am a Senior Software Engineer at Singapore National Library
                Board focused on building scalable API platforms, cloud-native
                enterprise systems, and high-performance backend services.{" "}
              </p>{" "}
              <p>
                {" "}
                My experience includes AWS Lambda, API Gateway, Docker
                containerization, Kubernetes orchestration, Redis optimization,
                Hapi.js services, .NET backend systems, CI/CD pipelines, and
                enterprise-grade RESTful API design.{" "}
              </p>{" "}
              <p>
                {" "}
                Recently, I have been exploring AI-powered engineering,
                automation, serverless architectures, and modern frontend
                technologies using Next.js and Tailwind CSS.{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
          <div className="bg-[#112240] rounded-2xl p-8 border border-slate-800 shadow-2xl">
            {" "}
            <h3 className="text-slate-100 text-xl font-semibold mb-6">
              {" "}
              Core Expertise{" "}
            </h3>{" "}
            <div className="grid grid-cols-2 gap-5 text-sm">
              {" "}
              <div className="flex items-center gap-3">
                {" "}
                <Cloud className="text-teal-400" size={18} /> AWS{" "}
              </div>{" "}
              <div className="flex items-center gap-3">
                {" "}
                <Server className="text-teal-400" size={18} /> Node.js{" "}
              </div>{" "}
              <div className="flex items-center gap-3">
                {" "}
                <Database className="text-teal-400" size={18} /> SQL Server{" "}
              </div>{" "}
              <div className="flex items-center gap-3">
                {" "}
                <BrainCircuit className="text-teal-400" size={18} /> AI &
                Automation{" "}
              </div>{" "}
              <div>.NET Core</div> <div>Hapi.js</div> <div>Redis Cache</div>{" "}
              <div>Microservices</div> <div>REST APIs</div> <div>Docker</div>{" "}
              <div>Kubernetes</div> <div>Containerization</div>{" "}
              <div>Oracle</div> <div>Azure DevOps</div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        {/* EXPERIENCE */}{" "}
        <section
          id="experience"
          ref={experienceRef}
          className="max-w-6xl mx-auto px-8 py-28 lg:pl-40"
        >
          <div className="flex items-center gap-4 mb-14">
            {" "}
            <span className="text-teal-400 text-xl">02.</span>{" "}
            <h2 className="text-3xl font-bold text-slate-100">Experience</h2>{" "}
            <div className="h-[1px] bg-slate-700 flex-1"></div>{" "}
          </div>{" "}
          <div className="bg-[#112240] rounded-2xl p-8 border border-slate-800 hover:-translate-y-1 transition duration-300">
            {" "}
            <h3 className="text-2xl font-semibold text-slate-100">
              {" "}
              Senior Software Developer{" "}
            </h3>{" "}
            <p className="text-teal-400 mt-2">
              {" "}
              Singapore National Library Board{" "}
            </p>{" "}
            <p className="text-slate-500 mt-2 text-sm">
              {" "}
              Nov 2021 - Present{" "}
            </p>{" "}
            <ul className="mt-8 space-y-4 text-slate-400 leading-7 list-disc pl-5">
              {" "}
              <li>
                {" "}
                Developed and maintained enterprise API gateways using Node.js
                and Hapi.js.{" "}
              </li>{" "}
              <li> Managed systems handling 200K–300K daily requests. </li>{" "}
              <li>
                Implemented Docker-based containerization strategies for
                enterprise services and deployment standardization.
              </li>{" "}
              <li>
                Contributed to Kubernetes-oriented cloud-native deployment
                workflows and scalable microservices infrastructure.
              </li>{" "}
              <li>
                {" "}
                Implemented Redis caching and ACL authorization mechanisms.{" "}
              </li>{" "}
              <li>
                {" "}
                Designed cloud-native solutions using AWS Lambda, EC2, RDS, S3,
                SES, and CloudWatch.{" "}
              </li>{" "}
              <li>
                {" "}
                Optimized Oracle and SQL Server queries for performance.{" "}
              </li>{" "}
              <li>
                {" "}
                Built CI/CD pipelines and deployment workflows using Azure
                DevOps.{" "}
              </li>{" "}
            </ul>{" "}
          </div>{" "}
        </section>{" "}
        {/* PROJECTS */}{" "}
        <section
          id="projects"
          ref={projectsRef}
          className="max-w-6xl mx-auto px-8 py-28 lg:pl-40 min-h-screen"
        >
          {" "}
          <div className="flex items-center gap-4 mb-14">
            {" "}
            <span className="text-teal-400 text-xl">03.</span>{" "}
            <h2 className="text-3xl font-bold text-slate-100">
              Featured Projects
            </h2>{" "}
            <div className="h-[1px] bg-slate-700 flex-1"></div>{" "}
          </div>{" "}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {" "}
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-[#112240] rounded-2xl p-8 border border-slate-800 hover:-translate-y-2 hover:border-teal-400/30 transition duration-300"
              >
                {" "}
                <div className="flex justify-between items-start mb-6">
                  {" "}
                  <div className="text-teal-400 text-3xl">▣</div>{" "}
                  <ExternalLink className="text-slate-400 hover:text-teal-400 cursor-pointer" />{" "}
                </div>{" "}
                <h3 className="text-xl font-semibold text-slate-100 mb-4">
                  {" "}
                  {project.title}{" "}
                </h3>{" "}
                <p className="text-slate-400 leading-7 text-sm">
                  {" "}
                  {project.description}{" "}
                </p>{" "}
                <div className="flex flex-wrap gap-3 mt-8 text-xs text-slate-500">
                  {" "}
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}{" "}
                </div>{" "}
              </div>
            ))}{" "}
          </div>{" "}
        </section>{" "}
        {/* CONTACT */}{" "}
        <section
          id="contact"
          ref={contactRef}
          className="max-w-3xl mx-auto px-8 py-32 text-center lg:pl-40"
        >
          {" "}
          <p className="text-teal-400 mb-5 tracking-widest text-sm">
            {" "}
            04. WHAT'S NEXT?{" "}
          </p>{" "}
          <h2 className="text-5xl font-bold text-slate-100 mb-8">
            {" "}
            Get In Touch{" "}
          </h2>{" "}
          <p className="text-slate-400 leading-8 mb-12">
            {" "}
            I’m currently exploring cloud-native engineering, AI-powered
            automation, scalable API platforms, and modern web technologies.
            Feel free to connect for collaborations, opportunities, or technical
            discussions.{" "}
          </p>{" "}
          <a
            href="mailto:nuwandhanushka93@gmail.com"
            className="inline-block border border-teal-400 text-teal-400 px-8 py-5 rounded hover:bg-teal-400/10 transition"
          >
            {" "}
            Say Hello{" "}
          </a>{" "}
        </section>{" "}
      </main>{" "}
    </>
  );
}
