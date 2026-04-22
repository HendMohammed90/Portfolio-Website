import { FiExternalLink } from "react-icons/fi";
import { WORK_SAMPLES } from "@/lib/data";
import SectionHeader from "@/shared/SectionHeader";
import Image from "next/image";
export default function WorkSamples() {
  return (
    <section id="samples" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader eyebrow="Portfolio" title="Work Samples" subtitle="A selection of projects — from designs to shipped products. Click any card to view it live." />


        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {WORK_SAMPLES.map((w) => (
            <a
              key={w.title}
              href={w.url}
              target="_blank"
              rel="noreferrer"
              className="group relative block overflow-hidden rounded-3xl glass hover:border-accent/40 transition"
            >
              <div className="aspect-[16/10] overflow-hidden bg-bg2">
                <Image
                  src={w.img}
                  alt={w.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  width={500}
                  height={500}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent opacity-90" />
              <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between">
                <div>
                  <h3 className="text-lg font-bold text-ink">{w.title}</h3>
                  <p className="text-xs text-muted">Live project</p>
                </div>
                <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-r from-accent to-accent2 text-bg group-hover:rotate-12 transition">
                  <FiExternalLink />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
