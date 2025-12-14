import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-background relative border-t border-white/5">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-4 px-2 py-1 border border-primary/30 text-xs font-mono text-primary uppercase tracking-widest">
              // 03. {t('contact_comm')}
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">
              {t('contact_title_1')} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">{t('contact_title_2')}</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-md">
              {t('contact_quote')}
            </p>

            <div className="space-y-6 font-mono text-sm">
              <div className="flex items-center gap-4 text-muted-foreground hover:text-white transition-colors">
                <div className="w-10 h-10 flex items-center justify-center border border-white/10 bg-white/5">
                  <MapPin className="h-4 w-4" />
                </div>
                <span>{t('contact_location')}</span>
              </div>
              
              <a href="mailto:nayderson.contato@gmail.com" className="flex items-center gap-4 text-muted-foreground hover:text-white transition-colors group">
                <div className="w-10 h-10 flex items-center justify-center border border-white/10 bg-white/5 group-hover:border-primary/50 group-hover:text-primary transition-colors">
                  <Mail className="h-4 w-4" />
                </div>
                <span>{t('contact_available')}</span>
              </a>

              <a href="tel:+5532998236530" className="flex items-center gap-4 text-muted-foreground hover:text-white transition-colors group">
                <div className="w-10 h-10 flex items-center justify-center border border-white/10 bg-white/5 group-hover:border-primary/50 group-hover:text-primary transition-colors">
                  <span className="text-xs">TEL</span>
                </div>
                <span>{t('contact_phone')}</span>
              </a>
            </div>

            <div className="flex gap-4 mt-12">
              <a 
                href="https://github.com/nerdzter" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center border border-white/10 bg-white/5 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/in/eunayderson" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center border border-white/10 bg-white/5 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-600/20 blur-3xl -z-10"></div>
            <div className="border border-white/10 bg-black/50 backdrop-blur-sm p-8 md:p-12">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-mono uppercase text-muted-foreground">{t('contact_name')}</label>
                  <input 
                    type="text" 
                    id="name"
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-colors"
                    placeholder={t('contact_placeholder_name')}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-mono uppercase text-muted-foreground">{t('contact_email')}</label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-mono uppercase text-muted-foreground">{t('contact_message')}</label>
                  <textarea 
                    id="message"
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-colors resize-none"
                    placeholder={t('contact_placeholder_message')}
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-primary text-white font-bold uppercase tracking-widest py-4 hover:bg-primary/90 transition-colors"
                >
                  {t('contact_send')}
                </button>
              </form>
            </div>
          </motion.div>

        </div>
        
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground font-mono">
          <div>
            © {new Date().getFullYear()} NAYDERSON OLIVEIRA. {t('contact_rights')}
          </div>
          <div className="flex gap-6">
            <span>{t('contact_status')}</span>
            <span>V.1.0.0</span>
          </div>
        </div>
      </div>
    </section>
  );
}
