import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

export default function Projects() {
  const { t } = useLanguage();

  const projects = [
    {
      title: "BeHeart App",
      category: t('project_cat_mobile'),
      description: t('project_beheart_desc'),
      tech: ["Flutter", "PPG Signals", "HealthKit"],
      links: [
        { url: "https://play.google.com/store/apps/details?id=com.beheart&hl=pt_BR", label: "Play Store", icon: "playstore" },
        { url: "https://apps.apple.com/br/app/beheart-app/id6444872901", label: "App Store", icon: "appstore" }
      ],
      featured: true,
      highlight: true
    },
    {
      title: "Libras AI Transcription",
      category: t('project_cat_cv'),
      description: t('project_opencv_desc'),
      tech: ["OpenCV", "MediaPipe", "Python"],
      link: "https://github.com/Nerdzter/OpenCV-MediaPipe",
      featured: true
    },
    {
      title: "HackMeter",
      category: t('project_cat_intel'),
      description: t('project_hackmeter_desc'),
      tech: ["Python", "OSINT", "Automation"],
      link: "https://github.com/nerdzter/HackMeter",
      featured: true
    },
    {
      title: "Bot-Whatsapp",
      category: t('project_cat_ai'),
      description: t('project_botwhatsapp_desc'),
      tech: ["Node.js", "Gemini AI", "WhatsApp API"],
      link: "https://github.com/nerdzter/Bot-Whatsapp",
      featured: true
    },
    {
      title: "Estoque Películas",
      category: t('project_cat_mgmt'),
      description: t('project_estoque_desc'),
      tech: ["Fullstack", "Automation", "React"],
      link: "https://github.com/nerdzter/EstoquePeliculas",
      featured: false
    },
    {
      title: "Auth API Node",
      category: t('project_cat_backend'),
      description: t('project_auth_desc'),
      tech: ["Node.js", "JWT", "Security"],
      link: "https://github.com/nerdzter/auth-api-node",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-24 bg-black relative">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <div className="inline-block mb-4 px-2 py-1 border border-primary/30 text-xs font-mono text-primary uppercase tracking-widest">
              // 02. {t('projects_selected_works')}
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              {t('projects_title')}
            </h2>
          </div>
          <div className="max-w-md text-muted-foreground text-sm md:text-base text-right md:text-left">
            {t('projects_subtitle')}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card/5 border border-white/10 hover:border-primary/50 transition-all duration-300 overflow-hidden flex flex-col h-full"
            >
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-3">
                  <div className="text-xs font-mono text-primary uppercase tracking-wider">
                    {project.category}
                  </div>
                  
                  {/* Links Section */}
                  <div className="flex gap-2 z-20">
                    {/* @ts-ignore */}
                    {project.links ? (
                      // @ts-ignore
                      project.links.map((link, i) => (
                        <a 
                          key={i}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors p-1"
                          title={link.label}
                        >
                          {link.icon === 'playstore' ? (
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" /></svg>
                          ) : (
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.37 12.36,4.26 13,3.5Z" /></svg>
                          )}
                        </a>
                      ))
                    ) : (
                      <a 
                        // @ts-ignore
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors p-1"
                      >
                        <ArrowUpRight className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] px-2 py-1 bg-white/5 border border-white/10 text-white/70 font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="https://github.com/nerdzter" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-mono text-sm border-b border-transparent hover:border-primary pb-1"
          >
            <Github className="h-4 w-4" />
            {t('projects_view_github')}
          </a>
        </div>
      </div>
    </section>
  );
}
