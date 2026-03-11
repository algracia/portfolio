export type Language = "en" | "es";

export type ProjectLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type ProjectResource = {
  label: string;
  href: string;
  fileType: "pdf";
};

export type ProjectSection = {
  title: string;
  text: string;
};

export type ProjectImage = {
  src: string;
  alt: string;
};

export type Project = {
  slug: string;
  title: string;
  period: string;
  category: string;
  coverImage: ProjectImage;
  gallery?: ProjectImage[];
  summary: string;
  highlights: string[];
  stack: string[];
  resources?: ProjectResource[];
  externalLinks?: ProjectLink[];
  detail: {
    intro: string;
    sections: ProjectSection[];
  };
};

type HeroStat = {
  label: string;
  value: string;
};

type Capability = {
  title: string;
  text: string;
};

type EvidenceItem = {
  title: string;
  text: string;
};

type ExperienceItem = {
  role: string;
  period: string;
  bullets: string[];
};

type SectionIntroText = {
  eyebrow: string;
  title: string;
  text: string;
};

export type SiteTranslation = {
  brand: string;
  nav: {
    projects: string;
    capabilities: string;
    experience: string;
    contact: string;
    cv: string;
    github: string;
    linkedin: string;
    languageToggleAria: string;
    english: string;
    spanish: string;
  };
  actions: {
    viewProjectDetails: string;
    backToProjects: string;
    backHome: string;
  };
  projectDetail: {
    introLabel: string;
    keyHighlights: string;
    techStack: string;
    pdfResources: string;
    externalLinks: string;
    gallery: string;
    notFoundTitle: string;
    notFoundText: string;
  };
  profile: {
    name: string;
    headline: string;
    location: string;
  };
  hero: {
    eyebrow: string;
    text: string;
    viewWork: string;
    positioningLabel: string;
    positioningTitle: string;
    positioningText: string;
  };
  heroStats: HeroStat[];
  sections: {
    projects: SectionIntroText;
    evidence: SectionIntroText;
    capabilities: SectionIntroText;
    experience: SectionIntroText;
    notes: SectionIntroText;
    contact: {
      eyebrow: string;
      title: string;
      text: string;
      emailButton: string;
      formTitle: string;
      formDescription: string;
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submitButton: string;
    };
  };
  projects: Project[];
  engineeringEvidence: EvidenceItem[];
  capabilities: Capability[];
  experience: ExperienceItem[];
  notes: string[];
};

export const profileLinks = {
  email: "agraciamartelo@gmail.com",
  github: "https://github.com/algracia",
  linkedin: "https://www.linkedin.com/in/alberto-gracia/",
  cv: "/docs/HV_AlbertoGracia_2026.pdf"
};

export const contactFormConfig = {
  action: "https://formspree.io/f/your-form-id",
  method: "POST" as const
};

export const translations: Record<Language, SiteTranslation> = {
  en: {
    brand: "AGM",
    nav: {
      projects: "Projects",
      capabilities: "Capabilities",
      experience: "Experience",
      contact: "Contact",
      cv: "CV",
      github: "GitHub",
      linkedin: "LinkedIn",
      languageToggleAria: "Select language",
      english: "EN",
      spanish: "ES"
    },
    actions: {
      viewProjectDetails: "View project details",
      backToProjects: "Back to selected work",
      backHome: "Back to home"
    },
    projectDetail: {
      introLabel: "Project overview",
      keyHighlights: "Key highlights",
      techStack: "Tech stack",
      pdfResources: "PDF resources",
      externalLinks: "External links",
      gallery: "Gallery",
      notFoundTitle: "Project not found",
      notFoundText: "This detail page does not exist in the current portfolio set."
    },
    profile: {
      name: "Alberto Gracia Martelo",
      headline: "Physics Engineer focused on CAD, embedded firmware and prototype engineering.",
      location: "Medellin, Colombia"
    },
    hero: {
      eyebrow: "Portfolio / Prototype Engineering",
      text: "I build prototype systems across mechanical CAD, PCB design, embedded firmware and validation. My work is strongest where hardware, control and manufacturable documentation meet.",
      viewWork: "View selected work",
      positioningLabel: "Positioning",
      positioningTitle: "Prototype / Mechatronics / Embedded",
      positioningText: "The portfolio is intentionally tailored for CAD, prototyping and embedded-oriented roles."
    },
    heroStats: [
      { label: "Core focus", value: "Mechanical CAD + Embedded Firmware" },
      { label: "Prototype depth", value: "CAD -> PCB -> bring-up -> validation" },
      { label: "Languages", value: "Spanish, English C1, German B1" }
    ],
    sections: {
      projects: {
        eyebrow: "Selected work",
        title: "Projects that show CAD, firmware and integration depth",
        text: "Each card links to a focused detail page with project context, technical decisions and artifacts."
      },
      evidence: {
        eyebrow: "Engineering Evidence",
        title: "Engineering Evidence",
        text: "Representative artifacts that show how design decisions are documented, implemented and verified."
      },
      capabilities: {
        eyebrow: "Capabilities",
        title: "Where I add the most value",
        text: "My advantage is not a single isolated skill. It is the ability to connect CAD, hardware, embedded control and technical documentation in the same prototype workflow."
      },
      experience: {
        eyebrow: "Experience",
        title: "Relevant professional context",
        text: "The experience section supports the technical narrative and keeps backend/IT work in the background instead of making it the main message."
      },
      notes: {
        eyebrow: "Positioning notes",
        title: "How this portfolio is framed",
        text: "The narrative is deliberately optimized for international and prototype-oriented opportunities."
      },
      contact: {
        eyebrow: "Contact",
        title: "Interested in prototype engineering, embedded systems or CAD-intensive work?",
        text: "I am open to roles and collaborations where mechanical design, embedded control, testing and technical documentation need to come together in a practical prototype workflow.",
        emailButton: "Email me",
        formTitle: "Quick contact form",
        formDescription: "Use this form if email is not convenient. Submissions are sent through an external form service endpoint.",
        nameLabel: "Name",
        namePlaceholder: "Your name",
        emailLabel: "Email",
        emailPlaceholder: "you@example.com",
        messageLabel: "Message",
        messagePlaceholder: "Briefly describe your project, role or collaboration context.",
        submitButton: "Send form submission"
      }
    },
    projects: [
      {
        slug: "chessproject",
        title: "ChessProject - Autonomous Chessboard",
        period: "2023-2024",
        category: "Embedded systems + mechatronics",
        coverImage: {
          src: "/assets/chessproject-cover-final.jpg",
          alt: "ChessProject autonomous chessboard cover image"
        },
        gallery: [
          {
            src: "/assets/chessproject-gallery-01.jpg",
            alt: "ChessProject gallery image 1"
          },
          {
            src: "/assets/chessproject-gallery-02.jpg",
            alt: "ChessProject gallery image 2"
          }
        ],
        summary:
          "A CNC-style electromechanical chessboard that executes physical moves using an XY gantry, stepper motors and a servo-lift electromagnet.",
        highlights: [
          "STM32/HAL firmware with timers, PWM, homing logic and lightweight USART2 protocol.",
          "Hardware/software integration between gantry mechanics, PCB interconnects and backend orchestration.",
          "Prototype documentation including diagrams, bring-up guidance and demo material."
        ],
        stack: ["STM32", "C", "HAL", "Timers/PWM", "UART/USART2", "Python", "Flask", "Stockfish", "Eagle PCB"],
        resources: [
          {
            label: "Technical brief (PDF)",
            href: "/docs/chessproject-technical-brief.pdf",
            fileType: "pdf"
          },
          {
            label: "Electromechanical overview (PDF)",
            href: "/docs/chessproject-electromechanical-overview.pdf",
            fileType: "pdf"
          }
        ],
        externalLinks: [
          { label: "GitHub", href: "https://github.com/algracia", external: true }
        ],
        detail: {
          intro:
            "The project combines mechanics, embedded control and software orchestration to produce physically accurate chess moves on a custom board platform.",
          sections: [
            {
              title: "System architecture",
              text: "An XY gantry carries an electromagnet actuator to pick and place chess pieces. Positioning logic, homing and movement sequences are coordinated through firmware-level motion routines."
            },
            {
              title: "Firmware and controls",
              text: "The STM32 firmware handles stepper timing, PWM control and serial commands. The control layer prioritizes deterministic motion and safe endpoint behavior for repeatable piece transfer."
            },
            {
              title: "Integration and validation",
              text: "The prototype was validated through iterative bring-up tests that connected board mechanics, interconnect PCB routing and command orchestration from a Python backend."
            }
          ]
        }
      },
      {
        slug: "zvs-inverter",
        title: "ZVS resonant inverter for induction heating",
        period: "2026",
        category: "Power electronics + PCB design",
        coverImage: {
          src: "/assets/zvs-inverter-cover-final.jpg",
          alt: "ZVS inverter cover image"
        },
        gallery: [
          {
            src: "/assets/zvs-inverter-gallery-01.jpg",
            alt: "ZVS inverter gallery image 1"
          },
          {
            src: "/assets/zvs-inverter-gallery-02.jpg",
            alt: "ZVS inverter gallery image 2"
          }
        ],
        summary:
          "Power PCB design for a resonant inverter intended for induction-heating experiments, with high-current layout decisions and full prototype preparation.",
        highlights: [
          "2-layer FR-4 power board with 2 oz copper and TO-247-class MOSFET footprint strategy.",
          "Layout informed by LTspice reasoning for currents above 50 A RMS and 80 A peak.",
          "Manufacturing package, BOM and assembly readiness for first-pass validation."
        ],
        stack: ["PCB layout", "Eagle/Fusion 360", "Power electronics", "LTspice", "High-current routing", "BOM"],
        resources: [
          {
            label: "Design report (PDF)",
            href: "/docs/zvs-inverter-design-report.pdf",
            fileType: "pdf"
          },
          {
            label: "Validation notes (PDF)",
            href: "/docs/zvs-inverter-validation-notes.pdf",
            fileType: "pdf"
          }
        ],
        detail: {
          intro:
            "This board was developed as a practical power electronics prototype, balancing resonant behavior, thermal handling and manufacturable documentation.",
          sections: [
            {
              title: "Electrical design intent",
              text: "The inverter targets stable ZVS behavior for induction-heating experiments while preserving safe operating margins and component compatibility across the full power path."
            },
            {
              title: "Layout strategy",
              text: "Placement and routing decisions reduced parasitic effects on high-current loops, improved current sharing and simplified probing points for bench validation."
            },
            {
              title: "Prototype readiness",
              text: "Deliverables include fabrication outputs, BOM alignment and assembly notes, enabling rapid bench bring-up with measurable and repeatable test conditions."
            }
          ]
        }
      },
      {
        slug: "cad-assemblies",
        title: "CAD assemblies showcase",
        period: "Portfolio project",
        category: "Mechanical CAD + documentation",
        coverImage: {
          src: "/assets/cad-assemblies-cover-final.jpg",
          alt: "CAD assemblies cover image"
        },
        gallery: [
          {
            src: "/assets/cad-assemblies-gallery-01.jpg",
            alt: "CAD assemblies gallery image 1"
          },
          {
            src: "/assets/cad-assemblies-gallery-02.jpg",
            alt: "CAD assemblies gallery image 2"
          }
        ],
        summary:
          "A combined detail page for the Archimedes screw dispenser and tracked tank concept, focused on assembly complexity and manufacturable communication.",
        highlights: [
          "Exploded assembly thinking and BOM-oriented documentation.",
          "Strong design communication through multi-part layouts and visual hierarchy.",
          "Portfolio pieces positioned as CAD evidence for prototype-oriented roles."
        ],
        stack: ["Inventor/Fusion 360", "Assemblies", "Technical drawings", "BOM", "Exploded views", "Rendering"],
        resources: [
          {
            label: "Drawing package (PDF)",
            href: "/docs/cad-assemblies-drawing-package.pdf",
            fileType: "pdf"
          },
          {
            label: "BOM documentation (PDF)",
            href: "/docs/cad-assemblies-bom-documentation.pdf",
            fileType: "pdf"
          }
        ],
        detail: {
          intro:
            "This page groups two CAD-focused works to show breadth in assembly design, technical visualization and practical documentation for fabrication contexts.",
          sections: [
            {
              title: "Archimedes screw dispenser",
              text: "A full assembly featuring enclosure organization, part relationships and exploded documentation to communicate how the system is built and serviced."
            },
            {
              title: "Tracked tank concept",
              text: "A concept-heavy CAD piece centered on complex subassemblies and visual storytelling. It demonstrates modeling fluency and communication quality more than production-level release intent."
            },
            {
              title: "Documentation focus",
              text: "Both projects are presented with portfolio framing that emphasizes manufacturability communication, assembly logic and recruiter-friendly technical readability."
            }
          ]
        }
      }
    ],
    engineeringEvidence: [
      {
        title: "Technical drawings",
        text: "Mechanical packages include multi-view part drawings, assembly references, dimensions and tolerances prepared for workshop interpretation."
      },
      {
        title: "BOM and documentation",
        text: "Projects include structured bills of materials, versioned notes and build documentation to support ordering, assembly and design traceability."
      },
      {
        title: "Firmware stack",
        text: "Firmware work is organized around MCU abstraction layers, timer/PWM control, serial interfaces and explicit state handling for motion and control tasks."
      },
      {
        title: "Validation workflow",
        text: "Validation combines bench instrumentation, incremental bring-up checks, fault isolation and update logs to confirm expected system behavior."
      }
    ],
    capabilities: [
      {
        title: "Mechanical CAD & manufacturing drawings",
        text: "Prototype-oriented CAD in Inventor and Fusion 360, with 3D assemblies, exploded views, BOMs and technical drawings prepared for workshop-level manufacturing."
      },
      {
        title: "Embedded firmware & motion control",
        text: "STM32 and ESP32 development in C/C++, with timers, PWM, UART/USART, endstops, actuator control and hardware-aware debugging."
      },
      {
        title: "PCB design & power electronics",
        text: "Schematic capture and board layout in Eagle/Fusion 360, including high-current routing decisions, via stitching, design-rule checks and documentation."
      },
      {
        title: "System integration & validation",
        text: "Prototype assembly, bring-up, troubleshooting and measurement using oscilloscopes, power supplies, multimeters, logic analyzers and JTAG/SWD tools."
      }
    ],
    experience: [
      {
        role: "Freelance Hardware / Embedded Prototyping Engineer",
        period: "Aug 2024 - Present",
        bullets: [
          "Performed technical audit and feasibility assessment of a wearable TAG & HUB system, identifying gaps, test needs and next-step paths toward a more reliable MVP.",
          "Designed, assembled and validated a ZVS power PCB for high-current, high-frequency operation.",
          "Used lab instrumentation for debugging, validation and hardware troubleshooting."
        ]
      },
      {
        role: "Technical Consultant - IoT & Smart Cities, TYSA",
        period: "Oct 2024 - May 2025",
        bullets: [
          "Contributed to smart-city and public-lighting management consulting for Envigado.",
          "Led technical strategy conversations and represented the company at FIWARE Global Summit 2024."
        ]
      },
      {
        role: "Academic Teaching Assistant - Electronics / Signals",
        period: "2022 - 2023",
        bullets: [
          "Supported students in oscillations, analog electronics and digital electronics laboratory work.",
          "Guided prototype construction, component integration and functional validation."
        ]
      }
    ],
    notes: [
      "This portfolio is intentionally oriented to prototype engineering, mechatronics and embedded systems, not general backend development.",
      "Sensitive native files are not published by default. Simplified PDFs and selected visuals are shown publicly; deeper technical packages can be shared upon request."
    ]
  },
  es: {
    brand: "AGM",
    nav: {
      projects: "Proyectos",
      capabilities: "Capacidades",
      experience: "Experiencia",
      contact: "Contacto",
      cv: "CV",
      github: "GitHub",
      linkedin: "LinkedIn",
      languageToggleAria: "Seleccionar idioma",
      english: "EN",
      spanish: "ES"
    },
    actions: {
      viewProjectDetails: "Ver detalles del proyecto",
      backToProjects: "Volver a trabajos seleccionados",
      backHome: "Volver al inicio"
    },
    projectDetail: {
      introLabel: "Resumen del proyecto",
      keyHighlights: "Puntos clave",
      techStack: "Stack técnico",
      pdfResources: "Recursos PDF",
      externalLinks: "Enlaces externos",
      gallery: "Galería",
      notFoundTitle: "Proyecto no encontrado",
      notFoundText: "Esta página de detalle no existe en el portafolio actual."
    },
    profile: {
      name: "Alberto Gracia Martelo",
      headline: "Ingeniero físico enfocado en CAD, firmware embebido e ingeniería de prototipos.",
      location: "Medellín, Colombia"
    },
    hero: {
      eyebrow: "Portafolio / Ingeniería de Prototipos",
      text: "Desarrollo sistemas de prototipos que integran CAD mecánico, diseño de PCB, firmware embebido y validación. Mi mayor fortaleza está donde se unen hardware, control y documentación lista para fabricación.",
      viewWork: "Ver trabajos seleccionados",
      positioningLabel: "Enfoque",
      positioningTitle: "Prototipos / Mecatrónica / Embebidos",
      positioningText: "Este portafolio está orientado intencionalmente a roles centrados en CAD, prototipado y sistemas embebidos."
    },
    heroStats: [
      { label: "Foco principal", value: "CAD mecánico + Firmware embebido" },
      { label: "Profundidad de prototipo", value: "CAD -> PCB -> puesta en marcha -> validación" },
      { label: "Idiomas", value: "Español, inglés C1, alemán B1" }
    ],
    sections: {
      projects: {
        eyebrow: "Trabajos seleccionados",
        title: "Proyectos que muestran profundidad en CAD, firmware e integración",
        text: "Cada tarjeta enlaza a una página de detalle con contexto técnico, decisiones de diseño y artefactos del proyecto."
      },
      evidence: {
        eyebrow: "Evidencia de ingeniería",
        title: "Evidencia de ingeniería",
        text: "Artefactos representativos que muestran cómo se documentan, implementan y verifican las decisiones de diseño."
      },
      capabilities: {
        eyebrow: "Capacidades",
        title: "Dónde aporto más valor",
        text: "Mi ventaja no es una habilidad aislada, sino la capacidad de conectar CAD, hardware, control embebido y documentación técnica en un mismo flujo de prototipado."
      },
      experience: {
        eyebrow: "Experiencia",
        title: "Contexto profesional relevante",
        text: "La sección de experiencia respalda la narrativa técnica y mantiene el trabajo de backend/IT en segundo plano, sin convertirlo en el mensaje principal."
      },
      notes: {
        eyebrow: "Notas de enfoque",
        title: "Cómo está planteado este portafolio",
        text: "La narrativa está optimizada deliberadamente para oportunidades internacionales y orientadas a prototipos."
      },
      contact: {
        eyebrow: "Contacto",
        title: "¿Te interesa colaborar en ingeniería de prototipos, sistemas embebidos o trabajo intensivo en CAD?",
        text: "Estoy abierto a roles y colaboraciones donde diseño mecánico, control embebido, pruebas y documentación técnica deban integrarse en un flujo práctico de prototipado.",
        emailButton: "Escríbeme",
        formTitle: "Formulario de contacto",
        formDescription: "Usa este formulario si no te resulta práctico escribir por correo. Los envíos se procesan a través de un endpoint externo.",
        nameLabel: "Nombre",
        namePlaceholder: "Tu nombre",
        emailLabel: "Correo",
        emailPlaceholder: "tu-correo@ejemplo.com",
        messageLabel: "Mensaje",
        messagePlaceholder: "Describe brevemente el contexto del proyecto, rol o colaboración.",
        submitButton: "Enviar formulario"
      }
    },
    projects: [
      {
        slug: "chessproject",
        title: "ChessProject - Tablero de ajedrez autónomo",
        period: "2023-2024",
        category: "Sistemas embebidos + mecatrónica",
        coverImage: {
          src: "/assets/chessproject-cover-final.jpg",
          alt: "Imagen de portada del ChessProject"
        },
        gallery: [
          {
            src: "/assets/chessproject-gallery-01.jpg",
            alt: "Imagen 1 de galería ChessProject"
          },
          {
            src: "/assets/chessproject-gallery-02.jpg",
            alt: "Imagen 2 de galería ChessProject"
          }
        ],
        summary:
          "Un tablero de ajedrez electromecánico estilo CNC que ejecuta movimientos físicos mediante un pórtico XY, motores paso a paso y un electroimán con elevación por servomotor.",
        highlights: [
          "Firmware STM32/HAL con temporizadores, PWM, lógica de homing y protocolo USART2 ligero.",
          "Integración hardware/software entre mecánica del pórtico, interconexiones PCB y orquestación backend.",
          "Documentación del prototipo con diagramas, guía de puesta en marcha y material de demostración."
        ],
        stack: ["STM32", "C", "HAL", "Temporizadores/PWM", "UART/USART2", "Python", "Flask", "Stockfish", "Eagle PCB"],
        resources: [
          {
            label: "Resumen técnico (PDF)",
            href: "/docs/chessproject-technical-brief.pdf",
            fileType: "pdf"
          },
          {
            label: "Visión electromecánica (PDF)",
            href: "/docs/chessproject-electromechanical-overview.pdf",
            fileType: "pdf"
          }
        ],
        externalLinks: [
          { label: "GitHub", href: "https://github.com/algracia", external: true }
        ],
        detail: {
          intro:
            "El proyecto combina mecánica, control embebido y orquestación por software para ejecutar movimientos de ajedrez físicamente en una plataforma personalizada.",
          sections: [
            {
              title: "Arquitectura del sistema",
              text: "Un pórtico XY transporta un actuador electromagnético para levantar y mover piezas. La lógica de posicionamiento, homing y secuencias de movimiento se coordina desde rutinas de firmware."
            },
            {
              title: "Firmware y control",
              text: "El firmware en STM32 maneja temporización de steppers, control PWM y comandos seriales. La capa de control prioriza movimiento determinista y comportamiento seguro en finales de carrera."
            },
            {
              title: "Integración y validación",
              text: "El prototipo se validó de forma iterativa conectando mecánica del tablero, enrutamiento de interconexiones PCB y orquestación de comandos desde backend en Python."
            }
          ]
        }
      },
      {
        slug: "zvs-inverter",
        title: "Inversor resonante ZVS para calentamiento por inducción",
        period: "2026",
        category: "Electrónica de potencia + diseño de PCB",
        coverImage: {
          src: "/assets/zvs-inverter-cover-final.jpg",
          alt: "Imagen de portada del inversor ZVS"
        },
        gallery: [
          {
            src: "/assets/zvs-inverter-gallery-01.jpg",
            alt: "Imagen 1 de galería del inversor ZVS"
          },
          {
            src: "/assets/zvs-inverter-gallery-02.jpg",
            alt: "Imagen 2 de galería del inversor ZVS"
          }
        ],
        summary:
          "Diseño de PCB de potencia para un inversor resonante orientado a experimentos de calentamiento por inducción, con decisiones de layout de alta corriente y preparación completa de prototipo.",
        highlights: [
          "Placa de potencia FR-4 de 2 capas con cobre de 2 oz y estrategia de huellas TO-247.",
          "Layout respaldado por razonamiento en LTspice para corrientes superiores a 50 A RMS y 80 A pico.",
          "Paquete de fabricación, BOM y preparación de ensamblaje para validación inicial."
        ],
        stack: ["Layout PCB", "Eagle/Fusion 360", "Electrónica de potencia", "LTspice", "Ruteo de alta corriente", "BOM"],
        resources: [
          {
            label: "Reporte de diseño (PDF)",
            href: "/docs/zvs-inverter-design-report.pdf",
            fileType: "pdf"
          },
          {
            label: "Notas de validación (PDF)",
            href: "/docs/zvs-inverter-validation-notes.pdf",
            fileType: "pdf"
          }
        ],
        detail: {
          intro:
            "Esta placa fue desarrollada como un prototipo práctico de electrónica de potencia, equilibrando comportamiento resonante, manejo térmico y documentación fabricable.",
          sections: [
            {
              title: "Objetivo eléctrico",
              text: "El inversor busca comportamiento ZVS estable para pruebas de inducción, manteniendo márgenes de operación seguros y compatibilidad entre componentes de la ruta de potencia."
            },
            {
              title: "Estrategia de layout",
              text: "La ubicación de componentes y el ruteo se orientaron a reducir parásitos en lazos de alta corriente, mejorar reparto de corriente y facilitar puntos de medición en banco."
            },
            {
              title: "Preparación de prototipo",
              text: "Los entregables incluyen archivos de fabricación, BOM y notas de ensamblaje para habilitar una puesta en marcha rápida con condiciones de prueba repetibles."
            }
          ]
        }
      },
      {
        slug: "cad-assemblies",
        title: "Showcase de ensamblajes CAD",
        period: "Proyecto de portafolio",
        category: "CAD mecánico + documentación",
        coverImage: {
          src: "/assets/cad-assemblies-cover-final.jpg",
          alt: "Imagen de portada de ensamblajes CAD"
        },
        gallery: [
          {
            src: "/assets/cad-assemblies-gallery-01.jpg",
            alt: "Imagen 1 de galería de ensamblajes CAD"
          },
          {
            src: "/assets/cad-assemblies-gallery-02.jpg",
            alt: "Imagen 2 de galería de ensamblajes CAD"
          }
        ],
        summary:
          "Una página de detalle combinada para el dosificador de tornillo de Arquímedes y el concepto de tanque oruga, enfocada en complejidad de ensamblajes y comunicación manufacturable.",
        highlights: [
          "Pensamiento de ensamblaje explotado y documentación orientada a BOM.",
          "Comunicación de diseño sólida mediante layouts de múltiples piezas y jerarquía visual.",
          "Piezas de portafolio posicionadas como evidencia CAD para roles orientados a prototipos."
        ],
        stack: ["Inventor/Fusion 360", "Ensamblajes", "Planos técnicos", "BOM", "Vistas explotadas", "Renderizado"],
        resources: [
          {
            label: "Paquete de planos (PDF)",
            href: "/docs/cad-assemblies-drawing-package.pdf",
            fileType: "pdf"
          },
          {
            label: "Documentación BOM (PDF)",
            href: "/docs/cad-assemblies-bom-documentation.pdf",
            fileType: "pdf"
          }
        ],
        detail: {
          intro:
            "Esta página agrupa dos trabajos centrados en CAD para mostrar amplitud en diseño de ensamblajes, visualización técnica y documentación práctica para contextos de fabricación.",
          sections: [
            {
              title: "Dosificador de tornillo de Arquímedes",
              text: "Ensamblaje completo con organización de carcasa, relación entre piezas y documentación explotada para comunicar cómo se construye y mantiene el sistema."
            },
            {
              title: "Concepto de tanque oruga",
              text: "Pieza CAD de enfoque conceptual con subensamblajes complejos y narrativa visual fuerte. Demuestra fluidez de modelado y calidad de comunicación más que liberación de producción."
            },
            {
              title: "Enfoque documental",
              text: "Ambos proyectos se presentan con un enfoque de portafolio que prioriza comunicación de manufacturabilidad, lógica de ensamblaje y lectura técnica clara para reclutadores."
            }
          ]
        }
      }
    ],
    engineeringEvidence: [
      {
        title: "Planos técnicos",
        text: "Los paquetes mecánicos incluyen planos de piezas en múltiples vistas, referencias de ensamblaje, cotas y tolerancias preparados para interpretación en taller."
      },
      {
        title: "BOM y documentación",
        text: "Los proyectos incluyen listas de materiales estructuradas, notas versionadas y documentación de construcción para soportar compra, ensamblaje y trazabilidad."
      },
      {
        title: "Stack de firmware",
        text: "El firmware se organiza alrededor de capas de abstracción del MCU, control por temporizadores/PWM, interfaces seriales y manejo explícito de estados."
      },
      {
        title: "Flujo de validación",
        text: "La validación combina instrumentación de banco, pruebas incrementales de puesta en marcha, aislamiento de fallas y registros de actualización."
      }
    ],
    capabilities: [
      {
        title: "CAD mecánico y planos de fabricación",
        text: "CAD orientado a prototipos en Inventor y Fusion 360, con ensamblajes 3D, vistas explotadas, BOM y planos técnicos preparados para manufactura de taller."
      },
      {
        title: "Firmware embebido y control de movimiento",
        text: "Desarrollo en STM32 y ESP32 en C/C++, con temporizadores, PWM, UART/USART, finales de carrera, control de actuadores y depuración consciente del hardware."
      },
      {
        title: "Diseño de PCB y electrónica de potencia",
        text: "Captura esquemática y layout en Eagle/Fusion 360, incluyendo decisiones de ruteo de alta corriente, via stitching, verificación de reglas y documentación."
      },
      {
        title: "Integración de sistemas y validación",
        text: "Ensamblaje de prototipos, puesta en marcha, troubleshooting y medición usando osciloscopios, fuentes, multímetros, analizadores lógicos y herramientas JTAG/SWD."
      }
    ],
    experience: [
      {
        role: "Ingeniero freelance de prototipado hardware/embebido",
        period: "Ago 2024 - Presente",
        bullets: [
          "Realicé auditoría técnica y evaluación de viabilidad de un sistema wearable TAG & HUB, identificando brechas, necesidades de prueba y rutas siguientes hacia un MVP más confiable.",
          "Diseñé, ensamblé y validé una PCB de potencia ZVS para operación de alta corriente y alta frecuencia.",
          "Utilicé instrumentación de laboratorio para depuración, validación y troubleshooting de hardware."
        ]
      },
      {
        role: "Consultor técnico - IoT y Ciudades Inteligentes, TYSA",
        period: "Oct 2024 - May 2025",
        bullets: [
          "Contribuí a consultoría en gestión de ciudades inteligentes y alumbrado público para Envigado.",
          "Lideré conversaciones de estrategia técnica y representé a la empresa en FIWARE Global Summit 2024."
        ]
      },
      {
        role: "Auxiliar docente universitario - Electrónica / Señales",
        period: "2022 - 2023",
        bullets: [
          "Apoyé a estudiantes en prácticas de oscilaciones, electrónica analógica y electrónica digital.",
          "Guié construcción de prototipos, integración de componentes y validación funcional."
        ]
      }
    ],
    notes: [
      "Este portafolio está orientado intencionalmente a ingeniería de prototipos, mecatrónica y sistemas embebidos, no a desarrollo backend general.",
      "Los archivos nativos sensibles no se publican por defecto. Se muestran PDFs simplificados y visuales seleccionados; paquetes técnicos más profundos pueden compartirse bajo solicitud."
    ]
  }
};
