import { projects, type Project } from "./projects";

export type Language = "en" | "es";
export type Experience = { role: string; company: string; period: string; location: string; work: string[] };
export type SiteTranslation = {
  nav: { work: string; additional: string; experience: string; stack: string; education: string; contact: string; menu: string; close: string; language: string };
  actions: { explore: string; caseStudy: string; back: string; gallery: string; cv: string; email: string; resources: string; imagePending: string; imagePendingDetail: string; missing: string; missingText: string };
  hero: { role: [string, string, string]; introduction: string; focus: string[]; location: string; index: string };
  headings: { work: string; experience: string; stack: string; additional: string; education: string; languages: string; contact: string; contribution: string; approach: string; technical: string; images: string };
  workIntro: string;
  experience: Experience[];
  capabilities: { label: string; detail: string }[];
  additionalIntro: string;
  education: { degree: string; institution: string; detail: string; second: string };
  languages: string[];
  contact: { intro: string; availability: string };
  projects: Project[];
};

export const profile = {
  name: "Alberto Gracia Martelo",
  email: "agraciamartelo@gmail.com",
  github: "https://github.com/algracia",
  linkedin: "https://www.linkedin.com/in/alberto-gracia/"
};

// Set available to true when each current master CV has been placed at its path.
export const cvDocuments: Record<Language, { path: string; available: boolean }> = {
  en: { path: "/docs/Alberto_Gracia_CV_EN.pdf", available: false },
  es: { path: "/docs/Alberto_Gracia_CV_ES.pdf", available: false }
};

export const translations: Record<Language, SiteTranslation> = {
  en: {
    nav: { work: "Projects", additional: "CAD", experience: "Experience", stack: "Technical stack", education: "Education", contact: "Contact", menu: "Menu", close: "Close menu", language: "Language" },
    actions: { explore: "Explore selected projects", caseStudy: "View case study", back: "Back to projects", gallery: "Go to gallery", cv: "Download CV", email: "Email Alberto", resources: "Technical details", imagePending: "Project imagery forthcoming", imagePendingDetail: "Documented work · images to follow", missing: "Project not found", missingText: "This project is not in the portfolio." },
    hero: {
      role: ["IoT & Embedded Systems", "HW/SW Integration", "Engineering Physicist"],
      introduction: "I build systems that connect sensors, firmware, electronics and software to physical hardware. My work spans industrial safety, intelligent devices and electromechanical prototypes, with an emphasis on reliable integration and real-world validation.",
      focus: ["IoT systems, sensing, telemetry and Edge AI", "Embedded firmware, PCB/CAD and electromechanical prototyping", "HW/SW integration for industrial and intelligent systems"],
      location: "Medellín, Colombia",
      index: "Engineering portfolio / 2026"
    },
    headings: { work: "Selected projects", experience: "Professional experience", stack: "Technical stack", additional: "CAD", education: "Education", languages: "Languages", contact: "Let's build something useful.", contribution: "My contribution", approach: "Engineering scope", technical: "Technical stack", images: "Gallery" },
    workIntro: "A selection across device engineering, physical AI and electromechanical control.",
    experience: [
      { role: "IoT Systems Engineer / R&D Engineer", company: "ProteckTech", period: "Mar 2026 – Present", location: "Medellín, Colombia", work: [
        "Developed the Android application and device integrations for Tenty, combining rugged-device sensors, cameras, hardware controls, telemetry, geofencing, offline operation and local computer vision.",
        "Built Proteck MDM for Android Enterprise management, provisioning and reliable remote operation of industrial devices.",
        "Developed on-device computer vision, biometric inference and local AI agents for physical PTZ camera control; researched wearable industrial camera architectures, video transmission, power and integration."
      ] },
      { role: "Freelance Engineer · Embedded Systems & Prototyping", company: "Independent", period: "Aug 2024 – Present", location: "Remote", work: [
        "Audited a wearable TAG & HUB concept, assessing hardware, documentation, test gaps and technical paths toward a reliable MVP.",
        "Designed, assembled and initially validated a high-current ZVS inverter PCB using laboratory instrumentation."
      ] },
      { role: "Software Engineer / Technical Consultant · IoT & Smart Cities", company: "TYSA", period: "Oct 2024 – May 2025", location: "Medellín, Colombia", work: [
        "Consulted on public-lighting management and Smart City modeling for Enviaseo in Envigado.",
        "Led technology strategy discussions and represented TYSA at FIWARE Global Summit 2024."
      ] },
      { role: "Academic Teaching Assistant · Electronics & Signals", company: "Universidad Nacional de Colombia", period: "Jan 2022 – Dec 2023", location: "Medellín, Colombia", work: [
        "Supported analog and digital electronics laboratories and oscillations coursework; guided prototype construction, component integration and functional checks."
      ] }
    ],
    capabilities: [
      { label: "MCUs & firmware", detail: "STM32, ESP32 · C/C++, STM32/HAL · timers, PWM" },
      { label: "Interfaces & IoT", detail: "UART/USART, SPI, I²C · MQTT, HTTP/REST, TCP/IP · sensors, telemetry" },
      { label: "Edge & mobile", detail: "Android/Kotlin · computer vision · on-device AI" },
      { label: "Electronics & PCB", detail: "Eagle/Fusion 360 · schematics, routing, DRC · power polygons, via stitching" },
      { label: "Power & simulation", detail: "Resonant ZVS inverter, LC tank, high-current layout · LTspice transient analysis" },
      { label: "Mechanical CAD", detail: "Inventor, Fusion 360 · assemblies and technical drawings" },
      { label: "Bring-up & tooling", detail: "Oscilloscope, multimeter, bench supply, logic analyzer, sensors, JTAG/SWD · Linux, Git, Codex, Claude" }
    ],
    additionalIntro: "Mechanical CAD remains part of the build process: assemblies, drawings and hardware documentation for physical prototypes.",
    education: { degree: "BSc, Engineering Physics", institution: "Universidad Nacional de Colombia", detail: "Completed Apr 2024 · Optoelectronics research using COMSOL · Teaching assistant for two years", second: "PCB Design & Fabrication · SENA, 2017" },
    languages: ["Spanish · Native", "English · C1 (TOEFL iBT)", "German · B1"],
    contact: { intro: "Available for selected part-time, contract and R&D collaborations in connected and physical systems.", availability: "Based in Medellín · Working internationally" },
    projects: projects.en
  },
  es: {
    nav: { work: "Proyectos", additional: "CAD", experience: "Experiencia", stack: "Stack técnico", education: "Formación", contact: "Contacto", menu: "Menú", close: "Cerrar menú", language: "Idioma" },
    actions: { explore: "Ver proyectos seleccionados", caseStudy: "Ver proyecto", back: "Volver a proyectos", gallery: "Ir a la galería", cv: "Descargar CV", email: "Escribir a Alberto", resources: "Detalles técnicos", imagePending: "Imágenes del proyecto próximamente", imagePendingDetail: "Trabajo documentado · imágenes pendientes", missing: "Proyecto no encontrado", missingText: "Este proyecto no está en el portafolio." },
    hero: {
      role: ["IoT y sistemas embebidos", "Integración HW/SW", "Ingeniero Físico"],
      introduction: "Desarrollo sistemas que conectan sensores, firmware, electrónica y software con hardware físico. Mi trabajo abarca seguridad industrial, dispositivos inteligentes y prototipos electromecánicos, con énfasis en integración confiable y validación en condiciones reales.",
      focus: ["Sistemas IoT, sensado, telemetría y Edge AI", "Firmware embebido, PCB/CAD y prototipado electromecánico", "Integración HW/SW para sistemas industriales e inteligentes"],
      location: "Medellín, Colombia",
      index: "Portafolio de ingeniería / 2026"
    },
    headings: { work: "Proyectos seleccionados", experience: "Experiencia profesional", stack: "Stack técnico", additional: "Otros trabajos", education: "Formación", languages: "Idiomas", contact: "Construyamos algo útil.", contribution: "Mi contribución", approach: "Alcance técnico", technical: "Tecnologías", images: "Galería" },
    workIntro: "Una selección de ingeniería de dispositivos, IA física y control electromecánico.",
    experience: [
      { role: "Ingeniero de Sistemas IoT / Ingeniero de I+D", company: "ProteckTech", period: "Mar 2026 – Actualidad", location: "Medellín, Colombia", work: [
        "Desarrollé la aplicación Android y las integraciones con dispositivos robustos para Tenty: sensores, cámaras, controles físicos, telemetría, geofencing, operación sin conexión y visión por computador local.",
        "Construí Proteck MDM para gestión y aprovisionamiento Android Enterprise y operación remota confiable de dispositivos industriales.",
        "Desarrollé visión por computador, inferencia biométrica y agentes de IA locales para control físico de cámaras PTZ; investigué arquitecturas de cámaras industriales portables, transmisión de video, energía e integración."
      ] },
      { role: "Ingeniero independiente · Sistemas embebidos y prototipado", company: "Independiente", period: "Ago 2024 – Actualidad", location: "Remoto", work: [
        "Audité un concepto wearable TAG & HUB: hardware, documentación, brechas de prueba y rutas técnicas hacia un MVP confiable.",
        "Diseñé, ensamblé y validé inicialmente una PCB de inversor ZVS de alta corriente con instrumentación de laboratorio."
      ] },
      { role: "Ingeniero de Software / Consultor Técnico · IoT y Smart Cities", company: "TYSA", period: "Oct 2024 – May 2025", location: "Medellín, Colombia", work: [
        "Participé en consultoría sobre telegestión de alumbrado público y modelado de ciudad inteligente para Enviaseo en Envigado.",
        "Lideré conversaciones de estrategia tecnológica y representé a TYSA en FIWARE Global Summit 2024."
      ] },
      { role: "Monitor académico · Electrónica y Señales", company: "Universidad Nacional de Colombia", period: "Ene 2022 – Dic 2023", location: "Medellín, Colombia", work: [
        "Apoyé laboratorios de electrónica analógica y digital y cursos de oscilaciones; orienté construcción de prototipos, integración de componentes y verificación funcional."
      ] }
    ],
    capabilities: [
      { label: "MCU y firmware", detail: "STM32, ESP32 · C/C++, STM32/HAL · timers, PWM" },
      { label: "Interfaces e IoT", detail: "UART/USART, SPI, I²C · MQTT, HTTP/REST, TCP/IP · sensores, telemetría" },
      { label: "Edge y móvil", detail: "Android/Kotlin · visión por computador · IA en dispositivo" },
      { label: "Electrónica y PCB", detail: "Eagle/Fusion 360 · esquemáticos, ruteo, DRC · polígonos de potencia, via stitching" },
      { label: "Potencia y simulación", detail: "Inversor resonante ZVS, tanque LC, layout de alta corriente · análisis transitorio en LTspice" },
      { label: "CAD mecánico", detail: "Inventor, Fusion 360 · ensambles y planos técnicos" },
      { label: "Puesta en marcha y herramientas", detail: "Osciloscopio, multímetro, fuente de banco, analizador lógico, sensores, JTAG/SWD · Linux, Git, Codex, Claude" }
    ],
    additionalIntro: "El CAD mecánico sigue siendo parte del proceso: ensambles, planos y documentación de hardware para prototipos físicos.",
    education: { degree: "Ingeniería Física", institution: "Universidad Nacional de Colombia", detail: "Graduado en abr 2024 · Investigación en optoelectrónica con COMSOL · Monitor académico durante dos años", second: "Diseño y Fabricación de Circuitos Impresos · SENA, 2017" },
    languages: ["Español · Nativo", "Inglés · C1 (TOEFL iBT)", "Alemán · B1"],
    contact: { intro: "Disponible para colaboraciones seleccionadas de medio tiempo, por contrato y de I+D en sistemas conectados y físicos.", availability: "En Medellín · Colaboración internacional" },
    projects: projects.es
  }
};
