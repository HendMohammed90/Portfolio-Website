import Image from "next/image";
import { FiGithub, FiLinkedin, FiMail, FiArrowDownRight } from "react-icons/fi";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-accent/30 blur-3xl animate-blob" />
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-accent2/30 blur-3xl animate-blob" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> Available for new projects
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Empowering Innovation <br className="hidden sm:block" />
            <span className="text-gradient bg-[length:200%_auto] animate-gradient">Through Technology</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-muted max-w-xl">
            I&apos;m <span className="text-ink font-semibold">Hend Mohammed</span>, a software developer and
            systems architect designing, coding, and shipping complex web and mobile systems —
            from MVP to production.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#samples"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent2 px-5 py-3 font-semibold text-bg hover:opacity-90 transition"
            >
              View My Work <FiArrowDownRight />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 font-semibold text-ink hover:bg-white/5 transition"
            >
              Get in Touch
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-5 py-3 font-semibold text-ink hover:bg-accent/20 transition"
            >
              Download CV
            </a>
          </div>
          <div className="mt-8 flex items-center gap-4 text-xl text-muted">
            <a aria-label="LinkedIn" href="https://www.linkedin.com/in/hend-mohammed-bahar" target="_blank" rel="noreferrer" className="hover:text-accent transition"><FiLinkedin /></a>
            <a aria-label="GitHub" href="https://github.com/HendMohammed90" target="_blank" rel="noreferrer" className="hover:text-accent transition"><FiGithub /></a>
            <a aria-label="Email" href="#contact" className="hover:text-accent transition"><FiMail /></a>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <div className="relative h-72 w-72 sm:h-80 sm:w-80 md:h-96 md:w-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent to-accent2 blur-2xl opacity-40" />
            <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-accent to-accent2 p-[2px]">
              <div className="h-full w-full overflow-hidden rounded-full bg-bg2">
                <Image src="/assets/images/me.png" alt="Hend Mohammed" className="h-full w-full object-cover" width={300} height={300} loading="eager" />
              </div>
            </div>
            {[
              { src: "/assets/images/react.svg", pos: "top-2 -left-4", delay: "0s" },
              { src: "/assets/images/nextjs.svg", pos: "top-1/3 -right-6", delay: "1s" },
              { src: "/assets/images/typescript.svg", pos: "bottom-6 -left-6", delay: "2s" },
              { src: "/assets/images/tailwind.svg", pos: "-bottom-2 right-6", delay: "3s" },
              { src: "/assets/images/github.svg", pos: "-bottom-2 right-6", delay: "3s" },
            ].map((t) => (
              <div
                key={t.src}
                className={`absolute ${t.pos} h-12 w-12 sm:h-14 sm:w-14 grid place-items-center rounded-2xl glass shadow-lg animate-float`}
                style={{ animationDelay: t.delay }}
              >
                <Image src={t.src} alt="" className="h-7 w-7 sm:h-8 sm:w-8" width={28} height={28} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
