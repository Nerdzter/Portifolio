import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-2 bg-black/50 backdrop-blur-md border border-white/10 p-1 rounded-full">
      {(['en', 'pt', 'es'] as const).map((lang) => (
        <button
          key={lang}
          onClick={() => setLanguage(lang)}
          className={`relative px-3 py-1 text-xs font-mono font-bold transition-colors ${
            language === lang ? "text-black" : "text-white/70 hover:text-white"
          }`}
        >
          {language === lang && (
            <motion.div
              layoutId="activeLanguage"
              className="absolute inset-0 bg-primary rounded-full"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
          <span className="relative z-10 uppercase">{lang}</span>
        </button>
      ))}
    </div>
  );
}
