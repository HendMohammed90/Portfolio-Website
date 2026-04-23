import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import WorkSamples from "@/components/WorkSamples";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/shared/BackToTop";
import Reveal from "@/shared/Reveal";

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Reveal>
        <Skills />
      </Reveal>
      <Reveal>
        <Experience />
      </Reveal>
      <Reveal>
        <WorkSamples />
      </Reveal>
      <Reveal>
        <Contact />
      </Reveal>
      <Footer />
      <BackToTop />
    </main>
  );
}
