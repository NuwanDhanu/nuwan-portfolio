"use client";

type Props = {
  activeSection: string;
};

const links = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Sidebar({ activeSection }: Props) {
  return (
    <div className="hidden lg:flex fixed left-16 top-1/2 -translate-y-1/2 z-40">
      <div className="flex flex-col gap-6">
        {links.map((link) => {
          const active = activeSection === link.id;

          return (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="group flex items-center gap-4"
            >
              <span
                className={`h-[1px] transition-all duration-300 ${
                  active
                    ? "w-16 bg-teal-400"
                    : "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-teal-400"
                }`}
              />

              <span
                className={`uppercase tracking-widest text-xs transition ${
                  active
                    ? "text-teal-400"
                    : "text-slate-500 group-hover:text-slate-300"
                }`}
              >
                {link.label}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}