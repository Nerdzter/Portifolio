import { motion } from "framer-motion";
import { Code2, Cpu, Globe, Zap } from "lucide-react";

const skills = [
  { name: "Flutter & Mobile", level: 95 },
  { name: "Python & AI/ML", level: 85 },
  { name: "Backend Systems", level: 90 },
  { name: "System Architecture", level: 88 },
];

const features = [
  {
    icon: <Zap className="h-6 w-6 text-primary" />,
    title: "Brutal Execution",
    description: "I don't just talk. I ship, I improve, I scale. Speed and quality are not mutually exclusive."
  },
  {
    icon: <Globe className="h-6 w-6 text-primary" />,
    title: "Global Mindset",
    description: "4x International Exchange approved. Fluent English. Ready for any market."
  },
  {
    icon: <Cpu className="h-6 w-6 text-primary" />,
    title: "Owner's Mindset",
    description: "I build systems that grow real businesses. Real tech — not just pretty portfolios."
  },
  {
    icon: <Code2 className="h-6 w-6 text-primary" />,
    title: "Fullstack Mastery",
    description: "From bulletproof backend to mobile-ready for production. Cross-platform solutions."
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-4 px-2 py-1 border border-primary/30 text-xs font-mono text-primary uppercase tracking-widest">
              // 01. Profile Data
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              THE ARCHITECT <br/>
              <span className="text-muted-foreground">BEHIND THE CODE</span>
            </h2>
            
            <div className="prose prose-invert max-w-none text-muted-foreground mb-8">
              <p className="text-lg leading-relaxed">
                I'm Nayderson — I didn't start with privilege. By 19, I was already selected for 4 international exchanges.
                I build systems that grow real businesses. My code solves, automates, and scales. If you want average, look elsewhere.
              </p>
              <p className="mt-4">
                Currently working as a Software Developer at <span className="text-foreground font-semibold">BeHeart</span>, focusing on mobile engineering, 
                PPG signals, and physiological data processing. I'm expanding into AI/ML to improve biometric efficiencies.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {features.map((feature, index) => (
                <div key={index} className="border border-border bg-card/50 p-4 hover:border-primary/50 transition-colors group">
                  <div className="mb-3 p-2 bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-foreground mb-2 font-mono">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 opacity-30 blur-lg"></div>
              <div className="relative border border-border bg-black/80 p-6 md:p-8">
                <h3 className="text-xl font-mono font-bold mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary"></span>
                  TECHNICAL_COMPETENCE
                </h3>
                
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2 font-mono text-sm">
                        <span>{skill.name}</span>
                        <span className="text-primary">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full bg-secondary overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.4 + (index * 0.1) }}
                          className="h-full bg-primary"
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <h4 className="font-mono text-sm text-muted-foreground mb-4">CORE STACK</h4>
                  <div className="flex flex-wrap gap-2">
                    {["TypeScript", "Python", "C++", "Java", "Swift", "Flutter", "GCP", "Node.js", "React"].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-mono border border-border hover:border-primary transition-colors cursor-default">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 border border-primary/20 bg-primary/5">
              <div className="text-4xl font-bold text-primary font-mono">2026</div>
              <div className="text-sm text-muted-foreground">
                <span className="block font-bold text-foreground">FUTURE TARGET</span>
                Applied Data Science Program, London
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
