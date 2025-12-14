import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Briefcase, Calendar, Download, GraduationCap, Trophy } from "lucide-react";
import { Link } from "wouter";

export default function CV() {
  const { t } = useLanguage();

  const experiences = [
    {
      role: "Software Developer",
      company: "BeHeart",
      period: "2024 - Present",
      description: "Focusing on mobile engineering, PPG signals, and physiological data processing. Expanding into AI/ML to improve biometric efficiencies.",
      tech: ["Flutter", "Python", "HealthKit", "PPG Analysis"]
    },
    {
      role: "Freelance Fullstack Developer",
      company: "Self-employed",
      period: "2019 - Present",
      description: "Developing custom solutions for lawyers, retail stores, and e-commerce businesses. Specialized in mobile apps and AI integration.",
      tech: ["React", "Node.js", "Mobile Development", "AI Integration"]
    }
  ];

  const education = [
    {
      degree: "Computer Science",
      school: "UNIPAC",
      period: "2023 - Present",
      status: "In Progress"
    },
    {
      degree: "Applied Data Science Program",
      school: "Bayswater College / SUNY (London)",
      period: "2026 (Upcoming)",
      status: "Approved Exchange Program"
    }
  ];

  const achievements = [
    {
      title: "International Exchange Approvals",
      description: "Approved for 4 international exchange programs including Bayswater College London and SUNY.",
      year: "2024"
    },
    {
      title: "OBMEP Medalist",
      description: "Recognized for mathematical excellence in the Brazilian Public School Mathematics Olympiad.",
      year: "2019"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <Link href="/">
            <a className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-mono text-sm group">
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              BACK_TO_BASE
            </a>
          </Link>
          
          <button className="flex items-center gap-2 bg-primary/10 text-primary border border-primary/30 px-4 py-2 text-sm font-mono hover:bg-primary hover:text-white transition-all">
            <Download className="h-4 w-4" />
            DOWNLOAD_PDF
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <header className="mb-16 border-b border-white/10 pb-8">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
              NAYDERSON <span className="text-primary">OLIVEIRA</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Software Developer & Mobile Engineering Specialist. Building systems that scale and solving real-world problems through code.
            </p>
          </header>

          <div className="grid gap-16">
            {/* Experience Section */}
            <section>
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white">
                <Briefcase className="h-6 w-6 text-primary" />
                PROFESSIONAL EXPERIENCE
              </h2>
              <div className="space-y-12 border-l border-white/10 pl-8 ml-3 relative">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-[39px] top-1 w-5 h-5 rounded-full border-4 border-background bg-primary"></div>
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <span className="text-primary font-mono text-sm">@ {exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono mb-4">
                      <Calendar className="h-3 w-3" />
                      {exp.period}
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-white/5 border border-white/10 text-white/70 font-mono rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education Section */}
            <section>
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white">
                <GraduationCap className="h-6 w-6 text-primary" />
                EDUCATION
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {education.map((edu, index) => (
                  <div key={index} className="bg-white/5 border border-white/10 p-6 hover:border-primary/50 transition-colors">
                    <h3 className="text-lg font-bold text-white mb-1">{edu.degree}</h3>
                    <p className="text-primary text-sm mb-4">{edu.school}</p>
                    <div className="flex justify-between items-center text-xs font-mono text-muted-foreground">
                      <span>{edu.period}</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded">{edu.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Achievements Section */}
            <section>
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white">
                <Trophy className="h-6 w-6 text-primary" />
                ACHIEVEMENTS
              </h2>
              <div className="space-y-6">
                {achievements.map((ach, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="mt-1 min-w-[60px] font-mono text-sm text-primary">{ach.year}</div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{ach.title}</h3>
                      <p className="text-muted-foreground text-sm">{ach.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Continuous Learning */}
            <section>
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white">
                <BookOpen className="h-6 w-6 text-primary" />
                CONTINUOUS LEARNING
              </h2>
              <div className="bg-gradient-to-r from-primary/10 to-blue-600/10 border border-primary/20 p-8 text-center">
                <p className="text-lg text-white mb-4">
                  "I never stopped studying since I was 13. Code is my craft."
                </p>
                <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
                  Constantly taking advanced courses in AI, Machine Learning, and System Architecture to stay ahead of the curve.
                </p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
