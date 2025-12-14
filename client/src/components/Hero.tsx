import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { ArrowDown, Terminal } from "lucide-react";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-bg.jpg" 
          alt="Cyber-noir background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[2fr_1fr] items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none border border-primary/30 bg-primary/10 text-primary font-mono text-sm tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              {t('hero_system_online')}
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground">
              NAYDERSON
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                OLIVEIRA
              </span>
            </h1>

            <div className="max-w-2xl space-y-4">
              <p className="text-xl md:text-2xl text-muted-foreground font-light border-l-2 border-primary pl-4">
                {t('hero_tagline')}
              </p>
              
              <p className="text-lg text-foreground/80 font-mono pt-4">
                <span className="text-primary">&gt;</span> {t('hero_role_1')}<br/>
                <span className="text-primary">&gt;</span> {t('hero_role_2')}<br/>
                <span className="text-primary">&gt;</span> {t('hero_role_3')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <a 
                href="#projects" 
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-widest uppercase bg-primary text-primary-foreground hover:bg-primary/90 transition-all border border-primary hover:shadow-[0_0_20px_rgba(124,58,237,0.5)]"
              >
                <Terminal className="mr-2 h-4 w-4" />
                {t('hero_cta_projects')}
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-widest uppercase bg-transparent text-foreground border border-border hover:bg-secondary/50 transition-all hover:border-primary/50"
              >
                {t('hero_cta_contact')}
              </a>
            </div>
          </motion.div>

          {/* Main Photo Visual Element */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto border border-primary/20 bg-black/40 backdrop-blur-sm p-2">
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary"></div>
              
              <div className="w-full h-full flex items-center justify-center overflow-hidden">
                <img 
                  src="/images/nayderson-main.png" 
                  alt="Nayderson Oliveira" 
                  className="w-full h-full object-cover opacity-90 grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 text-xs font-mono text-muted-foreground">
                FIG. 01 // ARCHITECT
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-[10px] uppercase tracking-[0.2em]">{t('hero_scroll')}</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
