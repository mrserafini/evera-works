import type { Locale } from "@/i18n/routing";

/**
 * Static, bilingual service content. This is the data layer for the
 * /services overview and the dynamic /services/[slug] pages. Copy lives here
 * (co-located per service) rather than in messages/ because it is structured
 * record data, not UI chrome.
 */

export interface ServiceContent {
  title: string;
  tagline: string;
  description: string;
  painPoints: string[];
  howItWorks: { title: string; description: string }[];
  metrics: { label: string; value: string }[];
}

export interface Service {
  slug: string;
  /** lucide-react icon name. */
  icon: string;
  phase: 1 | 2;
  i18n: Record<Locale, ServiceContent>;
}

export const services: Service[] = [
  {
    slug: "sales-bpo",
    icon: "PhoneCall",
    phase: 1,
    i18n: {
      en: {
        title: "Sales BPO",
        tagline: "Pipeline that never sleeps",
        description:
          "A dedicated outbound and inbound sales team that books qualified meetings, follows up relentlessly and closes — operating as a seamless extension of your company.",
        painPoints: [
          "Reps spend more time prospecting than selling",
          "Leads go cold because follow-up is inconsistent",
          "Hiring and ramping an in-house sales team is slow",
        ],
        howItWorks: [
          {
            title: "Discovery & scripting",
            description:
              "We learn your offer, ICP and objections, then build call scripts and cadences with you.",
          },
          {
            title: "Team build & training",
            description:
              "We recruit bilingual reps and train them on your product, CRM and tone.",
          },
          {
            title: "Launch & optimize",
            description:
              "Your team starts dialing and we report on KPIs weekly, tuning as we go.",
          },
        ],
        metrics: [
          { label: "Ramp time", value: "2–3 wks" },
          { label: "Model", value: "Dedicated" },
          { label: "Focus", value: "Outcomes" },
        ],
      },
      es: {
        title: "Ventas BPO",
        tagline: "Un pipeline que nunca duerme",
        description:
          "Un equipo de ventas dedicado, inbound y outbound, que agenda reuniones calificadas, da seguimiento sin descanso y cierra — operando como una extensión perfecta de tu empresa.",
        painPoints: [
          "Los vendedores prospectan más de lo que venden",
          "Los leads se enfrían por un seguimiento inconsistente",
          "Contratar y capacitar un equipo de ventas interno es lento",
        ],
        howItWorks: [
          {
            title: "Descubrimiento y guiones",
            description:
              "Conocemos tu oferta, tu cliente ideal y objeciones, y construimos guiones y cadencias contigo.",
          },
          {
            title: "Armado y capacitación",
            description:
              "Reclutamos representantes bilingües y los capacitamos en tu producto, CRM y tono.",
          },
          {
            title: "Lanzamiento y optimización",
            description:
              "Tu equipo empieza a llamar y reportamos KPIs cada semana, ajustando sobre la marcha.",
          },
        ],
        metrics: [
          { label: "Tiempo de arranque", value: "2–3 sem" },
          { label: "Modelo", value: "Dedicado" },
          { label: "Enfoque", value: "Resultados" },
        ],
      },
    },
  },
  {
    slug: "tech-support",
    icon: "Headset",
    phase: 1,
    i18n: {
      en: {
        title: "Tech Support",
        tagline: "Tier 1–2 support customers love",
        description:
          "Bilingual support agents who resolve tickets fast across chat, email and phone — keeping CSAT high and churn low.",
        painPoints: [
          "Response times slip as volume grows",
          "Coverage outside business hours is hard to staff",
          "Inconsistent quality hurts retention",
        ],
        howItWorks: [
          {
            title: "Knowledge transfer",
            description:
              "We document your product, common issues and escalation paths into a living playbook.",
          },
          {
            title: "Tooling & SLAs",
            description:
              "We integrate with your helpdesk and agree on response and resolution SLAs.",
          },
          {
            title: "Scale coverage",
            description:
              "We expand hours and headcount as you grow, on whatever schedule you serve.",
          },
        ],
        metrics: [
          { label: "First response", value: "< 2 min" },
          { label: "CSAT target", value: "95%+" },
          { label: "Coverage", value: "24/7" },
        ],
      },
      es: {
        title: "Soporte Técnico",
        tagline: "Soporte Tier 1–2 que tus clientes aman",
        description:
          "Agentes de soporte bilingües que resuelven tickets rápido por chat, correo y teléfono — manteniendo el CSAT alto y la fuga baja.",
        painPoints: [
          "Los tiempos de respuesta empeoran al crecer el volumen",
          "Es difícil cubrir fuera del horario laboral",
          "La calidad inconsistente afecta la retención",
        ],
        howItWorks: [
          {
            title: "Transferencia de conocimiento",
            description:
              "Documentamos tu producto, incidencias comunes y rutas de escalación en un playbook vivo.",
          },
          {
            title: "Herramientas y SLAs",
            description:
              "Nos integramos con tu helpdesk y acordamos SLAs de respuesta y resolución.",
          },
          {
            title: "Escalar cobertura",
            description:
              "Ampliamos horas y personal conforme creces, en el horario que tú atiendas.",
          },
        ],
        metrics: [
          { label: "Primera respuesta", value: "< 2 min" },
          { label: "Meta CSAT", value: "95%+" },
          { label: "Cobertura", value: "24/7" },
        ],
      },
    },
  },
  {
    slug: "interpretation",
    icon: "Languages",
    phase: 1,
    i18n: {
      en: {
        title: "Interpretation",
        tagline: "Bridge the language gap, live",
        description:
          "On-demand English–Spanish interpretation for calls, appointments and support — accurate, professional and ready when you need it.",
        painPoints: [
          "Missed conversions from Spanish-speaking customers",
          "Compliance risk from informal interpretation",
          "Unreliable, ad-hoc interpretation",
        ],
        howItWorks: [
          {
            title: "Define use cases",
            description:
              "We map where you need interpretation: sales, support, intake or appointments.",
          },
          {
            title: "Dedicated interpreters",
            description:
              "We assign trained bilingual interpreters familiar with your domain and terminology.",
          },
          {
            title: "Flexible delivery",
            description:
              "Scheduled or on-demand, by phone or video, scaling with your volume.",
          },
        ],
        metrics: [
          { label: "Languages", value: "EN ⇄ ES" },
          { label: "Availability", value: "On-demand" },
          { label: "Accuracy", value: "Pro-grade" },
        ],
      },
      es: {
        title: "Interpretación",
        tagline: "Cierra la brecha de idioma, en vivo",
        description:
          "Interpretación inglés–español bajo demanda para llamadas, citas y soporte — precisa, profesional y lista cuando la necesitas.",
        painPoints: [
          "Conversiones perdidas con clientes hispanohablantes",
          "Riesgo de cumplimiento por interpretación informal",
          "Interpretación poco confiable e improvisada",
        ],
        howItWorks: [
          {
            title: "Definir casos de uso",
            description:
              "Identificamos dónde necesitas interpretación: ventas, soporte, admisión o citas.",
          },
          {
            title: "Intérpretes dedicados",
            description:
              "Asignamos intérpretes bilingües capacitados, familiarizados con tu sector y terminología.",
          },
          {
            title: "Entrega flexible",
            description:
              "Programada o bajo demanda, por teléfono o video, escalando con tu volumen.",
          },
        ],
        metrics: [
          { label: "Idiomas", value: "EN ⇄ ES" },
          { label: "Disponibilidad", value: "Bajo demanda" },
          { label: "Precisión", value: "Profesional" },
        ],
      },
    },
  },
  {
    slug: "healthcare-admin",
    icon: "HeartPulse",
    phase: 1,
    i18n: {
      en: {
        title: "Healthcare Admin",
        tagline: "Back-office for busy practices",
        description:
          "Confidentiality-first administrative support — scheduling, intake, eligibility and follow-ups — so your clinical team can focus on patients.",
        painPoints: [
          "Front desk drowning in calls and paperwork",
          "No-shows from poor appointment follow-up",
          "Eligibility and intake errors slow everything down",
        ],
        howItWorks: [
          {
            title: "Compliance setup",
            description:
              "We align on confidentiality-first processes, access controls and documentation.",
          },
          {
            title: "Workflow integration",
            description:
              "We plug into your EHR/PMS and own the administrative workflows you define.",
          },
          {
            title: "Continuous support",
            description:
              "Scheduling, reminders, intake and eligibility handled by a dedicated team.",
          },
        ],
        metrics: [
          { label: "Process", value: "Compliance-first" },
          { label: "No-show drop", value: "Significant" },
          { label: "Confidentiality", value: "By default" },
        ],
      },
      es: {
        title: "Administración de Salud",
        tagline: "Back-office para consultorios ocupados",
        description:
          "Soporte administrativo con la confidencialidad como prioridad — agendamiento, admisión, elegibilidad y seguimientos — para que tu equipo clínico se enfoque en los pacientes.",
        painPoints: [
          "La recepción ahogada en llamadas y papeleo",
          "Inasistencias por mal seguimiento de citas",
          "Errores de elegibilidad y admisión que retrasan todo",
        ],
        howItWorks: [
          {
            title: "Configuración de cumplimiento",
            description:
              "Alineamos procesos con la confidencialidad como prioridad, controles de acceso y documentación.",
          },
          {
            title: "Integración de flujos",
            description:
              "Nos integramos a tu EHR/PMS y asumimos los flujos administrativos que definas.",
          },
          {
            title: "Soporte continuo",
            description:
              "Agendamiento, recordatorios, admisión y elegibilidad a cargo de un equipo dedicado.",
          },
        ],
        metrics: [
          { label: "Proceso", value: "Confidencial" },
          { label: "Baja de inasistencias", value: "Notable" },
          { label: "Confidencialidad", value: "Por defecto" },
        ],
      },
    },
  },
  {
    slug: "content-production",
    icon: "PenTool",
    phase: 2,
    i18n: {
      en: {
        title: "Content Production",
        tagline: "Always-on content engine",
        description:
          "Bilingual content, design and video support to keep your marketing shipping consistently.",
        painPoints: [
          "Content calendar always slipping",
          "Inconsistent brand voice across channels",
          "Quality slips across freelancers and agencies",
        ],
        howItWorks: [
          {
            title: "Brand & briefs",
            description: "We learn your brand and set up repeatable briefs and templates.",
          },
          {
            title: "Production",
            description: "A dedicated team produces content on a predictable cadence.",
          },
          {
            title: "Review & publish",
            description: "You approve; we schedule and publish across channels.",
          },
        ],
        metrics: [
          { label: "Cadence", value: "Predictable" },
          { label: "Languages", value: "EN / ES" },
          { label: "Model", value: "Dedicated" },
        ],
      },
      es: {
        title: "Producción de Contenido",
        tagline: "Un motor de contenido siempre activo",
        description:
          "Soporte bilingüe de contenido, diseño y video para que tu marketing publique de forma consistente.",
        painPoints: [
          "El calendario de contenido siempre se atrasa",
          "Voz de marca inconsistente entre canales",
          "Calidad inconsistente entre freelancers y agencias",
        ],
        howItWorks: [
          {
            title: "Marca y briefs",
            description: "Conocemos tu marca y creamos briefs y plantillas repetibles.",
          },
          {
            title: "Producción",
            description: "Un equipo dedicado produce contenido con una cadencia predecible.",
          },
          {
            title: "Revisión y publicación",
            description: "Tú apruebas; nosotros programamos y publicamos en los canales.",
          },
        ],
        metrics: [
          { label: "Cadencia", value: "Predecible" },
          { label: "Idiomas", value: "EN / ES" },
          { label: "Modelo", value: "Dedicado" },
        ],
      },
    },
  },
  {
    slug: "software-development",
    icon: "Code2",
    phase: 2,
    i18n: {
      en: {
        title: "Software Development",
        tagline: "Dedicated engineering pods",
        description:
          "Dedicated developers and QA who integrate with your team and ship on your schedule.",
        painPoints: [
          "Senior engineering is scarce and slow to hire",
          "Distributed teams create timezone friction",
          "Roadmap stalls without extra hands",
        ],
        howItWorks: [
          {
            title: "Scope & stack",
            description: "We align on your stack, roadmap and ways of working.",
          },
          {
            title: "Pod assembly",
            description: "We assemble a vetted pod of developers and QA matched to your needs.",
          },
          {
            title: "Ship together",
            description: "The pod joins your standups and ships in your sprints.",
          },
        ],
        metrics: [
          { label: "Overlap", value: "Your hours" },
          { label: "Roles", value: "Dev + QA" },
          { label: "Model", value: "Dedicated" },
        ],
      },
      es: {
        title: "Desarrollo de Software",
        tagline: "Equipos de ingeniería dedicados",
        description:
          "Desarrolladores y QA dedicados que se integran a tu equipo y entregan en tu horario.",
        painPoints: [
          "La ingeniería senior es escasa y difícil de contratar",
          "Los equipos distribuidos generan fricción horaria",
          "El roadmap se estanca sin manos adicionales",
        ],
        howItWorks: [
          {
            title: "Alcance y stack",
            description: "Alineamos tu stack, roadmap y formas de trabajar.",
          },
          {
            title: "Armado del equipo",
            description: "Armamos un equipo verificado de desarrolladores y QA a tu medida.",
          },
          {
            title: "Entregar juntos",
            description: "El equipo se une a tus dailies y entrega en tus sprints.",
          },
        ],
        metrics: [
          { label: "Solapamiento", value: "Tu horario" },
          { label: "Roles", value: "Dev + QA" },
          { label: "Modelo", value: "Dedicado" },
        ],
      },
    },
  },
];

export const phase1Services = services.filter((s) => s.phase === 1);

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
