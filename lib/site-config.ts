export const siteConfig = {
  name: "IntraLab 22@",
  description:
    "Programa de Preacceleració d'Intraemprenedoria Tecnològica",
  url: "https://intralab22.com",
  hero: {
    deadline: "PLACES OBERTES FINS EL 18 DE JULIOL",
    startDate: "INICI DEL PROGRAMA EL 14 DE SEPTEMBRE",
    title: "IntraLab 22@",
    subtitle:
      "Programa de Preacceleració d'Intraemprenedoria Tecnològica",
    fundingDisclaimer:
      "Finançat pel Departament d'Empresa i Treball de la Generalitat de Catalunya i cofinançat pel Fons Social Europeu Plus",
  },
  valueProposition: {
    title:
      "Convierte el reto de tu empresa en una solución validada en el mercado.",
    copy: "IntraLab 22@ no parte de ideas al aire, soluciona los problemas reales de tu día a día. En 4 meses te damos la metodología, la mentoría y el ecosistema 22@ para convertir ese reto en un proyecto listo para facturar.",
    cta: "Quiero participar",
  },
  targetAudience: {
    title: "Para quienes lideran la transformación",
    audiences: [
      {
        label: "Pymes y medianas empresas",
        description:
          "Agiliza procesos y protege tu ventaja competitiva sin montar un departamento de innovación.",
      },
      {
        label: "Intraemprendedores",
        description:
          "Profesionales y directivos con capacidad de pilotar proyectos disruptivos dentro de su empresa.",
      },
      {
        label: "Empresas industriales y tecnológicas",
        description:
          "Organizaciones que quieren aplicar innovación real a sus procesos, productos o líneas de negocio.",
      },
    ],
  },
  programIncludes: {
    title: "De la idea a la acción, con la metodología learning by doing",
    training: {
      headline: "100 horas de formación práctica, en cuatro bloques:",
      blocks: [
        "Detecta oportunidades con potencial de negocio.",
        "Analiza el mercado y valida la demanda antes de invertir.",
        "Diseña tu MVP con IA y automatización.",
        "Escala con un modelo de negocio listo para el mercado.",
      ],
    },
    mentoring:
      "80 horas de mentoría personalizada con expertos del ecosistema 22@ que te acompañan en cada decisión.",
    community:
      "Al terminar, formas parte de una comunidad que te conecta con empresas, inversores y talento del 22@.",
  },
  calendar: {
    title: "Un itinerario pensado para avanzar",
    milestones: [
      { date: "24 julio 2026", milestone: "Cierre de candidaturas" },
      { date: "27 julio 2026", milestone: "Selección de proyectos" },
      { date: "14 septiembre 2026", milestone: "Kick Off del programa" },
      {
        date: "14 diciembre 2026",
        milestone: "Demo Day ante empresas, mentores e inversores",
      },
    ],
  },
  formIntro: {
    copy: "Completa el formulario. Si eres seleccionado, formarás parte de la nueva edición de IntraLab 22@.",
    cta: "Enviar candidatura",
  },
  applicationForm: {
    title: "Formulario de Admisión de Proyectos – Convocatoria 2026",
    notice:
      "Debido a la alta personalización de las mentorías y los requisitos de cofinanciación pública, todos los campos son obligatorios.",
    sections: {
      fse: "Datos FSE+",
      corporate: "Enfoque corporativo",
      clauses: "Cláusulas",
    },
    fields: {
      fse: [
        "Nombre y apellidos",
        "NIF-NIE",
        "Género",
        "Edad",
        "Población",
        "Comarca",
        "Nivel de formación",
        "Situación laboral",
      ],
      corporate: [
        "Email",
        "Teléfono",
        "Empresa",
        "Cargo",
        "Descripción del reto a resolver",
      ],
      clauses: [
        "Política de privacidad (RGPD)",
        "Consentimiento tratamiento de datos FSE+",
      ],
    },
    cta: "ENVIAR MI CANDIDATURA AL COMITÉ DE SELECCIÓN ➔",
  },
  faq: [
    {
      question: "¿Tiene coste?",
      answer:
        "No. El programa está totalmente subvencionado para los participantes seleccionados.",
    },
    {
      question: "¿Qué compromiso requiere?",
      answer:
        "Asistencia activa a las 100h de formación y las 80h de mentoría.",
    },
    {
      question: "¿Necesito una idea desarrollada?",
      answer:
        "No. Solo un reto real dentro de tu empresa; nosotros te ayudamos a convertirlo en solución.",
    },
    {
      question: "¿Qué pasa después del Demo Day?",
      answer:
        "Te incorporas a la red del ecosistema 22@ — empresas, universidades, centros tecnológicos y expertos — que te acompaña en el crecimiento de tu proyecto.",
    },
  ],
  institutionalFooter: {
    legalText:
      "Este programa público de preaceleración de intraemprendimiento tecnológico está enfocado en la obtención de soluciones innovadoras y resultados de mercado escalables, impulsando la competitividad y la capacidad de adaptación del tejido empresarial. Esta operación cuenta con la ayuda financiera directa de las instituciones cofinanciadoras.",
    fundingText:
      "Subvencionat pel Departament d'Empresa i Treball i amb el cofinançament del Fons Social Europeu Plus",
  },
} as const;
