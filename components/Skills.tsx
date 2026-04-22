"use client";
import { useState } from "react";
import { SKILLS } from "@/lib/data";
import SectionHeader from "@/shared/SectionHeader";
import Image from "next/image";
export default function Skills() {
  const [active, setActive] = useState(0);
  const current = SKILLS[active];

  return (
    <section id="skills" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader eyebrow="What I bring" title="Skills" subtitle="A snapshot of the tools and technologies I use to build things." />

        <div className="mt-12 grid lg:grid-cols-[280px_1fr] gap-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-3">
            {SKILLS.map((s, i) => (
              <button
                key={s.title}
                onClick={() => setActive(i)}
                className={`group flex items-center gap-3 rounded-2xl p-4 text-left transition border ${
                  active === i
                    ? "bg-gradient-to-br from-accent/20 to-accent2/20 border-accent/50"
                    : "glass hover:border-white/20"
                }`}
              >
                <Image src={s.icon} alt="" className="h-8 w-8 object-contain" width={32} height={32} />
                <span className="font-semibold text-sm sm:text-base">{s.title}</span>
              </button>
            ))}
          </div>

          <div className="glass rounded-3xl p-6 sm:p-8">
            <h3 className="text-xl font-bold mb-6 text-gradient inline-block">{current.title}</h3>
            <div className="grid sm:grid-cols-2 gap-5">
              {current.skills.map((s) => (
                <div key={s.skill}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-ink">{s.skill}</span>
                    <span className="text-muted">{s.percentage}</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-accent to-accent2 transition-all"
                      style={{ width: s.percentage }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


