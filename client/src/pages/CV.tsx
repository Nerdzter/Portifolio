import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { ArrowLeft, Download, Briefcase, GraduationCap, Award, Code, Globe } from "lucide-react";
import { Link } from "wouter";

export default function CV() {
  const { t } = useLanguage();

  const experiences = [
    {
      role: "Mobile Developer Pleno",
      company: "BeHeart",
      period: "Jul 2025 - Present",
      location: "Barbacena, MG (Remote)",
      description: "Core developer for health-tech solutions. Responsible for creating, implementing, and maintaining apps integrating advanced technologies like PPG biometric data analysis.",
      achievements: [
        "Built mobile interface and logic using Flutter/Dart for heart coherence measurement via camera PPG.",
        "Implemented signal processing algorithms for HRV analysis, including normalization and digital filters.",
        "Integrated conversational AI for emotional self-regulation and gamification.",
        "Managed data architecture and anonymization in compliance with LGPD."
      ],
      tech: ["Flutter", "Dart", "Signal Processing", "AI Integration", "HealthKit"],
      logo: "/images/beheart-logo.png" // Placeholder, user can replace
    },
    {
      role: "Sales Manager / Technical Lead",
      company: "Cleber Celulares Ltda",
      period: "Mar 2024 - Jul 2025",
      location: "Barbacena, MG",
      description: "Managed store operations, technical team coordination, and quality assurance. Promoted from technician to manager.",
      achievements: [
        "Reduced stock errors with a custom inventory system.",
        "Automated manual tasks using Python, Electron, and ADB tools.",
        "Created 'NayTec Android Manager' for virus removal and optimization without reset.",
        "Structured logistics flow, improving delivery time and accuracy."
      ],
      tech: ["Management", "Python", "Electron", "ADB", "Android Support"],
      logo: "/images/cleber-logo.png"
    },
    {
      role: "Freelance Software Developer",
      company: "Self-employed",
      period: "Jan 2020 - Present",
      location: "Remote",
      description: "Full-stack development for various clients including lawyers and e-commerce stores.",
      achievements: [
        "Developed mobile applications and web solutions.",
        "Delivered custom software for small businesses.",
        "Specialized in automation and digital presence."
      ],
      tech: ["Web Development", "Mobile Apps", "Automation", "Fullstack"],
      logo: "/images/avatar-placeholder.jpg" // Using avatar as placeholder for self-employed
    },
    {
      role: "Young Apprentice (Administrative)",
      company: "WR Embalagens",
      period: "Feb 2021 - Jan 2022",
      location: "Barbacena, MG",
      description: "Administrative support in the financial sector, with cross-departmental collaboration.",
      achievements: [
        "Managed document digitization, filing, and email communications.",
        "Developed advanced Excel and Power BI skills for financial reporting.",
        "Demonstrated proactivity by assisting other departments upon task completion."
      ],
      tech: ["Excel", "Power BI", "Administrative Support", "Finance"],
      logo: "/images/wr-logo.jpg"
    }
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science",
      school: "UNIPAC - Centro Universitário Presidente Antônio Carlos",
      period: "Feb 2025 - Dec 2029",
      details: "Focus on Machine Learning, Generative AI, and Cloud Computing.",
      logo: "/images/unipac-logo.png" // Placeholder
    },
    {
      degree: "Applied Data Science Program",
      school: "Bayswater College, London",
      period: "Upcoming (Exchange)",
      details: "International specialization in Data Science.",
      logo: "/images/bayswater-logo.png" // Placeholder
    },
    {
      degree: "High School",
      school: "Escola Henrique Diniz",
      period: "2021 - 2023",
      details: "Completed with general formation.",
      logo: "/images/henrique-diniz-logo.png" // Placeholder
    }
  ];

  const certifications = [
    { name: "Artificial Intelligence Fundamentals", issuer: "IBM", date: "Dec 2025", logo: "/images/ibm-logo.png" },
    { name: "Introduction to Back-End Development", issuer: "Meta", date: "May 2025", logo: "/images/meta-logo.png" },
    { name: "Introduction to Databases for Back-End", issuer: "Meta", date: "May 2025", logo: "/images/meta-logo.png" },
    { name: "Python Programming", issuer: "Meta", date: "May 2025", logo: "/images/meta-logo.png" },
    { name: "Version Control", issuer: "Meta", date: "May 2025", logo: "/images/meta-logo.png" },
    { name: "Java Programming Mastery", issuer: "DIO", date: "Aug 2024", logo: "/images/dio-logo.png" },
    { name: "DevSecOps for Managers", issuer: "The Linux Foundation", date: "May 2024", logo: "/images/linux-foundation-logo.png" }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-primary selection:text-white">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
      </div>

      <div className="container max-w-4xl mx-auto px-4 py-12 relative z-10">
        {/* Header */}
        <header className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <Link href="/">
              <a className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-6 group">
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                RETURN_TO_BASE
              </a>
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-2">
              NAYDERSON <span className="text-primary">OLIVEIRA</span>
            </h1>
            <p className="text-xl text-muted-foreground font-mono">
              FULLSTACK DEVELOPER // MOBILE SPECIALIST
            </p>
          </div>
          
          <button 
            onClick={() => window.print()}
            className="inline-flex items-center px-6 py-3 bg-white/5 border border-white/10 hover:bg-primary hover:border-primary transition-all text-sm font-mono tracking-wider group"
          >
            <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
            DOWNLOAD_PROTOCOL
          </button>
        </header>

        {/* Experience Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
            <Briefcase className="text-primary h-6 w-6" />
            <h2 className="text-2xl font-bold tracking-wide">OPERATIONAL_HISTORY</h2>
          </div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 border-l border-white/10"
              >
                <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-primary rounded-full"></div>
                
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                  <div className="flex items-center gap-3">
                    {/* Logo Placeholder - In a real app, use next/image or img tag */}
                    <div className="w-8 h-8 bg-white/10 rounded-full overflow-hidden flex items-center justify-center">
                       <img src={exp.logo} alt={exp.company} className="w-full h-full object-cover" onError={(e) => e.currentTarget.src = '/images/avatar-placeholder.jpg'} />
                    </div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  </div>
                  <span className="font-mono text-sm text-primary">{exp.period}</span>
                </div>
                
                <div className="text-muted-foreground mb-4 font-mono text-sm pl-11">
                  {exp.company} // {exp.location}
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed pl-11">
                  {exp.description}
                </p>
                
                <ul className="list-disc list-inside space-y-1 text-gray-400 mb-4 text-sm pl-11">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 pl-11">
                  {exp.tech.map((t, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-white/5 text-white/70 font-mono border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
            <GraduationCap className="text-primary h-6 w-6" />
            <h2 className="text-2xl font-bold tracking-wide">KNOWLEDGE_BASE</h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            {education.map((edu, index) => (
              <div key={index} className="bg-card/5 border border-white/10 p-6 hover:border-primary/30 transition-colors flex gap-4">
                 <div className="w-12 h-12 bg-white/10 rounded-md overflow-hidden flex-shrink-0">
                    <img src={edu.logo} alt={edu.school} className="w-full h-full object-cover" onError={(e) => e.currentTarget.src = '/images/avatar-placeholder.jpg'} />
                 </div>
                 <div>
                    <h3 className="text-lg font-bold text-white mb-1">{edu.degree}</h3>
                    <div className="text-primary font-mono text-sm mb-2">{edu.school}</div>
                    <div className="text-muted-foreground text-sm mb-3">{edu.period}</div>
                    <p className="text-sm text-gray-400">{edu.details}</p>
                 </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications & Awards */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
            <Award className="text-primary h-6 w-6" />
            <h2 className="text-2xl font-bold tracking-wide">CERTIFIED_PROTOCOLS</h2>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                <div className="mt-1 w-8 h-8 bg-white/10 rounded-full overflow-hidden flex-shrink-0">
                   <img src={cert.logo} alt={cert.issuer} className="w-full h-full object-cover" onError={(e) => e.currentTarget.src = '/images/avatar-placeholder.jpg'} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white leading-tight mb-1">{cert.name}</h4>
                  <div className="text-xs text-muted-foreground font-mono">
                    {cert.issuer} // {cert.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-muted-foreground text-sm font-mono pt-12 border-t border-white/10">
          <p>END_OF_FILE // NAYDERSON_OLIVEIRA_CV_2025</p>
        </footer>
      </div>
    </div>
  );
}
