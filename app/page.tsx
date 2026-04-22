import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import WorkSamples from "@/components/WorkSamples";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <WorkSamples />
      <Contact />
      <Footer />
    </main>
  );
}
