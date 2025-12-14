import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'pt' | 'es';

interface Translations {
  [key: string]: {
    en: string;
    pt: string;
    es: string;
  };
}

export const translations: Translations = {
  // Navigation
  nav_about: { en: "ABOUT", pt: "SOBRE", es: "SOBRE" },
  nav_projects: { en: "PROJECTS", pt: "PROJETOS", es: "PROYECTOS" },
  nav_contact: { en: "CONTACT", pt: "CONTATO", es: "CONTACTO" },

  // Hero
  hero_system_online: { en: "SYSTEM_ONLINE", pt: "SISTEMA_ONLINE", es: "SISTEMA_EN_LINEA" },
  hero_tagline: { 
    en: "\"In life, you either create opportunities, or you're just a spectator.\"", 
    pt: "\"Na vida, ou você cria oportunidades, ou é apenas um espectador.\"", 
    es: "\"En la vida, o creas oportunidades, o eres solo un espectador.\"" 
  },
  hero_role_1: { en: "Fullstack Software Developer", pt: "Desenvolvedor Fullstack", es: "Desarrollador Fullstack" },
  hero_role_2: { en: "Mobile Engineering Specialist", pt: "Especialista em Engenharia Mobile", es: "Especialista en Ingeniería Móvil" },
  hero_role_3: { en: "AI/ML Enthusiast", pt: "Entusiasta de IA/ML", es: "Entusiasta de IA/ML" },
  hero_cta_projects: { en: "View Protocols", pt: "Ver Protocolos", es: "Ver Protocolos" },
  hero_cta_contact: { en: "Initialize Contact", pt: "Iniciar Contato", es: "Iniciar Contacto" },
  hero_scroll: { en: "Scroll", pt: "Rolar", es: "Desplazar" },

  // About
  about_profile_data: { en: "Profile Data", pt: "Dados do Perfil", es: "Datos del Perfil" },
  about_title_1: { en: "THE ARCHITECT", pt: "O ARQUITETO", es: "EL ARQUITECTO" },
  about_title_2: { en: "BEHIND THE CODE", pt: "POR TRÁS DO CÓDIGO", es: "DETRÁS DEL CÓDIGO" },
  about_desc_1: { 
    en: "It started early. At 13, while others played, I was already coding, fueled by an OBMEP medal and a hunger to build. I never stopped. By 19, that relentless drive earned me approvals for 4 international exchanges, including Data Science studies in London at Bayswater College.", 
    pt: "Começou cedo. Aos 13 anos, enquanto outros brincavam, eu já codificava, impulsionado por uma medalha da OBMEP e uma fome de construir. Nunca parei. Aos 19, essa determinação implacável me garantiu aprovações em 4 intercâmbios internacionais, incluindo estudos de Data Science em Londres na Bayswater College.", 
    es: "Empezó temprano. A los 13 años, mientras otros jugaban, yo ya codificaba, impulsado por una medalla de la OBMEP y hambre de construir. Nunca paré. A los 19, esa determinación implacable me aseguró aprobaciones en 4 intercambios internacionales, incluyendo estudios de Data Science en Londres en Bayswater College." 
  },
  about_desc_2: { 
    en: "I've always been a builder. From freelancing for lawyers and e-commerce stores to mastering mobile engineering and AI. Today, as a Computer Science student at UNIPAC and Developer at BeHeart, I don't just write code—I engineer solutions. My studies in AI and mobile are not just academic; they are tools I sharpen daily to solve real-world problems.", 
    pt: "Sempre fui um construtor. Do freelance para advogados e lojas virtuais até dominar engenharia mobile e IA. Hoje, como estudante de Ciência da Computação na UNIPAC e Desenvolvedor na BeHeart, não apenas escrevo código — eu projeto soluções. Meus estudos em IA e mobile não são apenas acadêmicos; são ferramentas que afio diariamente para resolver problemas reais.", 
    es: "Siempre fui un constructor. Desde freelance para abogados y tiendas virtuales hasta dominar ingeniería móvil e IA. Hoy, como estudiante de Ciencias de la Computación en UNIPAC y Desarrollador en BeHeart, no solo escribo código — diseño soluciones. Mis estudios en IA y móvil no son solo académicos; son herramientas que afilo diariamente para resolver problemas reales." 
  },
  about_feature_1_title: { en: "Brutal Execution", pt: "Execução Brutal", es: "Ejecución Brutal" },
  about_feature_1_desc: { en: "I don't just talk. I ship, I improve, I scale. Speed and quality are not mutually exclusive.", pt: "Eu não apenas falo. Eu entrego, melhoro, escalo. Velocidade e qualidade não são mutuamente exclusivas.", es: "No solo hablo. Entrego, mejoro, escalo. Velocidad y calidad no son mutuamente excluyentes." },
  about_feature_2_title: { en: "Global Mindset", pt: "Mentalidade Global", es: "Mentalidad Global" },
  about_feature_2_desc: { en: "4x International Exchange approved. Fluent English. Ready for any market.", pt: "Aprovado em 4 intercâmbios internacionais. Inglês fluente. Pronto para qualquer mercado.", es: "Aprobado en 4 intercambios internacionales. Inglés fluido. Listo para cualquier mercado." },
  about_feature_3_title: { en: "Owner's Mindset", pt: "Mentalidade de Dono", es: "Mentalidad de Dueño" },
  about_feature_3_desc: { en: "I build systems that grow real businesses. Real tech — not just pretty portfolios.", pt: "Construo sistemas que crescem negócios reais. Tecnologia real — não apenas portfólios bonitos.", es: "Construyo sistemas que hacen crecer negocios reales. Tecnología real — no solo portafolios bonitos." },
  about_feature_4_title: { en: "Fullstack Mastery", pt: "Domínio Fullstack", es: "Dominio Fullstack" },
  about_feature_4_desc: { en: "From bulletproof backend to mobile-ready for production. Cross-platform solutions.", pt: "Do backend à prova de balas ao mobile pronto para produção. Soluções multiplataforma.", es: "Desde backend a prueba de balas hasta móvil listo para producción. Soluciones multiplataforma." },
  about_tech_competence: { en: "TECHNICAL_COMPETENCE", pt: "COMPETENCIA_TECNICA", es: "COMPETENCIA_TECNICA" },
  about_core_stack: { en: "CORE STACK", pt: "STACK PRINCIPAL", es: "STACK PRINCIPAL" },
  about_future_target: { en: "FUTURE TARGET", pt: "ALVO FUTURO", es: "OBJETIVO FUTURO" },
  about_future_desc: { en: "Applied Data Science Program, London", pt: "Programa de Data Science Aplicada, Londres", es: "Programa de Data Science Aplicada, Londres" },

  // Projects
  projects_selected_works: { en: "Selected Works", pt: "Trabalhos Selecionados", es: "Trabajos Seleccionados" },
  projects_title: { en: "SYSTEM PROTOCOLS", pt: "PROTOCOLOS DO SISTEMA", es: "PROTOCOLOS DEL SISTEMA" },
  projects_subtitle: { en: "A collection of systems engineered for performance, scalability, and real-world impact.", pt: "Uma coleção de sistemas projetados para desempenho, escalabilidade e impacto no mundo real.", es: "Una colección de sistemas diseñados para rendimiento, escalabilidad e impacto en el mundo real." },
  projects_view_github: { en: "VIEW ALL REPOSITORIES ON GITHUB", pt: "VER TODOS OS REPOSITÓRIOS NO GITHUB", es: "VER TODOS LOS REPOSITORIOS EN GITHUB" },
  
  // Project Descriptions (Assuming static for now, but could be dynamic)
  project_beheart_desc: { en: "Mobile health revolution. Real-time PPG signal processing, physiological data analysis. Available on App Store & Play Store.", pt: "Revolução na saúde móvel. Processamento de sinais PPG em tempo real, análise de dados fisiológicos. Disponível na App Store e Play Store.", es: "Revolución en salud móvil. Procesamiento de señales PPG en tiempo real, análisis de datos fisiológicos. Disponible en App Store y Play Store." },
  project_opencv_desc: { en: "AI-powered Sign Language transcription. Computer vision translating gestures into text in real-time. Breaking communication barriers.", pt: "Transcrição de Libras impulsionada por IA. Visão computacional traduzindo gestos em texto em tempo real. Quebrando barreiras de comunicação.", es: "Transcripción de lenguaje de señas impulsada por IA. Visión por computadora traduciendo gestos a texto en tiempo real. Rompiendo barreras de comunicación." },
  project_hackmeter_desc: { en: "Automated digital intelligence. Investigate anything, generate live dossiers. For people who want answers — not just 'big data'.", pt: "Inteligência digital automatizada. Investigue qualquer coisa, gere dossiês ao vivo. Para quem quer respostas — não apenas 'big data'.", es: "Inteligencia digital automatizada. Investiga cualquier cosa, genera expedientes en vivo. Para quienes quieren respuestas — no solo 'big data'." },
  project_botwhatsapp_desc: { en: "Sells and supports on autopilot. Gemini AI, automated sales, 24/7 response, running in the wild — not just another MVP.", pt: "Vende e dá suporte no piloto automático. Gemini AI, vendas automatizadas, resposta 24/7, rodando no mundo real — não apenas mais um MVP.", es: "Vende y da soporte en piloto automático. Gemini AI, ventas automatizadas, respuesta 24/7, funcionando en el mundo real — no solo otro MVP." },
  project_estoque_desc: { en: "Stock control on steroids. Cut 2 days of work to 2 clicks. WhatsApp automated reports. Solving real problems.", pt: "Controle de estoque anabolizado. Reduza 2 dias de trabalho para 2 cliques. Relatórios automatizados via WhatsApp. Resolvendo problemas reais.", es: "Control de stock con esteroides. Reduce 2 días de trabajo a 2 clics. Informes automatizados por WhatsApp. Resolviendo problemas reales." },
  project_auth_desc: { en: "JWT Auth API. Foundation for any SaaS — simple, robust, production-ready.", pt: "API de Autenticação JWT. Fundação para qualquer SaaS — simples, robusta, pronta para produção.", es: "API de Autenticación JWT. Fundación para cualquier SaaS — simple, robusta, lista para producción." },
  
  project_cat_mobile: { en: "Mobile Engineering", pt: "Engenharia Mobile", es: "Ingeniería Móvil" },
  project_cat_cv: { en: "Computer Vision / AI", pt: "Visão Computacional / IA", es: "Visión por Computadora / IA" },
  project_cat_intel: { en: "Intelligence / Automation", pt: "Inteligência / Automação", es: "Inteligencia / Automatización" },
  project_cat_ai: { en: "AI / Sales", pt: "IA / Vendas", es: "IA / Ventas" },
  project_cat_mgmt: { en: "Management System", pt: "Sistema de Gestão", es: "Sistema de Gestión" },
  project_cat_backend: { en: "Backend Infrastructure", pt: "Infraestrutura Backend", es: "Infraestructura Backend" },


  // Contact
  contact_comm: { en: "Communication", pt: "Comunicação", es: "Comunicación" },
  contact_title_1: { en: "LET'S MAKE IT", pt: "VAMOS FAZER", es: "HAGAMOS QUE" },
  contact_title_2: { en: "HAPPEN", pt: "ACONTECER", es: "SUCEDA" },
  contact_quote: { en: "\"Dreaming small is not my thing. Code that impacts, story that inspires.\"", pt: "\"Sonhar pequeno não é comigo. Código que impacta, história que inspira.\"", es: "\"Soñar en pequeño no es lo mío. Código que impacta, historia que inspira.\"" },
  contact_location: { en: "Barbacena - MG, Brazil", pt: "Barbacena - MG, Brasil", es: "Barbacena - MG, Brasil" },
  contact_available: { en: "nayderson.contato@gmail.com", pt: "nayderson.contato@gmail.com", es: "nayderson.contato@gmail.com" },
  contact_phone: { en: "+55 32 99823-6530", pt: "+55 32 99823-6530", es: "+55 32 99823-6530" },
  contact_name: { en: "Name", pt: "Nome", es: "Nombre" },
  contact_email: { en: "Email", pt: "Email", es: "Email" },
  contact_message: { en: "Message", pt: "Mensagem", es: "Mensaje" },
  contact_placeholder_name: { en: "John Doe", pt: "João Silva", es: "Juan Pérez" },
  contact_placeholder_message: { en: "Tell me about your project...", pt: "Me conte sobre seu projeto...", es: "Cuéntame sobre tu proyecto..." },
  contact_send: { en: "Send Transmission", pt: "Enviar Transmissão", es: "Enviar Transmisión" },
  contact_rights: { en: "ALL RIGHTS RESERVED.", pt: "TODOS OS DIREITOS RESERVADOS.", es: "TODOS LOS DERECHOS RESERVADOS." },
  contact_status: { en: "SYSTEM_STATUS: ONLINE", pt: "STATUS_SISTEMA: ONLINE", es: "ESTADO_SISTEMA: EN LINEA" },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return translations[key][language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
