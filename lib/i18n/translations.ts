export type Locale = "es" | "ca";

export const translations = {
  es: {
    meta: {
      description:
        "Programa de Preaceleración de Intraemprendimiento corporativo 100% subvencionado.",
    },
    header: {
      programOf: "Programa de:",
      fundedBy: "Financiado por:",
      networkAlt: "22@Network Barcelona",
    },
    hero: {
      kicker: "Programa de Preaceleración de Intraemprendimiento",
      title: "IntraLab 22@",
      tagline:
        "Transforma el talento de tu empresa en intraemprendedores con impacto",
      duration: "Inicio 14/09 hasta 14/12 · 4 meses",
      applicationDeadline: "Candidaturas hasta el 24 de julio",
      coordinatesLabel: "Programa de:",
      fundedByLabel: "Financiado por:",
      fundingDisclaimer:
        "Financiado por el Departamento de Empresa y Trabajo de la Generalitat de Catalunya y cofinanciado por el Fondo Social Europeo Plus",
      slideLabel: "Diapositiva",
    },
    hook: {
      titleLine1: "¿Y si la próxima gran innovación",
      titleLine2: "de tu empresa ya existiera?",
      paragraphs: [
        "Todos los días, dentro de las empresas nacen ideas con potencial para mejorar procesos, desarrollar nuevos productos, optimizar operaciones o responder a las nuevas necesidades del mercado.",
        "Sin embargo, muchas de ellas nunca llegan a convertirse en proyectos reales.",
      ],
      reasons: ["No es porque falte talento.", "No es porque falten oportunidades."],
      explanation:
        "Sino porque las organizaciones no siempre disponen del tiempo, la metodología o el entorno necesarios para desarrollarlas.",
      closingBefore: "IntraLab 22@ nace para ayudar a impulsar las ideas y fomentar el espíritu emprendedor dentro de tu empresa.",
    },
    whatIsIntralab: {
      title: "¿Qué es IntraLab?",
      paragraphs: [
        "IntraLab es un programa de preaceleración de intraemprendimiento (Intrapreneurship) corporativo 100% subvencionado, que ayuda a empresas de cualquier sector a transformar retos internos en proyectos innovadores con potencial de generar nuevos productos, servicios, procesos o modelos de negocio y formar a sus líderes.",
        "A través de una metodología eminentemente práctica, acompañamiento experto y conexión con el ecosistema 22@, los equipos desarrollan soluciones reales sobre desafíos reales de la propia organización.",
      ],
      highlightBefore: "No trabajamos sobre proyectos ficticios.",
      highlightAfter: "Trabajamos con proyectos que marcarán el futuro de tu empresa.",
    },
    targetAudience: {
      title: "¿A quién va dirigido?",
      intro:
        "Empresas de cualquier sector que quieran impulsar la innovación desde dentro de su organización.",
      subheading: "Especialmente dirigido a:",
      items: [
        "Empresas de todos los tamaños",
        "Empresas industriales y tecnológicas",
        "Empresas de servicios",
        "Organizaciones en procesos de transformación",
        "Empresas que quieran desarrollar nuevos productos, procesos o líneas de negocio",
        "Organizaciones comprometidas con el desarrollo del talento interno",
      ],
      imageAlt: "Directiva presentando resultados de innovación ante su equipo",
    },
    programIncludes: {
      title: "¿Qué incluye el programa?",
      blocks: [
        {
          title: "100 horas de formación especializada",
          description:
            "Con contenidos prácticos en innovación, inteligencia artificial, validación de mercado, desarrollo de modelos de negocio, liderazgo, financiación, propiedad intelectual y metodologías ágiles.",
        },
        {
          title: "80 horas de mentoría personalizada",
          description:
            "Cada equipo contará con el acompañamiento de expertos que ayudarán a acelerar el desarrollo del proyecto y validar cada una de las fases.",
        },
        {
          title: "Trabajo sobre un reto real",
          description:
            "Todo el aprendizaje se aplica directamente sobre un reto de la propia empresa. No se trabaja sobre casos ficticios.",
        },
        {
          title: "Acceso al ecosistema 22@",
          description:
            "Empresas, universidades, centros tecnológicos, startups, expertos, mentores...",
        },
        {
          title: "Demo Day",
          description: "Presentación final de proyectos desarrollados.",
        },
      ],
    },
    companyBenefits: {
      titleLine1: "¿Qué obtiene",
      titleLine2: "tu empresa?",
      items: [
        {
          title: "Innovación aplicada",
          description:
            "Convierte un reto interno en un proyecto con potencial real de crecimiento.",
        },
        {
          title: "Desarrollo del talento",
          description:
            "Empodera a tus equipos y desarrolla nuevas capacidades de liderazgo e innovación.",
        },
        {
          title: "Cultura innovadora y emprendedora",
          description:
            "Introduce metodologías que permanecerán dentro de la organización una vez finalizado el programa.",
        },
        {
          title: "Validación",
          description:
            "Reduce la incertidumbre validando nuevas ideas antes de realizar grandes inversiones.",
        },
        {
          title: "Ecosistema",
          description:
            "Conecta con empresas, start-ups, universidades, expertos y centros tecnológicos del distrito 22@.",
        },
      ],
      imageAlt: "Edificio del distrito tecnológico 22@ Barcelona al atardecer",
    },
    teamBenefits: {
      titleLine1: "¿Qué obtiene",
      titleLine2: "tu equipo?",
      items: [
        "Nuevas competencias",
        "Visión estratégica",
        "Herramientas de innovación",
        "Metodologías prácticas",
        "Mentoría individualizada",
        "Redes de contactos",
        "Visibilidad interna",
        "Liderazgo y cultura emprendedora",
      ],
      imageAlt: "Equipo de intraemprendedores trabajando juntos en una sesión de mentoría",
    },
    calendar: {
      title: "Fechas clave",
      milestones: [
        { date: "Hasta el 24 de julio", milestone: "Presentación de candidaturas." },
        { date: "27 de julio", milestone: "Proceso de selección." },
        { date: "14 de septiembre", milestone: "Inicio del programa." },
        { date: "14 de diciembre", milestone: "Demo Day y clausura." },
      ],
      quote: "La innovación no siempre requiere de una gran inversión",
      quoteBody:
        "Empieza muchas veces con una idea, un equipo motivado y emprendedor, un reto bien definido en el entorno adecuado para convertir esta idea en una realidad.",
    },
    ctaFinal: {
      title: "¡Presenta tu candidatura!",
      subtitle: "Convierte un reto de hoy en la oportunidad para el mañana.",
      primaryCta: "Enviar candidatura",
      secondaryCta: "info@intralab.cat",
      secondaryHref: "mailto:info@intralab.cat",
      fundingDisclaimerLine1:
        "Financiado por el Departamento de Empresa y Trabajo",
      fundingDisclaimerLine2:
        "de la Generalitat de Catalunya y cofinanciado por el Fondo Social Europeo Plus",
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
        "Programa de Preacceleració d'Intraemprenedoria corporativa 100% subvencionada.",
    },
    header: {
      programOf: "Programa de:",
      fundedBy: "Finançat per:",
      networkAlt: "22@Network Barcelona",
    },
    hero: {
      kicker: "Programa de Preacceleració d'Intraemprenedoria",
      title: "IntraLab 22@",
      tagline:
        "Transforma el talent de la teva empresa en intraemprenedors amb impacte",
      duration: "Inici 14/09 fins al 14/12 · 4 mesos",
      applicationDeadline: "Candidatures fins al 24 de juliol",
      coordinatesLabel: "Programa de:",
      fundedByLabel: "Finançat per:",
      fundingDisclaimer:
        "Finançat pel Departament d'Empresa i Treball de la Generalitat de Catalunya i cofinançat pel Fons Social Europeu Plus",
      slideLabel: "Diapositiva",
    },
    hook: {
      titleLine1: "I si la propera gran innovació",
      titleLine2: "de la teva empresa ja existís?",
      paragraphs: [
        "Cada dia, dins de les empreses neixen idees amb potencial per millorar processos, desenvolupar nous productes, optimitzar operacions o respondre a les noves necessitats del mercat.",
        "Tot i això, moltes d'elles mai arriben a convertir-se en projectes reals.",
      ],
      reasons: ["No és perquè falti talent.", "No és perquè faltin oportunitats."],
      explanation:
        "Sinó perquè les organitzacions no sempre disposen del temps, la metodologia o l'entorn necessaris per desenvolupar-les.",
      closingBefore:
        "IntraLab 22@ neix per ajudar a impulsar les idees i fomentar l'esperit emprenedor dins de la teva empresa.",
    },
    whatIsIntralab: {
      title: "Què és IntraLab?",
      paragraphs: [
        "IntraLab és un programa de preacceleració d'intraemprenedoria (Intrapreneurship) corporativa 100% subvencionada, que ajuda empreses de qualsevol sector a transformar reptes interns en projectes innovadors amb potencial de generar nous productes, serveis, processos o models de negoci i formar els seus líders.",
        "A través d'una metodologia eminentment pràctica, acompanyament expert i connexió amb l'ecosistema 22@, els equips desenvolupen solucions reals sobre desafiaments reals de la mateixa organització.",
      ],
      highlightBefore: "No treballem sobre projectes ficticis.",
      highlightAfter: "Treballem amb projectes que marcaran el futur de la teva empresa.",
    },
    targetAudience: {
      title: "A qui va dirigit?",
      intro:
        "Empreses de qualsevol sector que vulguin impulsar la innovació des de dins de la seva organització.",
      subheading: "Especialment dirigit a:",
      items: [
        "Empreses de totes les mides",
        "Empreses industrials i tecnològiques",
        "Empreses de serveis",
        "Organitzacions en processos de transformació",
        "Empreses que vulguin desenvolupar nous productes, processos o línies de negoci",
        "Organitzacions compromeses amb el desenvolupament del talent intern",
      ],
      imageAlt: "Directiva presentant resultats d'innovació davant el seu equip",
    },
    programIncludes: {
      title: "Què inclou el programa?",
      blocks: [
        {
          title: "100 hores de formació especialitzada",
          description:
            "Amb continguts pràctics en innovació, intel·ligència artificial, validació de mercat, desenvolupament de models de negoci, lideratge, finançament, propietat intel·lectual i metodologies àgils.",
        },
        {
          title: "80 hores de mentoria personalitzada",
          description:
            "Cada equip comptarà amb l'acompanyament d'experts que ajudaran a accelerar el desenvolupament del projecte i validar cadascuna de les fases.",
        },
        {
          title: "Treball sobre un repte real",
          description:
            "Tot l'aprenentatge s'aplica directament sobre un repte de la mateixa empresa. No es treballa sobre casos ficticis.",
        },
        {
          title: "Accés a l'ecosistema 22@",
          description:
            "Empreses, universitats, centres tecnològics, startups, experts, mentors...",
        },
        {
          title: "Demo Day",
          description: "Presentació final de projectes desenvolupats.",
        },
      ],
    },
    companyBenefits: {
      titleLine1: "Què obté",
      titleLine2: "la teva empresa?",
      items: [
        {
          title: "Innovació aplicada",
          description:
            "Converteix un repte intern en un projecte amb potencial real de creixement.",
        },
        {
          title: "Desenvolupament del talent",
          description:
            "Empodera els teus equips i desenvolupa noves capacitats de lideratge i innovació.",
        },
        {
          title: "Cultura innovadora i emprenedora",
          description:
            "Introdueix metodologies que romandran dins de l'organització un cop finalitzat el programa.",
        },
        {
          title: "Validació",
          description:
            "Redueix la incertesa validant noves idees abans de realitzar grans inversions.",
        },
        {
          title: "Ecosistema",
          description:
            "Connecta amb empreses, start-ups, universitats, experts i centres tecnològics del districte 22@.",
        },
      ],
      imageAlt: "Edifici del districte tecnològic 22@ Barcelona al capvespre",
    },
    teamBenefits: {
      titleLine1: "Què obté",
      titleLine2: "el teu equip?",
      items: [
        "Noves competències",
        "Visió estratègica",
        "Eines d'innovació",
        "Metodologies pràctiques",
        "Mentoria individualitzada",
        "Xarxes de contactes",
        "Visibilitat interna",
        "Lideratge i cultura emprenedora",
      ],
      imageAlt: "Equip d'intraemprenedors treballant junts en una sessió de mentoria",
    },
    calendar: {
      title: "Dates clau",
      milestones: [
        { date: "Fins el 24 de juliol", milestone: "Presentació de candidatures." },
        { date: "27 de juliol", milestone: "Procés de selecció." },
        { date: "14 de setembre", milestone: "Inici del programa." },
        { date: "14 de desembre", milestone: "Demo Day i cloenda." },
      ],
      quote: "La innovació no sempre requereix una gran inversió",
      quoteBody:
        "Comença moltes vegades amb una idea, un equip motivat i emprenedor, un repte ben definit en l'entorn adequat per convertir aquesta idea en una realitat.",
    },
    ctaFinal: {
      title: "Presenta la teva candidatura!",
      subtitle: "Converteix un repte d'avui en l'oportunitat per al demà.",
      primaryCta: "Enviar candidatura",
      secondaryCta: "info@intralab.cat",
      secondaryHref: "mailto:info@intralab.cat",
      fundingDisclaimerLine1:
        "Finançat pel Departament d'Empresa i Treball",
      fundingDisclaimerLine2:
        "de la Generalitat de Catalunya i cofinançat pel Fons Social Europeu Plus",
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
