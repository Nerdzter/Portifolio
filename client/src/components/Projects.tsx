import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "HackMeter",
    category: "Intelligence / Automation",
    description: "Automated digital intelligence. Investigate anything, generate live dossiers. For people who want answers — not just 'big data'.",
    tech: ["Python", "OSINT", "Automation"],
    link: "https://github.com/nerdzter/HackMeter",
    featured: true
  },
  {
    title: "Bot-Whatsapp",
    category: "AI / Sales",
    description: "Sells and supports on autopilot. Gemini AI, automated sales, 24/7 response, running in the wild — not just another MVP.",
    tech: ["Node.js", "Gemini AI", "WhatsApp API"],
    link: "https://github.com/nerdzter/Bot-Whatsapp",
    featured: true
  },
  {
    title: "Estoque Películas",
    category: "Management System",
    description: "Stock control on steroids. Cut 2 days of work to 2 clicks. WhatsApp automated reports. Solving real problems.",
    tech: ["Fullstack", "Automation", "React"],
    link: "https://github.com/nerdzter/EstoquePeliculas",
    featured: true
  },
  {
    title: "Auth API Node",
    category: "Backend Infrastructure",
    description: "JWT Auth API. Foundation for any SaaS — simple, robust, production-ready.",
    tech: ["Node.js", "JWT", "Security"],
    link: "https://github.com/nerdzter/auth-api-node",
    featured: false
  },
  {
    title: "Android Manager",
    category: "Security Tool",
    description: "Removes malware, no factory reset. Technical dashboard, more revenue for real shops.",
    tech: ["Android", "Java", "Security"],
    link: "https://github.com/nerdzter/NayTec-Android-Manager",
    featured: false
  },
  {
    title: "Gestão OS",
    category: "Business Logic",
    description: "Zero-paper service management. Real-time OS tracking, from technician to client.",
    tech: ["C++", "Database", "System Design"],
    link: "https://github.com/nerdzter/gest-oOS",
    featured: false
  }
];

export default function Projects() {
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
              // 02. Selected Works
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              SYSTEM <br/> PROTOCOLS
            </h2>
          </div>
          <div className="max-w-md text-muted-foreground text-sm md:text-base text-right md:text-left">
            A collection of systems engineered for performance, scalability, and real-world impact.
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
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                <ArrowUpRight className="text-primary h-6 w-6" />
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="text-xs font-mono text-primary mb-3 uppercase tracking-wider">
                  {project.category}
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

              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute inset-0 z-10 focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label={`View project ${project.title}`}
              >
                <span className="sr-only">View project</span>
              </a>
              
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
            VIEW ALL REPOSITORIES ON GITHUB
          </a>
        </div>
      </div>
    </section>
  );
}
