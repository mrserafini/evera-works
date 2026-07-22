import type { Locale } from "@/i18n/routing";

/**
 * Generic legal copy — intentionally standard boilerplate so the site conveys
 * trust and compliance. Not legal advice; the client can refine with counsel.
 */

type Bi<T> = Record<Locale, T>;

export interface LegalContent {
  eyebrow: string;
  title: string;
  updated: string;
  intro: string;
  /** `body` may hold multiple paragraphs separated by a blank line ("\n\n"). */
  sections: { heading: string; body: string; bullets?: string[] }[];
}

export const privacyPolicy: Bi<LegalContent> = {
  en: {
    eyebrow: "Trust & Compliance",
    title: "Privacy, Security & Legal Compliance",
    updated: "Last updated: July 2026",
    intro:
      "At EVERA, protecting confidential information is fundamental to the way we operate. Our internal policies, employee training, and operational procedures are designed to safeguard client data while supporting regulatory and contractual requirements across the industries we serve.",
    sections: [
      {
        heading: "Privacy & Data Protection",
        body: "We implement administrative, technical, and organizational safeguards to protect personal, confidential, and proprietary information against unauthorized access, disclosure, alteration, or loss. Access to client information is granted only to authorized personnel based on the principle of least privilege and legitimate business need.\n\nFor healthcare-related projects, EVERA operates using HIPAA-aligned security and privacy practices. Our procedures and operational controls are designed to support clients that require HIPAA-aligned operations, including the secure handling of Protected Health Information (PHI) where contractually applicable.",
      },
      {
        heading: "Legal & Employment Compliance",
        body: "EVERA conducts its operations in accordance with applicable local and international laws governing employment, privacy, data protection, and commercial services.\n\nAll employment relationships are administered in compliance with the labor laws and regulations of the jurisdictions in which our personnel are engaged, including the Ministry of Labor (Ministerio de Trabajo) of the Dominican Republic where applicable. Client agreements are structured to comply with applicable local and international legal, contractual, and data protection requirements.",
      },
      {
        heading: "Information Security Program",
        body: "Our information security framework includes documented policies, procedures, and operational controls, including but not limited to:",
        bullets: [
          "Remote Work Security Policy",
          "Acceptable Use Policy",
          "Clean Desk & Clean Screen Policy (applicable to both office and remote work environments)",
          "Information Security Incident Response Plan",
          "Data Breach Notification Procedure",
          "Background Check Policy for personnel, where permitted by applicable law",
          "Secure Onboarding & Offboarding Security Checklist",
          "Agent Security Training & Certification Records",
          "Confidentiality & Non-Disclosure Agreements",
          "Role-Based Access Controls",
          "Secure Password & Authentication Standards",
          "Continuous Security Awareness Training",
          "Ongoing monitoring and continuous process improvement",
        ],
      },
      {
        heading: "Confidentiality",
        body: "Every member of the EVERA team is expected to uphold the highest standards of confidentiality. Personnel are trained to handle client information responsibly and are required to comply with internal security policies, confidentiality agreements, client-specific requirements, and applicable privacy regulations.",
      },
      {
        heading: "Continuous Improvement",
        body: "Security and compliance are continuous processes. EVERA regularly reviews and updates its policies, procedures, and operational controls to align with evolving regulations, industry best practices, technological advancements, and client expectations.",
      },
      {
        heading: "Healthcare Services Disclaimer",
        body: "EVERA provides secure operational services using HIPAA-aligned privacy and security practices. When supporting healthcare organizations, our policies, procedures, and operational controls are designed to help clients meet their contractual privacy and security requirements. Clients remain responsible for determining the regulatory obligations applicable to their organization and the services they engage us to perform.",
      },
    ],
  },
  es: {
    eyebrow: "Confianza y Cumplimiento",
    title: "Privacidad, Seguridad y Cumplimiento Legal",
    updated: "Última actualización: julio 2026",
    intro:
      "En EVERA, proteger la información confidencial es fundamental en nuestra forma de operar. Nuestras políticas internas, la capacitación de nuestro personal y nuestros procedimientos operativos están diseñados para resguardar los datos de los clientes y apoyar los requisitos regulatorios y contractuales de las industrias a las que servimos.",
    sections: [
      {
        heading: "Privacidad y Protección de Datos",
        body: "Implementamos salvaguardas administrativas, técnicas y organizativas para proteger la información personal, confidencial y de propiedad contra el acceso, la divulgación, la alteración o la pérdida no autorizados. El acceso a la información de los clientes se otorga únicamente al personal autorizado, con base en el principio de mínimo privilegio y una necesidad legítima de negocio.\n\nPara proyectos relacionados con salud, EVERA opera con prácticas de seguridad y privacidad alineadas con HIPAA. Nuestros procedimientos y controles operativos están diseñados para apoyar a los clientes que requieren operaciones alineadas con HIPAA, incluyendo el manejo seguro de la Información de Salud Protegida (PHI) cuando sea contractualmente aplicable.",
      },
      {
        heading: "Cumplimiento Legal y Laboral",
        body: "EVERA conduce sus operaciones de acuerdo con las leyes locales e internacionales aplicables que rigen el empleo, la privacidad, la protección de datos y los servicios comerciales.\n\nTodas las relaciones laborales se administran en cumplimiento de las leyes y regulaciones laborales de las jurisdicciones en las que se contrata a nuestro personal, incluyendo el Ministerio de Trabajo de la República Dominicana cuando corresponda. Los acuerdos con clientes se estructuran para cumplir con los requisitos legales, contractuales y de protección de datos locales e internacionales aplicables.",
      },
      {
        heading: "Programa de Seguridad de la Información",
        body: "Nuestro marco de seguridad de la información incluye políticas, procedimientos y controles operativos documentados, incluyendo pero no limitándose a:",
        bullets: [
          "Política de Seguridad para Trabajo Remoto",
          "Política de Uso Aceptable",
          "Política de Escritorio y Pantalla Limpios (aplicable tanto a oficina como a entornos de trabajo remoto)",
          "Plan de Respuesta a Incidentes de Seguridad de la Información",
          "Procedimiento de Notificación de Violación de Datos",
          "Política de Verificación de Antecedentes del personal, donde lo permita la ley aplicable",
          "Lista de Verificación de Seguridad para Incorporación y Desvinculación",
          "Registros de Capacitación y Certificación de Seguridad de Agentes",
          "Acuerdos de Confidencialidad y No Divulgación",
          "Controles de Acceso Basados en Roles",
          "Estándares Seguros de Contraseñas y Autenticación",
          "Capacitación Continua en Concientización sobre Seguridad",
          "Monitoreo continuo y mejora continua de procesos",
        ],
      },
      {
        heading: "Confidencialidad",
        body: "Se espera que cada miembro del equipo de EVERA mantenga los más altos estándares de confidencialidad. El personal está capacitado para manejar la información de los clientes de forma responsable y debe cumplir con las políticas internas de seguridad, los acuerdos de confidencialidad, los requisitos específicos de cada cliente y las regulaciones de privacidad aplicables.",
      },
      {
        heading: "Mejora Continua",
        body: "La seguridad y el cumplimiento son procesos continuos. EVERA revisa y actualiza periódicamente sus políticas, procedimientos y controles operativos para alinearse con las regulaciones cambiantes, las mejores prácticas de la industria, los avances tecnológicos y las expectativas de los clientes.",
      },
      {
        heading: "Descargo sobre Servicios de Salud",
        body: "EVERA brinda servicios operativos seguros utilizando prácticas de privacidad y seguridad alineadas con HIPAA. Al dar soporte a organizaciones de salud, nuestras políticas, procedimientos y controles operativos están diseñados para ayudar a los clientes a cumplir con sus requisitos contractuales de privacidad y seguridad. Los clientes siguen siendo responsables de determinar las obligaciones regulatorias aplicables a su organización y a los servicios que nos contratan.",
      },
    ],
  },
};

export const legalNotice: Bi<LegalContent> = {
  en: {
    eyebrow: "Legal",
    title: "Legal Notice",
    updated: "Last updated: July 2026",
    intro:
      "This Legal Notice governs access to and use of the website operated by EVERA WORKS LLC. By accessing, browsing, or otherwise using this website, you acknowledge that you have read, understood, and agree to the terms set out below. If you do not agree with these terms, please discontinue use of the site.",
    sections: [
      {
        heading: "Company information",
        body: "EVERA WORKS LLC is a nearshore business process outsourcing (BPO) company that provides sales, customer support, interpretation, back-office, healthcare administration, logistics, and related operational services to organizations across North America and Europe. Our teams operate primarily from the Dominican Republic, with talent drawn from across the Caribbean and Latin America.\n\nFor any inquiry regarding the company or this notice, you can reach us at hello@everapartner.com.",
      },
      {
        heading: "Purpose of this website",
        body: "This website is provided for general informational purposes only. It describes our company, services, and capabilities, and allows visitors to contact us or apply for open roles. The content does not constitute a binding offer, professional advice, or a contractual commitment. Any engagement of our services is governed by a separate written agreement between EVERA WORKS LLC and the client.",
      },
      {
        heading: "Accuracy of information",
        body: "We make reasonable efforts to keep the information on this website accurate and up to date. However, we do not warrant that the content is complete, current, or free of errors, and we reserve the right to modify, update, or remove any part of the site at any time without prior notice.",
      },
      {
        heading: "Intellectual property",
        body: "All materials on this website, including but not limited to text, graphics, logos, icons, images, layout, design, and the EVERA name and branding, are the property of EVERA WORKS LLC or its licensors and are protected by applicable intellectual property laws.\n\nYou may not copy, reproduce, distribute, modify, publish, or otherwise exploit any content from this site without our prior written consent, except for personal, non-commercial viewing.",
      },
      {
        heading: "Acceptable use",
        body: "When accessing or using this website, you agree not to:",
        bullets: [
          "Use the site for any unlawful, fraudulent, or harmful purpose",
          "Attempt to gain unauthorized access to our systems, networks, or data",
          "Introduce viruses, malware, or any malicious or disruptive code",
          "Interfere with the proper functioning, security, or availability of the site",
          "Scrape, harvest, or exploit any content for commercial purposes without authorization",
        ],
      },
      {
        heading: "Third-party links",
        body: "This website may contain links to third-party websites or resources provided for convenience only. We do not control and are not responsible for the content, policies, or practices of any third-party sites, and their inclusion does not imply endorsement.",
      },
      {
        heading: "Privacy & data protection",
        body: "Your use of this website is also governed by our Privacy, Security & Legal Compliance statement, which describes how we handle personal and confidential information. We encourage you to review it.",
      },
      {
        heading: "Disclaimer of warranties",
        body: "This website and its content are provided \"as is\" and \"as available\", without warranties of any kind, whether express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.",
      },
      {
        heading: "Limitation of liability",
        body: "To the fullest extent permitted by applicable law, EVERA WORKS LLC shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from or related to your access to, use of, or inability to use this website, even if we have been advised of the possibility of such damages.",
      },
      {
        heading: "Governing law & jurisdiction",
        body: "This Legal Notice is governed by and construed in accordance with the laws of the Dominican Republic, without regard to conflict-of-law principles. Any dispute arising in connection with this website shall be submitted to the competent courts of the Dominican Republic, unless otherwise required by applicable law.",
      },
      {
        heading: "Changes to this notice",
        body: "We may update this Legal Notice from time to time to reflect changes in our practices or applicable law. The latest version will always be available on this page, and continued use of the website constitutes acceptance of any updates.",
      },
      {
        heading: "Contact",
        body: "If you have any questions about this Legal Notice, please contact us at hello@everapartner.com.",
      },
    ],
  },
  es: {
    eyebrow: "Legal",
    title: "Aviso Legal",
    updated: "Última actualización: julio 2026",
    intro:
      "Este Aviso Legal rige el acceso y el uso del sitio web operado por EVERA WORKS LLC. Al acceder, navegar o usar de cualquier forma este sitio web, reconoces que has leído, entendido y aceptas los términos que se establecen a continuación. Si no estás de acuerdo con estos términos, por favor discontinúa el uso del sitio.",
    sections: [
      {
        heading: "Información de la empresa",
        body: "EVERA WORKS LLC es una empresa de externalización de procesos de negocio (BPO) nearshore que brinda servicios de ventas, atención al cliente, interpretación, back-office, administración de salud, logística y servicios operativos relacionados a organizaciones en Norteamérica y Europa. Nuestros equipos operan principalmente desde la República Dominicana, con talento de todo el Caribe y Latinoamérica.\n\nPara cualquier consulta sobre la empresa o este aviso, puedes escribirnos a hello@everapartner.com.",
      },
      {
        heading: "Propósito de este sitio web",
        body: "Este sitio web se ofrece únicamente con fines informativos generales. Describe nuestra empresa, servicios y capacidades, y permite a los visitantes contactarnos o postularse a vacantes disponibles. El contenido no constituye una oferta vinculante, asesoría profesional ni un compromiso contractual. Toda contratación de nuestros servicios se rige por un acuerdo escrito independiente entre EVERA WORKS LLC y el cliente.",
      },
      {
        heading: "Exactitud de la información",
        body: "Hacemos esfuerzos razonables para mantener la información de este sitio web precisa y actualizada. Sin embargo, no garantizamos que el contenido sea completo, vigente o libre de errores, y nos reservamos el derecho de modificar, actualizar o eliminar cualquier parte del sitio en cualquier momento sin previo aviso.",
      },
      {
        heading: "Propiedad intelectual",
        body: "Todos los materiales de este sitio web, incluyendo, entre otros, textos, gráficos, logos, íconos, imágenes, maquetación, diseño y el nombre y la marca EVERA, son propiedad de EVERA WORKS LLC o de sus licenciantes y están protegidos por las leyes de propiedad intelectual aplicables.\n\nNo puedes copiar, reproducir, distribuir, modificar, publicar ni explotar de otra manera ningún contenido de este sitio sin nuestro consentimiento previo por escrito, salvo para su visualización personal y no comercial.",
      },
      {
        heading: "Uso aceptable",
        body: "Al acceder o usar este sitio web, aceptas no:",
        bullets: [
          "Usar el sitio para fines ilícitos, fraudulentos o dañinos",
          "Intentar acceder sin autorización a nuestros sistemas, redes o datos",
          "Introducir virus, malware o cualquier código malicioso o disruptivo",
          "Interferir con el funcionamiento, la seguridad o la disponibilidad del sitio",
          "Extraer, recopilar o explotar cualquier contenido con fines comerciales sin autorización",
        ],
      },
      {
        heading: "Enlaces a terceros",
        body: "Este sitio web puede contener enlaces a sitios o recursos de terceros ofrecidos únicamente por conveniencia. No controlamos ni somos responsables del contenido, las políticas o las prácticas de dichos sitios de terceros, y su inclusión no implica respaldo alguno.",
      },
      {
        heading: "Privacidad y protección de datos",
        body: "El uso de este sitio web también se rige por nuestra declaración de Privacidad, Seguridad y Cumplimiento Legal, que describe cómo manejamos la información personal y confidencial. Te invitamos a revisarla.",
      },
      {
        heading: "Descargo de garantías",
        body: "Este sitio web y su contenido se ofrecen \"tal cual\" y \"según disponibilidad\", sin garantías de ningún tipo, ya sean expresas o implícitas, incluyendo, entre otras, garantías de comerciabilidad, idoneidad para un propósito particular o no infracción.",
      },
      {
        heading: "Limitación de responsabilidad",
        body: "En la máxima medida permitida por la ley aplicable, EVERA WORKS LLC no será responsable de daños directos, indirectos, incidentales, consecuentes o especiales que surjan de, o estén relacionados con, tu acceso, uso o imposibilidad de uso de este sitio web, incluso si se nos hubiera advertido de la posibilidad de dichos daños.",
      },
      {
        heading: "Legislación aplicable y jurisdicción",
        body: "Este Aviso Legal se rige e interpreta de acuerdo con las leyes de la República Dominicana, sin consideración de sus principios de conflicto de leyes. Cualquier disputa surgida en relación con este sitio web se someterá a los tribunales competentes de la República Dominicana, salvo que la ley aplicable disponga lo contrario.",
      },
      {
        heading: "Cambios en este aviso",
        body: "Podemos actualizar este Aviso Legal periódicamente para reflejar cambios en nuestras prácticas o en la ley aplicable. La versión más reciente estará siempre disponible en esta página, y el uso continuado del sitio web implica la aceptación de dichas actualizaciones.",
      },
      {
        heading: "Contacto",
        body: "Si tienes alguna pregunta sobre este Aviso Legal, contáctanos en hello@everapartner.com.",
      },
    ],
  },
};

export const termsOfService: Bi<LegalContent> = {
  en: {
    eyebrow: "Legal",
    title: "Terms of Service",
    updated: "Last updated: July 2026",
    intro:
      "These Terms of Service govern your use of the EVERA WORKS LLC website and the engagement of our services. By using this site or working with us, you agree to these terms.",
    sections: [
      {
        heading: "Our services",
        body: "EVERA provides outsourced business process, sales, support, and administrative services. The specific scope, deliverables, and pricing of any engagement are defined in a separate agreement between EVERA and the client.",
      },
      {
        heading: "Your responsibilities",
        body: "You agree to provide accurate information, use our website and services lawfully, and not to interfere with, disrupt, or attempt to gain unauthorized access to our systems.",
      },
      {
        heading: "Intellectual property",
        body: "All content, branding, and materials on this website are owned by EVERA WORKS LLC or its licensors. You may not reproduce or reuse them without written permission.",
      },
      {
        heading: "Confidentiality",
        body: "We treat client and applicant information as confidential and require our professionals to sign non-disclosure agreements. Any confidential information shared with us is used only to provide the agreed services.",
      },
      {
        heading: "Disclaimers & liability",
        body: "The website is provided \"as is\" without warranties of any kind. To the fullest extent permitted by law, EVERA is not liable for any indirect or consequential damages arising from the use of this site.",
      },
      {
        heading: "Changes & contact",
        body: "We may update these terms from time to time; continued use of the site constitutes acceptance of the updated terms. Questions? Contact us at hello@everapartner.com.",
      },
    ],
  },
  es: {
    eyebrow: "Legal",
    title: "Términos de Servicio",
    updated: "Última actualización: julio 2026",
    intro:
      "Estos Términos de Servicio rigen el uso del sitio web de EVERA WORKS LLC y la contratación de nuestros servicios. Al usar este sitio o trabajar con nosotros, aceptas estos términos.",
    sections: [
      {
        heading: "Nuestros servicios",
        body: "EVERA brinda servicios externalizados de procesos de negocio, ventas, soporte y administración. El alcance, los entregables y los precios de cada contratación se definen en un acuerdo separado entre EVERA y el cliente.",
      },
      {
        heading: "Tus responsabilidades",
        body: "Aceptas proporcionar información veraz, usar nuestro sitio y servicios de forma lícita, y no interferir, interrumpir ni intentar acceder sin autorización a nuestros sistemas.",
      },
      {
        heading: "Propiedad intelectual",
        body: "Todo el contenido, la marca y los materiales de este sitio son propiedad de EVERA WORKS LLC o de sus licenciantes. No pueden reproducirse ni reutilizarse sin autorización por escrito.",
      },
      {
        heading: "Confidencialidad",
        body: "Tratamos la información de clientes y postulantes como confidencial y exigimos a nuestros profesionales firmar acuerdos de confidencialidad. Toda información confidencial compartida con nosotros se usa únicamente para prestar los servicios acordados.",
      },
      {
        heading: "Descargos y responsabilidad",
        body: "El sitio se ofrece \"tal cual\", sin garantías de ningún tipo. En la máxima medida permitida por la ley, EVERA no se hace responsable de daños indirectos o consecuentes derivados del uso de este sitio.",
      },
      {
        heading: "Cambios y contacto",
        body: "Podemos actualizar estos términos de vez en cuando; el uso continuado del sitio implica la aceptación de los términos actualizados. ¿Preguntas? Escríbenos a hello@everapartner.com.",
      },
    ],
  },
};
