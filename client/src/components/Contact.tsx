import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export default function Contact() {
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
              // 03. Communication
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">
              LET'S MAKE IT <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">HAPPEN</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-md">
              "Dreaming small is not my thing. Code that impacts, story that inspires."
            </p>

            <div className="space-y-6 font-mono text-sm">
              <div className="flex items-center gap-4 text-muted-foreground hover:text-white transition-colors">
                <div className="w-10 h-10 flex items-center justify-center border border-white/10 bg-white/5">
                  <MapPin className="h-4 w-4" />
                </div>
                <span>Barbacena - MG, Brazil</span>
              </div>
              
              <a href="mailto:contact@nayderson.dev" className="flex items-center gap-4 text-muted-foreground hover:text-white transition-colors group">
                <div className="w-10 h-10 flex items-center justify-center border border-white/10 bg-white/5 group-hover:border-primary/50 group-hover:text-primary transition-colors">
                  <Mail className="h-4 w-4" />
                </div>
                <span>Available for new opportunities</span>
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
                  <label htmlFor="name" className="text-xs font-mono uppercase text-muted-foreground">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-mono uppercase text-muted-foreground">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-mono uppercase text-muted-foreground">Message</label>
                  <textarea 
                    id="message"
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-primary text-white font-bold uppercase tracking-widest py-4 hover:bg-primary/90 transition-colors"
                >
                  Send Transmission
                </button>
              </form>
            </div>
          </motion.div>

        </div>
        
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground font-mono">
          <div>
            © {new Date().getFullYear()} NAYDERSON OLIVEIRA. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-6">
            <span>SYSTEM_STATUS: ONLINE</span>
            <span>V.1.0.0</span>
          </div>
        </div>
      </div>
    </section>
  );
}
