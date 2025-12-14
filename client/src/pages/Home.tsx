import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import LanguageToggle from "@/components/LanguageToggle";
import Projects from "@/components/Projects";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const { t } = useLanguage();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        style={{ scaleX }}
      />

      <LanguageToggle />

      {/* Navigation Overlay (Simple) */}
      <nav className="fixed top-0 left-0 right-0 z-40 p-6 flex justify-between items-center pointer-events-none mix-blend-difference">
        <div className="font-bold tracking-tighter text-xl pointer-events-auto text-white">
          NO<span className="text-primary">.</span>
        </div>
        <div className="hidden md:flex gap-8 font-mono text-xs pointer-events-auto text-white/80">
          <a href="#about" className="hover:text-primary transition-colors">{t('nav_about')}</a>
          <a href="#projects" className="hover:text-primary transition-colors">{t('nav_projects')}</a>
          <a href="#contact" className="hover:text-primary transition-colors">{t('nav_contact')}</a>
        </div>
      </nav>

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
