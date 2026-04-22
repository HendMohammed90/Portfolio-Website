import { FiLinkedin, FiGithub, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 mt-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted text-center sm:text-left">
          Built by <span className="text-gradient font-semibold">Hend Mohammed</span> · © {new Date().getFullYear()}
        </p>
        <div className="flex items-center gap-3 text-lg text-muted">
          <a aria-label="LinkedIn" href="https://www.linkedin.com/in/hend-mohammed-bahar" target="_blank" rel="noreferrer" className="hover:text-accent transition"><FiLinkedin /></a>
          <a aria-label="GitHub" href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-accent transition"><FiGithub /></a>
          <a aria-label="Email" href="#contact" className="hover:text-accent transition"><FiMail /></a>
        </div>
      </div>
    </footer>
  );
}
