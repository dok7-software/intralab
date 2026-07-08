export type Locale = "es" | "ca";

export const translations = {
  es: {
    meta: {
      description:
        "Programa de Preaceleración de Intraemprendimiento Tecnológico",
    },
    header: {
      programOf: "Programa de:",
      fundedBy: "Financiado por:",
    },
    hero: {
      deadline: "PLAZAS ABIERTAS HASTA EL 18 DE JULIO",
      startDate: "INICIO DEL PROGRAMA EL 14 DE SEPTIEMBRE",
      title: "IntraLab 22@",
      subtitle:
        "Programa de Preaceleración de Intraemprendimiento Tecnológico",
      fundingDisclaimer:
        "Financiado por el Departamento de Empresa y Trabajo de la Generalitat de Catalunya y cofinanciado por el Fondo Social Europeo Plus",
      slideLabel: "Diapositiva",
    },
    valueProposition: {
      title:
        "Convierte el reto de tu empresa en una solución validada en el mercado.",
      copy: " no parte de ideas al aire, soluciona los problemas reales de tu día a día. En 4 meses te damos la metodología, la mentoría y el ecosistema 22@ para convertir ese reto en un proyecto listo para facturar.",
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
      trainingHeadline: "de formación práctica, en cuatro bloques:",
      trainingHours: "100 horas",
      blocks: [
        "Detecta oportunidades con potencial de negocio.",
        "Analiza el mercado y valida la demanda antes de invertir.",
        "Diseña tu MVP con IA y automatización.",
        "Escala con un modelo de negocio listo para el mercado.",
      ],
      mentoringHours: "80 horas",
      mentoring:
        "de mentoría personalizada con expertos del ecosistema 22@ que te acompañan en cada decisión.",
      communityPrefix: "Al terminar, formas parte de una",
      communityHighlight: "comunidad",
      communitySuffix:
        "que te conecta con empresas, inversores y talento del 22@.",
    },
    calendar: {
      title: "Un itinerario pensado para avanzar",
      dateColumn: "Fecha",
      milestoneColumn: "Hito",
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
      copyBefore: "Completa el formulario. Si eres seleccionado, formarás parte de la nueva edición de ",
      copyAfter: ".",
      cta: "Enviar candidatura",
    },
    applicationForm: {
      title: "Formulario de Admisión de Proyectos – Convocatoria 2026",
      notice:
        "Este formulario está dirigido a empresas. Todos los campos son obligatorios.",
      fields: {
        companyName: "Nombre de empresa",
        sector: "Sector",
        address: "Dirección",
        partnerStatus: "¿Eres empresa socia de 22@Network Barcelona?",
        partnerYes: "Sí, somos empresa socia",
        partnerNo: "No, no somos empresa socia",
        contactName: "Nombre y apellidos de la persona de contacto",
        role: "Cargo",
        email: "Mail",
        phone: "Teléfono",
        sectors: {
          technology: "Tecnología",
          industry: "Industria",
          services: "Servicios",
          commerce: "Comercio",
          health: "Salud",
          other: "Otro",
        },
      },
      cta: "ENVIAR INSCRIPCIÓN DE EMPRESA ➔",
    },
    faqTitle: "Preguntas frecuentes",
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
      altGeneralitat:
        "Logotipo oficial del Departament d'Empresa i Treball (PIV Generalitat de Catalunya)",
      altEu: 'Emblema UE + "Cofinançat per la Unió Europea"',
      altNetwork: "Logotipo de 22@Network Barcelona",
    },
  },
  ca: {
    meta: {
      description:
        "Programa de Preacceleració d'Intraemprenedoria Tecnològica",
    },
    header: {
      programOf: "Programa de:",
      fundedBy: "Finançat per:",
    },
    hero: {
      deadline: "PLACES OBERTES FINS EL 18 DE JULIOL",
      startDate: "INICI DEL PROGRAMA EL 14 DE SETEMBRE",
      title: "IntraLab 22@",
      subtitle:
        "Programa de Preacceleració d'Intraemprenedoria Tecnològica",
      fundingDisclaimer:
        "Finançat pel Departament d'Empresa i Treball de la Generalitat de Catalunya i cofinançat pel Fons Social Europeu Plus",
      slideLabel: "Diapositiva",
    },
    valueProposition: {
      title:
        "Converteix el repte de la teva empresa en una solució validada al mercat.",
      copy: " no parteix d'idees a l'aire, soluciona els problemes reals del teu dia a dia. En 4 mesos et donem la metodologia, la mentoria i l'ecosistema 22@ per convertir aquest repte en un projecte llest per facturar.",
      cta: "Vull participar",
    },
    targetAudience: {
      title: "Per a qui lidera la transformació",
      audiences: [
        {
          label: "Pimes i mitjanes empreses",
          description:
            "Agilitza processos i protegeix el teu avantatge competitiu sense muntar un departament d'innovació.",
        },
        {
          label: "Intraemprenedors",
          description:
            "Professionals i directius amb capacitat de pilotar projectes disruptius dins de la seva empresa.",
        },
        {
          label: "Empreses industrials i tecnològiques",
          description:
            "Organitzacions que volen aplicar innovació real als seus processos, productes o línies de negoci.",
        },
      ],
    },
    programIncludes: {
      title: "De la idea a l'acció, amb la metodologia learning by doing",
      trainingHeadline: "de formació pràctica, en quatre blocs:",
      trainingHours: "100 hores",
      blocks: [
        "Detecta oportunitats amb potencial de negoci.",
        "Analitza el mercat i valida la demanda abans d'invertir.",
        "Dissenya el teu MVP amb IA i automatització.",
        "Escala amb un model de negoci llest per al mercat.",
      ],
      mentoringHours: "80 hores",
      mentoring:
        "de mentoria personalitzada amb experts de l'ecosistema 22@ que t'acompanyen en cada decisió.",
      communityPrefix: "En acabar, formes part d'una",
      communityHighlight: "comunitat",
      communitySuffix:
        "que et connecta amb empreses, inversors i talent del 22@.",
    },
    calendar: {
      title: "Un itinerari pensat per avançar",
      dateColumn: "Data",
      milestoneColumn: "Fita",
      milestones: [
        { date: "24 juliol 2026", milestone: "Tancament de candidatures" },
        { date: "27 juliol 2026", milestone: "Selecció de projectes" },
        { date: "14 setembre 2026", milestone: "Kick Off del programa" },
        {
          date: "14 desembre 2026",
          milestone: "Demo Day davant empreses, mentors i inversors",
        },
      ],
    },
    formIntro: {
      copyBefore:
        "Completa el formulari. Si ets seleccionat, formaràs part de la nova edició de ",
      copyAfter: ".",
      cta: "Enviar candidatura",
    },
    applicationForm: {
      title: "Formulari d'Admissió de Projectes – Convocatòria 2026",
      notice:
        "Aquest formulari està adreçat a empreses. Tots els camps són obligatoris.",
      fields: {
        companyName: "Nom de l'empresa",
        sector: "Sector",
        address: "Adreça",
        partnerStatus: "Sou empresa sòcia de 22@Network Barcelona?",
        partnerYes: "Sí, som empresa sòcia",
        partnerNo: "No, no som empresa sòcia",
        contactName: "Nom i cognoms de la persona de contacte",
        role: "Càrrec",
        email: "Mail",
        phone: "Telèfon",
        sectors: {
          technology: "Tecnologia",
          industry: "Indústria",
          services: "Serveis",
          commerce: "Comerç",
          health: "Salut",
          other: "Altre",
        },
      },
      cta: "ENVIAR INSCRIPCIÓ D'EMPRESA ➔",
    },
    faqTitle: "Preguntes frequents",
    faq: [
      {
        question: "Té cost?",
        answer:
          "No. El programa està totalment subvencionat per als participants seleccionats.",
      },
      {
        question: "Quin compromís requereix?",
        answer:
          "Assistència activa a les 100h de formació i les 80h de mentoria.",
      },
      {
        question: "Necessito una idea desenvolupada?",
        answer:
          "No. Només un repte real dins de la teva empresa; nosaltres t'ajudem a convertir-lo en solució.",
      },
      {
        question: "Què passa després del Demo Day?",
        answer:
          "T'incorpores a la xarxa de l'ecosistema 22@ — empreses, universitats, centres tecnològics i experts — que t'acompanya en el creixement del teu projecte.",
      },
    ],
    institutionalFooter: {
      legalText:
        "Aquest programa públic de preacceleració d'intraemprenedoria tecnològica està enfocat en l'obtenció de solucions innovadores i resultats de mercat escalables, impulsant la competitivitat i la capacitat d'adaptació del teixit empresarial. Aquesta operació compta amb l'ajuda financera directa de les institucions cofinançadores.",
      fundingText:
        "Subvencionat pel Departament d'Empresa i Treball i amb el cofinançament del Fons Social Europeu Plus",
      altGeneralitat:
        "Logotip oficial del Departament d'Empresa i Treball (PIV Generalitat de Catalunya)",
      altEu: 'Emblema UE + "Cofinançat per la Unió Europea"',
      altNetwork: "Logotip de 22@Network Barcelona",
    },
  },
} as const;
