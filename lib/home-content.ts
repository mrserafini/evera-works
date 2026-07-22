import type { Locale } from "@/i18n/routing";

/**
 * Bilingual content for the home page, following the client's Squarespace
 * mockup structure but co-located as structured data (same pattern as
 * services-data.ts). English is the primary language; Spanish is the toggle.
 */

type Bi<T> = Record<Locale, T>;

export interface FeatureItem {
  icon: string; // lucide-react icon name (mapped in the section)
  title: string;
  description: string;
}

export interface HomeServiceItem {
  image: string;
  title: string;
  description: string;
  /** Tailwind object-position class to keep the photo's subject in frame. */
  imagePosition?: string;
}

// ---------------------------------------------------------------------------
// Hero + statement
// ---------------------------------------------------------------------------
export const hero: Bi<{
  titleLead: string;
  titleHighlight: string;
  subtitle: string;
  ctaLabel: string;
  weLead: string;
  wePillars: string;
  weGlobally: string;
  image: string;
}> = {
  en: {
    titleLead: "ONE PARTNER.",
    titleHighlight: "ONE TEAM.",
    subtitle:
      "Your industry-tailored nearshore BPO. Designed around your business, your timezone, and your standards.",
    ctaLabel: "Start a discovery call",
    weLead: "WE",
    wePillars: "RECRUIT · ONBOARD · OPERATE",
    weGlobally: "GLOBALLY",
    image: "/images/unsplash-image-mawU2PoJWfU.jpg",
  },
  es: {
    titleLead: "UN SOCIO.",
    titleHighlight: "UN EQUIPO.",
    subtitle:
      "Tu BPO nearshore hecho a la medida de tu industria. Diseñado en torno a tu negocio, tu zona horaria y tus estándares.",
    ctaLabel: "Agenda una llamada",
    weLead: "NOSOTROS",
    wePillars: "RECLUTAMOS · INTEGRAMOS · OPERAMOS",
    weGlobally: "GLOBALMENTE",
    image: "/images/unsplash-image-mawU2PoJWfU.jpg",
  },
};

export const statement: Bi<{
  label: string;
  watermark: string;
  bigWord: string;
  text: string;
  cta: string;
  image: string;
}> = {
  en: {
    label: "Recruit · Onboard · Operate",
    watermark: "WE",
    bigWord: "GLOBALLY.",
    text: "Integrated into your tools, your timezone, and your standards.",
    cta: "Start a Discovery Call",
    image: "/images/unsplash-image-mawU2PoJWfU.jpg",
  },
  es: {
    label: "Reclutar · Integrar · Operar",
    watermark: "OPERAMOS",
    bigWord: "GLOBALMENTE.",
    text: "Integrados a tus herramientas, tu zona horaria y tus estándares.",
    cta: "Agenda una llamada",
    image: "/images/unsplash-image-mawU2PoJWfU.jpg",
  },
};

// ---------------------------------------------------------------------------
// Differentiators — "Recruit · Onboard · Operate"
// ---------------------------------------------------------------------------
export const differentiators: Bi<{
  eyebrow: string;
  title: string;
  subtitle: string;
  items: FeatureItem[];
}> = {
  en: {
    eyebrow: "How We Work",
    title: "The right team\nbuilt for you",
    subtitle:
      "We bring together the people, capabilities, and systems your business needs to grow.",
    items: [
      {
        icon: "Languages",
        title: "Multi-lingual Professionals",
        description:
          "Our team communicates confidently across English and Spanish, with French and Italian capabilities available for specialized roles.",
      },
      {
        icon: "Globe2",
        title: "Culturally Aligned",
        description:
          "Based in the Dominican Republic, we understand American and European business culture and customer expectations across multiple markets.",
      },
      {
        icon: "Cpu",
        title: "AI-Ready. Human-Centered.",
        description:
          "We use AI to help your business achieve greater efficiency while maintaining the quality and judgment only people can provide.",
      },
      {
        icon: "TrendingUp",
        title: "Growth Focused",
        description:
          "Great partnerships begin with great people. We continuously develop our talent, reducing turnover and supporting long-term success.",
      },
      {
        icon: "Scaling",
        title: "Scalable by Design",
        description:
          "Build the capacity you need today while creating the flexibility to expand tomorrow. Our teams are designed to scale alongside your business and adapt as your needs change.",
      },
      {
        icon: "Zap",
        title: "Rapid Recruitment",
        description:
          "Fill critical roles faster with our pre-vetted professionals, ready to contribute from day one.",
      },
    ],
  },
  es: {
    eyebrow: "Cómo Trabajamos",
    title: "El equipo ideal\nhecho para ti",
    subtitle:
      "Reunimos las personas, capacidades y sistemas que tu negocio necesita para crecer.",
    items: [
      {
        icon: "Languages",
        title: "Profesionales Multilingües",
        description:
          "Nuestro equipo se comunica con confianza en inglés y español, con capacidades en francés e italiano para roles especializados.",
      },
      {
        icon: "Globe2",
        title: "Alineados Culturalmente",
        description:
          "Con base en República Dominicana, entendemos la cultura de negocios y las expectativas del cliente en Norteamérica y Europa.",
      },
      {
        icon: "Cpu",
        title: "Listos para IA. Centrados en las personas.",
        description:
          "Usamos IA para lograr mayor eficiencia manteniendo la calidad y el criterio que solo las personas pueden aportar.",
      },
      {
        icon: "TrendingUp",
        title: "Enfoque en el Crecimiento",
        description:
          "Las grandes alianzas empiezan con grandes personas. Desarrollamos nuestro talento continuamente, reduciendo la rotación.",
      },
      {
        icon: "Scaling",
        title: "Escalable por Diseño",
        description:
          "Construye la capacidad que necesitas hoy y crea la flexibilidad para expandirte mañana. Nuestros equipos están diseñados para escalar junto a tu negocio y adaptarse a medida que cambian tus necesidades.",
      },
      {
        icon: "Zap",
        title: "Reclutamiento Ágil",
        description:
          "Cubre roles críticos más rápido con profesionales pre-evaluados, listos para aportar desde el primer día.",
      },
    ],
  },
};

// ---------------------------------------------------------------------------
// Coverage band
// ---------------------------------------------------------------------------
export const coverage: Bi<{ label: string; value: string }[]> = {
  en: [
    { value: "24/7", label: "Coverage" },
    { value: "Multilingual", label: "EN · ES · FR · IT" },
    { value: "Now Serving", label: "North America & Europe" },
  ],
  es: [
    { value: "24/7", label: "Cobertura" },
    { value: "Multilingüe", label: "EN · ES · FR · IT" },
    { value: "Ahora Atendemos", label: "Norteamérica y Europa" },
  ],
};

// ---------------------------------------------------------------------------
// Services — "The people behind EVERA"
// ---------------------------------------------------------------------------
export const servicesSection: Bi<{ eyebrow: string; title: string; subtitle: string }> = {
  en: {
    eyebrow: "What we do",
    title: "Our Services",
    subtitle:
      "Designed to integrate seamlessly with your operations to deliver valuable results.",
  },
  es: {
    eyebrow: "Qué hacemos",
    title: "Nuestros Servicios",
    subtitle:
      "Diseñados para integrarse sin fricción con tus operaciones y entregar resultados valiosos.",
  },
};

// Image ↔ service mapping follows the client's mockup: tree → Energy,
// handshake → E-Marketing, cargo ship → Freight, clinician → Healthcare,
// scales of justice → Legal, audio mixer → Digital Media & Creative.
export const homeServices: Bi<HomeServiceItem[]> = {
  en: [
    {
      image: "/images/unsplash-image-4NhqyQeErP8.jpg",
      title: "Energy Supplier Support",
      description:
        "Scalable sales and customer support for energy retailers, powered by inbound and outbound specialists who deliver measurable results.",
    },
    {
      image: "/images/unsplash-image-6-iunIrJtbQ.jpg",
      title: "IB & OB Sales",
      description:
        "Sales professionals who help businesses generate new opportunities, build strong customer relationships, and increase revenue through effective inbound and outbound sales strategies.",
    },
    {
      image: "/images/unsplash-image-2IzNzeJgjcI.jpg",
      imagePosition: "object-bottom",
      title: "Freight Forward & Logistics",
      description:
        "Dedicated logistics support designed to streamline dispatch coordination, shipment tracking, carrier communication, and daily operations.",
    },
    {
      image: "/images/unsplash-image-healthcare-phone.jpg",
      title: "Healthcare",
      description:
        "Comprehensive support for healthcare providers, including medical interpretation, patient intake, and appointment scheduling, in compliance with HIPAA standards.",
    },
    {
      image: "/images/unsplash-image-zbQ5UaREHx4.jpg",
      imagePosition: "object-left",
      title: "Legal Admin Support",
      description:
        "Administrative solutions for legal practices, covering client intake, consultation scheduling, and case coordination with a focus on accuracy and compliance.",
    },
    {
      image: "/images/unsplash-image-N1I6IgDOGJs.jpg",
      title: "Digital Media & Creative",
      description:
        "Expert audio editing and creative services that help businesses produce high-quality audio, voice recordings, and digital content with a professional finish.",
    },
    {
      image: "/images/unsplash-image-ai-circuit.jpg",
      title: "AI Operations Consulting",
      description:
        "Transform your operations with AI. We evaluate existing processes and identify high-impact automation opportunities for successful implementation.",
    },
    {
      image: "/images/unsplash-image-marketing-analytics.jpg",
      title: "Digital Marketing",
      description:
        "Flexible marketing support powered by experienced professionals who help businesses expand their reach and increase conversions.",
    },
  ],
  es: [
    {
      image: "/images/unsplash-image-4NhqyQeErP8.jpg",
      title: "Soporte a Proveedores de Energía",
      description:
        "Ventas y atención al cliente escalables para minoristas de energía, con especialistas inbound y outbound que entregan resultados medibles.",
    },
    {
      image: "/images/unsplash-image-6-iunIrJtbQ.jpg",
      title: "Ventas IB & OB",
      description:
        "Profesionales de ventas que ayudan a las empresas a generar nuevas oportunidades, construir relaciones sólidas con los clientes y aumentar los ingresos mediante estrategias efectivas de ventas inbound y outbound.",
    },
    {
      image: "/images/unsplash-image-2IzNzeJgjcI.jpg",
      imagePosition: "object-bottom",
      title: "Carga y Logística",
      description:
        "Soporte logístico dedicado para optimizar coordinación de despacho, seguimiento de envíos, comunicación con transportistas y operaciones diarias.",
    },
    {
      image: "/images/unsplash-image-healthcare-phone.jpg",
      title: "Salud",
      description:
        "Soporte integral para proveedores de salud, incluyendo interpretación médica, admisión de pacientes y agenda de citas, en cumplimiento con HIPAA.",
    },
    {
      image: "/images/unsplash-image-zbQ5UaREHx4.jpg",
      imagePosition: "object-left",
      title: "Soporte Administrativo Legal",
      description:
        "Soluciones administrativas para despachos legales, que cubren admisión de clientes, agenda de consultas y coordinación de casos con foco en precisión y cumplimiento.",
    },
    {
      image: "/images/unsplash-image-N1I6IgDOGJs.jpg",
      title: "Medios Digitales y Creatividad",
      description:
        "Edición experta de audio y servicios creativos para producir audio, grabaciones de voz y contenido digital de alta calidad con acabado profesional.",
    },
    {
      image: "/images/unsplash-image-ai-circuit.jpg",
      title: "Consultoría de Operaciones con IA",
      description:
        "Transforma tu operación con IA. Evaluamos procesos existentes e identificamos oportunidades de automatización de alto impacto.",
    },
    {
      image: "/images/unsplash-image-marketing-analytics.jpg",
      title: "Marketing Digital",
      description:
        "Soporte de marketing flexible con profesionales experimentados que ayudan a ampliar el alcance y aumentar conversiones.",
    },
  ],
};

// ---------------------------------------------------------------------------
// Team / Vision
// ---------------------------------------------------------------------------
export const team: Bi<{
  eyebrow: string;
  title: string;
  subtitle: string;
  visionLabel: string;
  vision: string;
  story: string[];
  /** Big trust stat shown beside the story. */
  stat: { value: string; label: string };
  image: string;
}> = {
  en: {
    eyebrow: "Who we are",
    title: "Our Team",
    subtitle: "The people behind EVERA",
    visionLabel: "Our Vision",
    vision:
      "The future belongs to businesses that embrace innovation. Technology never stands still, and neither do we. We believe the future isn't about replacing human value, but empowering the right people with the tools to amplify it.",
    story: [
      "EVERA was founded by professionals with over 11 years of experience in recruitment, business operations, customer support, and workforce management. Having worked on both sides of the hiring process, we understand the challenges of building high-performing teams and streamlining operations.",
      "Today, we bring that experience to organizations across multiple industries, delivering reliable talent and operational solutions tailored to their needs.",
    ],
    stat: { value: "11+", label: "years of experience behind every partnership" },
    image: "/images/unsplash-image--_OuVFhN5BU.jpg",
  },
  es: {
    eyebrow: "Quiénes somos",
    title: "Nuestro Equipo",
    subtitle: "Las personas detrás de EVERA",
    visionLabel: "Nuestra Visión",
    vision:
      "El futuro es de las empresas que abrazan la innovación. La tecnología nunca se detiene, y nosotros tampoco. Creemos que el futuro no se trata de reemplazar el valor humano, sino de potenciar a las personas correctas con las herramientas para amplificarlo.",
    story: [
      "EVERA fue fundada por profesionales con más de 11 años de experiencia en reclutamiento, operaciones de negocio, atención al cliente y gestión de talento. Habiendo trabajado en ambos lados del proceso de contratación, entendemos los retos de construir equipos de alto rendimiento y optimizar operaciones.",
      "Hoy llevamos esa experiencia a organizaciones de múltiples industrias, entregando talento confiable y soluciones operativas a su medida.",
    ],
    stat: { value: "11+", label: "años de experiencia detrás de cada alianza" },
    image: "/images/unsplash-image--_OuVFhN5BU.jpg",
  },
};

// ---------------------------------------------------------------------------
// Capabilities crawl (rolling banner on the About page)
// ---------------------------------------------------------------------------
export const capabilities: Bi<string[]> = {
  en: [
    "Project Management",
    "Operations",
    "Back Office Support",
    "Freight Forwarding Logistics",
    "Interpretation Services",
    "IB-OB Sales",
    "Digital Marketing",
    "Healthcare Admin",
    "Legal Admin",
    "Audio and Video Editing",
    "Recruitment",
  ],
  es: [
    "Gestión de Proyectos",
    "Operaciones",
    "Soporte Back Office",
    "Logística y Carga",
    "Servicios de Interpretación",
    "Ventas IB-OB",
    "Marketing Digital",
    "Administración de Salud",
    "Administración Legal",
    "Edición de Audio y Video",
    "Reclutamiento",
  ],
};

// ---------------------------------------------------------------------------
// Values — The 4 C's
// ---------------------------------------------------------------------------
export const values: Bi<{
  eyebrow: string;
  title: string;
  items: { letter: string; title: string; description: string }[];
}> = {
  en: {
    eyebrow: "Our Values",
    title: "The 4 C's",
    items: [
      {
        letter: "C",
        title: "Clarity",
        description:
          "Honest, straightforward communication and ethical business practices. We set clear expectations and build trust through accountability and consistency.",
      },
      {
        letter: "C",
        title: "Commitment",
        description:
          "We stand behind every partnership with dedication, reliability, and a focus on delivering measurable results. Your goals become our mission.",
      },
      {
        letter: "C",
        title: "Collaboration",
        description:
          "Exceptional businesses are built by exceptional people. We foster meaningful careers and lasting partnerships that benefit clients and professionals alike.",
      },
      {
        letter: "C",
        title: "Constant Improvement",
        description:
          "We believe personal growth leads to collective success. By continuously learning, developing our skills, and striving to be better, we create a positive impact on our colleagues, our clients, and the people we serve.",
      },
    ],
  },
  es: {
    eyebrow: "Nuestros Valores",
    title: "Las 4 C",
    items: [
      {
        letter: "C",
        title: "Claridad",
        description:
          "Comunicación honesta y directa, con prácticas de negocio éticas. Fijamos expectativas claras y construimos confianza a través de la responsabilidad y la consistencia.",
      },
      {
        letter: "C",
        title: "Compromiso",
        description:
          "Respaldamos cada alianza con dedicación, confiabilidad y foco en resultados medibles. Tus objetivos se vuelven nuestra misión.",
      },
      {
        letter: "C",
        title: "Colaboración",
        description:
          "Los negocios excepcionales los construyen personas excepcionales. Fomentamos carreras significativas y alianzas duraderas que benefician a clientes y profesionales.",
      },
      {
        letter: "C",
        title: "Constante Mejora",
        description:
          "Creemos que el crecimiento personal lleva al éxito colectivo. Al aprender continuamente, desarrollar nuestras habilidades y esforzarnos por ser mejores, generamos un impacto positivo en nuestros colegas, nuestros clientes y las personas a las que servimos.",
      },
    ],
  },
};

// ---------------------------------------------------------------------------
// Stats
// ---------------------------------------------------------------------------
export const stats: Bi<{ value: string; label: string }[]> = {
  en: [
    { value: "10+", label: "Industries served" },
    { value: "11+", label: "Years of experience" },
    { value: "8+", label: "Countries supported" },
  ],
  es: [
    { value: "10+", label: "Industrias atendidas" },
    { value: "11+", label: "Años de experiencia" },
    { value: "8+", label: "Países atendidos" },
  ],
};

// ---------------------------------------------------------------------------
// Why EVERA
// ---------------------------------------------------------------------------
export const why: Bi<{
  eyebrow: string;
  title: string;
  items: FeatureItem[];
  assessmentTitle: string;
  assessment: string[];
}> = {
  en: {
    eyebrow: "Why EVERA?",
    title: "What clients can expect",
    items: [
      {
        icon: "ShieldCheck",
        title: "Reliability",
        description:
          "We thoroughly vet every professional to ensure you work with qualified, reliable, and trustworthy talent.",
      },
      {
        icon: "Clock",
        title: "Fast Response Times",
        description:
          "We prioritize responsiveness and efficient communication to ensure your needs are addressed quickly and effectively.",
      },
      {
        icon: "Lock",
        title: "Data Security",
        description:
          "We protect your information through secure processes, responsible data handling, and strict international confidentiality standards.",
      },
      {
        icon: "BadgeCheck",
        title: "Compliance",
        description:
          "We follow established policies and procedures aligned with industry-specific regulations and requirements to support compliant and responsible operations.",
      },
    ],
    assessmentTitle: "Our team runs a strategic assessment of your business to:",
    assessment: [
      "Uncover functions that can be outsourced to increase efficiency.",
      "Lower operating costs while maintaining quality and performance.",
      "Integrate AI-powered solutions to automate processes and reduce overhead.",
    ],
  },
  es: {
    eyebrow: "¿Por qué EVERA?",
    title: "Lo que los clientes pueden esperar",
    items: [
      {
        icon: "ShieldCheck",
        title: "Confiabilidad",
        description:
          "Evaluamos a fondo a cada profesional para asegurar que trabajes con talento calificado, confiable y de plena confianza.",
      },
      {
        icon: "Clock",
        title: "Respuesta Rápida",
        description:
          "Priorizamos la capacidad de respuesta y una comunicación eficiente para atender tus necesidades de forma rápida y efectiva.",
      },
      {
        icon: "Lock",
        title: "Seguridad de Datos",
        description:
          "Protegemos tu información mediante procesos seguros, un manejo responsable de los datos y estrictos estándares internacionales de confidencialidad.",
      },
      {
        icon: "BadgeCheck",
        title: "Cumplimiento",
        description:
          "Seguimos políticas y procedimientos establecidos, alineados con las regulaciones y requisitos específicos de cada industria, para respaldar operaciones responsables y en cumplimiento.",
      },
    ],
    assessmentTitle: "Nuestro equipo realiza una evaluación estratégica de tu negocio para:",
    assessment: [
      "Detectar funciones que se pueden externalizar para aumentar la eficiencia.",
      "Reducir costos operativos manteniendo la calidad y el rendimiento.",
      "Integrar soluciones con IA para automatizar procesos y reducir gastos.",
    ],
  },
};

// ---------------------------------------------------------------------------
// FAQ
// ---------------------------------------------------------------------------
export const faq: Bi<{
  eyebrow: string;
  title: string;
  items: { q: string; a: string }[];
}> = {
  en: {
    eyebrow: "FAQ",
    title: "Your Questions, Answered",
    items: [
      {
        q: "How do you protect our data and client information?",
        a: "Every professional signs strict NDAs before engagement. We operate with HIPAA-aware practices and follow confidentiality protocols tailored to your industry's requirements.",
      },
      {
        q: "Where are your professionals based?",
        a: "We're based in the Dominican Republic, with team members from the Caribbean and LATAM, giving you nearshore convenience, similar time zones, strong English communication, and cultural alignment with North American and European standards.",
      },
      {
        q: "How fast can we get started?",
        a: "Most engagements are up and running in as soon as 5 business days. We handle recruitment, vetting, and onboarding, working alongside your team every step of the way.",
      },
      {
        q: "How can I contact you?",
        a: "You can reach us anytime via our contact page or email. We aim to respond as quickly as possible.",
      },
      {
        q: "What's your pricing model?",
        a: "We offer flexible pricing based on project type and complexity. After an initial conversation, we'll provide a transparent quote with no hidden costs.",
      },
      {
        q: "What's it like to work with you?",
        a: "Collaborative, honest, and straightforward. We're here to guide the process, bring ideas to the table, and keep things moving.",
      },
    ],
  },
  es: {
    eyebrow: "Preguntas frecuentes",
    title: "Tus preguntas, respondidas",
    items: [
      {
        q: "¿Cómo protegen nuestros datos y la información de los clientes?",
        a: "Cada profesional firma acuerdos de confidencialidad (NDA) estrictos antes de comenzar. Operamos con prácticas alineadas a HIPAA y protocolos de confidencialidad adaptados a los requisitos de tu industria.",
      },
      {
        q: "¿Dónde están basados sus profesionales?",
        a: "Estamos en República Dominicana, con miembros del Caribe y LATAM, lo que te da conveniencia nearshore, zonas horarias similares, comunicación sólida en inglés y alineación cultural con estándares de Norteamérica y Europa.",
      },
      {
        q: "¿Qué tan rápido podemos empezar?",
        a: "La mayoría de los proyectos pueden estar en marcha en tan solo 5 días hábiles. Nos encargamos del reclutamiento, la evaluación y la integración, trabajando junto a tu equipo en cada paso.",
      },
      {
        q: "¿Cómo puedo contactarlos?",
        a: "Puedes escribirnos en cualquier momento por nuestra página de contacto o por correo. Buscamos responder lo antes posible.",
      },
      {
        q: "¿Cuál es su modelo de precios?",
        a: "Ofrecemos precios flexibles según el tipo y la complejidad del proyecto. Tras una conversación inicial, entregamos una cotización transparente y sin costos ocultos.",
      },
      {
        q: "¿Cómo es trabajar con ustedes?",
        a: "Colaborativo, honesto y directo. Estamos para guiar el proceso, aportar ideas y mantener todo en movimiento.",
      },
    ],
  },
};

// ---------------------------------------------------------------------------
// Marquee + final CTA
// ---------------------------------------------------------------------------
export const marquee: Bi<string[]> = {
  en: ["Recruitment", "Training", "Human Resources", "Payroll"],
  es: ["Reclutamiento", "Capacitación", "Recursos Humanos", "Nómina"],
};

export const careers: Bi<{
  eyebrow: string;
  title: string;
  text: string;
  bullets: string[];
  cta: string;
  image: string;
}> = {
  en: {
    eyebrow: "Careers",
    title: "Join our team",
    text: "Great partnerships begin with great people. We invest in our talent, value every voice, and build meaningful careers supporting clients across North America and Europe.",
    bullets: [
      "Bilingual & multilingual roles",
      "Remote-friendly",
      "Work-Life balance",
      "Opportunities to develop new skills",
      "Competitive compensation",
    ],
    cta: "Apply now",
    image: "/images/unsplash-image-2IzNzeJgjcI.jpg",
  },
  es: {
    eyebrow: "Carreras",
    title: "Únete a nuestro equipo",
    text: "Las grandes alianzas empiezan con grandes personas. Invertimos en nuestro talento, valoramos cada voz y construimos carreras significativas apoyando a clientes en Norteamérica y Europa.",
    bullets: [
      "Roles bilingües y multilingües",
      "Trabajo remoto",
      "Equilibrio vida-trabajo",
      "Oportunidades para desarrollar nuevas habilidades",
      "Compensación competitiva",
    ],
    cta: "Postúlate",
    image: "/images/unsplash-image-2IzNzeJgjcI.jpg",
  },
};

export const careersPage: Bi<{
  title: string;
  subtitle: string;
  intro: string;
  form: {
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    role: string;
    rolePlaceholder: string;
    roleHint: string;
    message: string;
    messagePlaceholder: string;
    cv: string;
    cvHint: string;
    cvSelected: string;
    submit: string;
    submitting: string;
    success: string;
    error: string;
  };
  validation: {
    name: string;
    email: string;
    role: string;
    cvRequired: string;
    cvType: string;
    cvSize: string;
  };
  /** Default option: apply to any available role (recommended). */
  openRole: string;
  roles: string[];
}> = {
  en: {
    title: "Join Our Team",
    subtitle: "Careers at EVERA",
    intro:
      "Great partnerships begin with great people. Tell us about yourself, upload your CV, and we'll reach out when a role matches your profile.",
    form: {
      name: "Full name",
      namePlaceholder: "Jane Doe",
      email: "Email",
      emailPlaceholder: "jane@email.com",
      phone: "Phone (optional)",
      phonePlaceholder: "+1 (809) 000-0000",
      role: "Area of interest",
      rolePlaceholder: "Select an area",
      roleHint:
        "Not sure which area fits you? Keep \"Open Application\" selected and we'll match your profile to any available role.",
      message: "Tell us about yourself (optional)",
      messagePlaceholder: "Experience, languages, availability…",
      cv: "Upload your CV",
      cvHint: "PDF or Word · max 5MB",
      cvSelected: "Selected file:",
      submit: "Apply now",
      submitting: "Submitting…",
      success:
        "Application received! Our team will review your profile and contact you if there's a match. Thank you for your interest in EVERA.",
      error:
        "Something went wrong submitting your application. Please try again or email us directly.",
    },
    validation: {
      name: "Please enter your name (at least 2 characters).",
      email: "Please enter a valid email address.",
      role: "Please select an area of interest.",
      cvRequired: "Please attach your CV.",
      cvType: "Only PDF or Word files are accepted.",
      cvSize: "The file must be 5MB or smaller.",
    },
    openRole: "Open Application: any available role (Recommended)",
    roles: [
      "Customer Support",
      "Sales & Marketing",
      "Interpretation & Languages",
      "Back Office & Admin",
      "Creative & Media",
      "Technology & AI",
    ],
  },
  es: {
    title: "Únete al Equipo",
    subtitle: "Carreras en EVERA",
    intro:
      "Las grandes alianzas empiezan con grandes personas. Cuéntanos de ti, sube tu CV y te contactaremos cuando un rol encaje con tu perfil.",
    form: {
      name: "Nombre completo",
      namePlaceholder: "Juan Pérez",
      email: "Correo",
      emailPlaceholder: "juan@correo.com",
      phone: "Teléfono (opcional)",
      phonePlaceholder: "+1 (809) 000-0000",
      role: "Área de interés",
      rolePlaceholder: "Selecciona un área",
      roleHint:
        "¿No sabes qué área encaja contigo? Deja \"Aplicación Abierta\" seleccionada y emparejamos tu perfil con cualquier vacante disponible.",
      message: "Cuéntanos de ti (opcional)",
      messagePlaceholder: "Experiencia, idiomas, disponibilidad…",
      cv: "Sube tu CV",
      cvHint: "PDF o Word · máx 5MB",
      cvSelected: "Archivo seleccionado:",
      submit: "Postúlate",
      submitting: "Enviando…",
      success:
        "¡Aplicación recibida! Nuestro equipo revisará tu perfil y te contactará si hay un match. Gracias por tu interés en EVERA.",
      error:
        "Hubo un problema al enviar tu aplicación. Inténtalo de nuevo o escríbenos directamente.",
    },
    validation: {
      name: "Por favor ingresa tu nombre (al menos 2 caracteres).",
      email: "Por favor ingresa un correo válido.",
      role: "Por favor selecciona un área de interés.",
      cvRequired: "Por favor adjunta tu CV.",
      cvType: "Solo se aceptan archivos PDF o Word.",
      cvSize: "El archivo debe pesar 5MB o menos.",
    },
    openRole: "Aplicación Abierta: cualquier vacante disponible (Recomendado)",
    roles: [
      "Atención al Cliente",
      "Ventas y Marketing",
      "Interpretación e Idiomas",
      "Back Office y Administración",
      "Creatividad y Medios",
      "Tecnología e IA",
    ],
  },
};

export const finalCta: Bi<{
  title: string;
  subtitle: string;
  primaryCta: string;
}> = {
  en: {
    title: "Start the conversation",
    subtitle:
      "Tell us what your business needs and we'll design a dedicated team around it, ready as soon as 5 business days.",
    primaryCta: "Start a Discovery Call",
  },
  es: {
    title: "Empieza la conversación",
    subtitle:
      "Cuéntanos qué necesita tu negocio y diseñaremos un equipo dedicado a tu medida, listo en tan solo 5 días hábiles.",
    primaryCta: "Agenda una llamada",
  },
};
