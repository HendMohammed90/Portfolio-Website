import { FiBriefcase } from "react-icons/fi";
import { WORK_EXPERIENCE } from "@/lib/data";
import SectionHeader from "@/shared/SectionHeader";

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 md:py-28 bg-gradient-to-b from-transparent via-bg2/40 to-transparent">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader eyebrow="Career" title="Work Experience" subtitle="Selected roles and the impact I've delivered." />


        <div className="relative mt-14">
          <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/60 via-accent2/40 to-transparent" />
          <ul className="space-y-10">
            {WORK_EXPERIENCE.map((exp, i) => (
              <li key={exp.title} className="relative">
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-2 h-4 w-4 rounded-full bg-gradient-to-br from-accent to-accent2 ring-4 ring-bg" />
                <div className={`sm:grid sm:grid-cols-2 sm:gap-10 ${i % 2 === 0 ? "" : "sm:[&>*:first-child]:order-2"}`}>
                  <div className="pl-12 sm:pl-0 sm:pr-10 sm:text-right">
                    <span className="text-sm text-accent2 font-mono">{exp.date}</span>
                    <h3 className="mt-1 text-lg sm:text-xl font-bold text-ink">{exp.title}</h3>
                  </div>
                  <div className="pl-12 sm:pl-10 mt-3 sm:mt-0">
                    <div className="glass rounded-2xl p-5">
                      <div className="flex items-center gap-2 text-accent mb-3">
                        <FiBriefcase /> <span className="text-xs uppercase tracking-wider">Responsibilities</span>
                      </div>
                      <ul className="space-y-2 text-sm text-muted">
                        {exp.responsibilities.map((r, idx) => (
                          <li key={idx} className="flex gap-2">
                            <span className="text-accent2 mt-1">▸</span>
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
