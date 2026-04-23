"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { NAV_LINKS } from "@/lib/data";
import { NavLink, NavItemProps } from "@/lib/types";

function NavItem({ href, label, onClick, className, isActive }: NavItemProps) {
  return (
    <a href={href} onClick={onClick} className={className}>
      {label}
      <span
        className={`absolute -bottom-1 left-0 h-[2px] rounded-full bg-gradient-to-r from-accent to-accent2 transition-all ${isActive ? "w-full" : "w-0"
          }`}
        />
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState<string>("#home");



  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);


  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (!sections.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "bg-bg/80 backdrop-blur border-b border-white/5" : "bg-transparent"
        }`}
    >
      <nav className="mx-auto max-w-6xl px-5 sm:px-8 py-4 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold tracking-tight">
          <span className="text-gradient">Hend</span>
          <span className="text-ink">.dev</span>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-muted">
          {(NAV_LINKS as NavLink[]).map((l) => {
            const isActive = active === l.href;
            return (
              <li key={l.href}>
                <NavItem
                  href={l.href}
                  label={l.label}
                  className={`relative transition-colors ${isActive ? "text-ink" : "text-muted hover:text-ink"}`}
                  isActive={isActive}
                />
              </li>
            )
          })}
        </ul>
        {/* Desktop Call to Action */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-full bg-gradient-to-r from-accent to-accent2 px-4 py-2 text-sm font-semibold text-bg hover:opacity-90 transition"
        >
          Hire Me
        </a>
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="md:hidden text-2xl text-ink"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-white/5 bg-bg/95 backdrop-blur">
          <ul className="px-5 py-4 space-y-3">
            {(NAV_LINKS as NavLink[]).map((l) => (
              <li key={l.href}>
                <NavItem
                  href={l.href}
                  label={l.label}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-ink hover:text-accent transition"
                />
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block text-center rounded-full bg-gradient-to-r from-accent to-accent2 py-2 font-semibold text-bg"
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
