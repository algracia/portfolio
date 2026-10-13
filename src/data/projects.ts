import type { Language } from "./site";

export type ProjectImage = { src: string; alt: Record<Language, string>; caption?: Record<Language, string>; portrait?: boolean };
export type ProjectVideo = { src: string; poster: string; label: Record<Language, string>; portrait?: boolean };
export type ProjectLink = { label: Record<Language, string>; href: string };
export type Project = {
  slug: string;
  number: string;
  total: string;
  title: string;
  period: string;
  category: string;
  summary: string;
  contribution: string;
  scope: string[];
  stack: string[];
  cover?: { src: string; alt: string };
  gallery?: { src: string; alt: string; caption?: string; portrait?: boolean }[];
  videos?: { src: string; poster: string; label: string; portrait?: boolean }[];
  resources?: { label: string; href: string }[];
  resourceHeading?: string;
  secondary?: boolean;
};

type ProjectCopy = Pick<Project, "title" | "period" | "category" | "summary" | "contribution" | "scope" | "stack">;
type ProjectId = "tenty" | "watchman" | "chessproject" | "cad-assemblies";

const media: Record<ProjectId, {
  cover?: ProjectImage;
  gallery?: ProjectImage[];
  videos?: ProjectVideo[];
  resources?: ProjectLink[];
  resourceHeading?: Record<Language, string>;
  secondary?: boolean;
}> = {
  tenty: {
    cover: { src: "/assets/tenty-rugged-dashboard.png", alt: { en: "Rugged industrial smartphone showing the Android safety dashboard", es: "Teléfono industrial robusto con el panel de seguridad de la aplicación Android" } },
    gallery: [
      { src: "/assets/tenty-face.png", alt: { en: "Android app Face ID sign-in screen", es: "Pantalla de inicio de sesión con Face ID en la app Android" }, caption: { en: "Face ID sign-in", es: "Inicio de sesión con Face ID" }, portrait: true },
      { src: "/assets/tenty-active.png", alt: { en: "Android app active shift screen with device status and SOS control", es: "Pantalla de turno activo con estado del dispositivo y control SOS" }, caption: { en: "Active shift and device status", es: "Turno activo y estado del dispositivo" }, portrait: true },
      { src: "/assets/tenty-zone.png", alt: { en: "Android app map showing a device location and risk zone", es: "Mapa de la app Android con ubicación del dispositivo y zona de riesgo" }, caption: { en: "Location and risk zone", es: "Ubicación y zona de riesgo" }, portrait: true },
      { src: "/assets/tenty-broadcast.png", alt: { en: "Android app operational broadcast with confirmation action", es: "Comunicado operativo en la app Android con acción de confirmación" }, caption: { en: "Operational broadcast", es: "Comunicado operativo" }, portrait: true },
      { src: "/assets/tenty-help.png", alt: { en: "Android app alert status showing help is on the way", es: "Estado de alerta en la app Android que indica que la ayuda está en camino" }, caption: { en: "Assistance status", es: "Estado de asistencia" }, portrait: true }
    ],
    resources: [{ label: { en: "Visit tenty.ai", es: "Visitar tenty.ai" }, href: "https://tenty.ai/" }],
    resourceHeading: { en: "Official website", es: "Sitio web oficial" }
  },
  watchman: {
    cover: { src: "/assets/watchman-modular-concept.png", alt: { en: "Concept rendering of a modular Edge AI PTZ camera system", es: "Ilustración conceptual de un sistema modular de cámara PTZ con Edge AI" } },
    gallery: [
      { src: "/assets/watchman-modular-concept.png", alt: { en: "Concept rendering of a modular PTZ camera with a separate compute and power enclosure", es: "Ilustración conceptual de una cámara PTZ modular con gabinete independiente para cómputo y alimentación" }, caption: { en: "Modular Edge AI camera · conceptual design", es: "Cámara modular Edge AI · diseño conceptual" } },
      { src: "/assets/watchman-pole-concept.png", alt: { en: "Concept rendering of a pole-mounted PTZ camera and power enclosure", es: "Ilustración conceptual de una cámara PTZ montada en poste con gabinete de alimentación" }, caption: { en: "Pole-mounted PTZ · conceptual design", es: "Cámara PTZ en poste · diseño conceptual" } },
      { src: "/assets/watchman-vehicle-concept.png", alt: { en: "Concept rendering of a vehicle-mounted PTZ camera and equipment module", es: "Ilustración conceptual de una cámara PTZ montada en vehículo con módulo de equipos" }, caption: { en: "Vehicle-mounted PTZ · conceptual design", es: "Cámara PTZ en vehículo · diseño conceptual" } }
    ]
  },
  chessproject: {
    cover: { src: "/assets/chessproject-prototype.jpeg", alt: { en: "Autonomous chessboard prototype with visible motion hardware and electronics", es: "Prototipo de tablero de ajedrez autónomo con mecanismo de movimiento y electrónica visibles" } },
    videos: [
      { src: "/assets/chessproject-demo-1.mp4", poster: "/assets/chessproject-demo-1.jpg", label: { en: "Physical prototype · motion demo", es: "Prototipo físico · demostración de movimiento" }, portrait: true },
      { src: "/assets/chessproject-demo-2.mp4", poster: "/assets/chessproject-demo-2.jpg", label: { en: "ChessBot and physical board · integration demo", es: "ChessBot y tablero físico · demostración de integración" }, portrait: true },
      { src: "/assets/cad-chess-model.mp4", poster: "/assets/cad-chess-model.jpg", label: { en: "Chessboard · mechanical CAD model", es: "Tablero de ajedrez · modelo CAD mecánico" } }
    ],
    resources: [{ label: { en: "Technical overview · PDF", es: "Resumen técnico · PDF" }, href: "/docs/ChessProject.pdf" }]
  },
  "cad-assemblies": {
    cover: { src: "/assets/cad-dispenser-assembly.jpg", alt: { en: "Wafer dispenser assembly drawing", es: "Plano de ensamble del dispensador de barquillos" } },
    gallery: [
      { src: "/assets/cad-dispenser-assembly.jpg", alt: { en: "Wafer dispenser assembly drawing", es: "Plano de ensamble del dispensador de barquillos" }, caption: { en: "Wafer dispenser · assembly drawing", es: "Dispensador de barquillos · plano de ensamble" } },
      { src: "/assets/cad-tank-assembly.jpg", alt: { en: "Tracked tank assembly drawing", es: "Plano de ensamble del tanque de orugas" }, caption: { en: "Tracked tank · assembly drawing", es: "Tanque de orugas · plano de ensamble" } }
    ],
    videos: [
      { src: "/assets/cad-dispenser-exploded.mp4", poster: "/assets/cad-dispenser-exploded.jpg", label: { en: "Wafer dispenser · exploded assembly", es: "Dispensador de barquillos · ensamble explosionado" } },
      { src: "/assets/cad-tank-complete.mp4", poster: "/assets/cad-tank-complete.jpg", label: { en: "Tracked tank · complete assembly", es: "Tanque de orugas · ensamble completo" } },
      { src: "/assets/cad-tank-trigger.mp4", poster: "/assets/cad-tank-trigger.jpg", label: { en: "Tracked tank · trigger mechanism subassembly", es: "Tanque de orugas · subensamble del mecanismo de disparo" } },
      { src: "/assets/cad-tank-traction.mp4", poster: "/assets/cad-tank-traction.jpg", label: { en: "Tracked tank · traction mechanism subassembly", es: "Tanque de orugas · subensamble del mecanismo de tracción" } },
      { src: "/assets/cad-chess-model.mp4", poster: "/assets/cad-chess-model.jpg", label: { en: "Chessboard · mechanical CAD model", es: "Tablero de ajedrez · modelo CAD mecánico" } }
    ],
    secondary: true
  }
};

const copy: Record<Language, Record<ProjectId, ProjectCopy>> = {
  en: {
    tenty: {
      title: "Rugged Android Industrial Safety System", period: "2026 – Present", category: "Industrial safety / Android",
      summary: "A workplace-safety ecosystem built around rugged Android devices and dependable operation in the field.",
      contribution: "I developed the Android application and its integration with Ulefone rugged hardware, connecting device sensors, cameras and physical controls to safety workflows.",
      scope: ["Device-side telemetry, geofencing and local storage for offline operation.", "Camera and sensor integration with local computer vision and Edge AI.", "Reliability work at the boundary between physical devices, software and field conditions."],
      stack: ["Android / Kotlin", "Ulefone rugged devices", "Sensors & cameras", "Telemetry", "Computer vision"]
    },
    watchman: {
      title: "Edge AI PTZ Camera System", period: "2026 – Present", category: "Edge AI / Physical AI",
      summary: "An intelligent monitoring system that interprets operator requests and controls a physical PTZ camera.",
      contribution: "I developed an Edge AI / Physical AI camera system capable of interpreting operator requests and controlling a physical PTZ camera through a local AI agent.",
      scope: ["Integrated Gemma 4, PTZ camera control and computer vision.", "Connected WhatsApp-based operator interaction to intelligent remote monitoring."],
      stack: ["Edge AI", "Gemma 4", "PTZ camera", "Computer vision", "WhatsApp"]
    },
    chessproject: {
      title: "ChessProject — Autonomous Chessboard", period: "2023 – 2024", category: "Embedded systems / Mechatronics",
      summary: "An electromechanical chessboard that executes moves through XY motion, stepper motors and a servo-lift electromagnet.",
      contribution: "I developed STM32/HAL firmware in C and integrated the motion hardware, interconnect PCB and Python/Flask software.",
      scope: ["Timers generate stepper motion; PWM drives the servo; endstops support homing and travel limits.", "USART2 links the motion controller to a Python/Flask application using Stockfish and python-chess.", "The prototype joins mechanical motion, PCB interconnects, power and software into a working physical board."],
      stack: ["STM32 / HAL", "C", "Timers / PWM", "Steppers & servo", "Endstops", "USART2", "Python / Flask", "Stockfish / python-chess"]
    },
    "cad-assemblies": {
      title: "Mechanical CAD Assemblies", period: "Selected CAD work", category: "Mechanical CAD / Documentation",
      summary: "A wafer dispenser and a tracked tank, documented through assembly drawings and CAD videos.",
      contribution: "I modeled the mechanical assemblies and prepared views that communicate part relationships, construction and service access.",
      scope: ["The dispenser drawing combines an exploded assembly, assembled view and dimensional details.", "The tracked tank drawing documents its assembly and mechanical layout; videos show the complete model and selected subassemblies."],
      stack: ["Inventor", "Fusion 360", "Assemblies", "Technical drawings"]
    }
  },
  es: {
    tenty: {
      title: "Sistema de seguridad industrial en Android robusto", period: "2026 – Actualidad", category: "Seguridad industrial / Android",
      summary: "Ecosistema de seguridad laboral basado en dispositivos Android robustos y operación confiable en campo.",
      contribution: "Desarrollé la aplicación Android y su integración con hardware robusto Ulefone, conectando sensores, cámaras y controles físicos con flujos de seguridad.",
      scope: ["Telemetría, geofencing y almacenamiento local para operación sin conexión.", "Integración de cámaras y sensores con visión por computador local y Edge AI.", "Trabajo de confiabilidad en la unión de dispositivos físicos, software y condiciones de campo."],
      stack: ["Android / Kotlin", "Dispositivos robustos Ulefone", "Sensores y cámaras", "Telemetría", "Visión por computador"]
    },
    watchman: {
      title: "Sistema de cámara PTZ con Edge AI", period: "2026 – Actualidad", category: "Edge AI / IA física",
      summary: "Sistema de monitoreo inteligente que interpreta solicitudes del operador y controla una cámara PTZ física.",
      contribution: "Desarrollé un sistema de cámara Edge AI / IA física capaz de interpretar solicitudes del operador y controlar una cámara PTZ mediante un agente de IA local.",
      scope: ["Integré Gemma 4, control de cámara PTZ y visión por computador.", "Conecté la interacción del operador por WhatsApp con el monitoreo remoto inteligente."],
      stack: ["Edge AI", "Gemma 4", "Cámara PTZ", "Visión por computador", "WhatsApp"]
    },
    chessproject: {
      title: "ChessProject — Tablero de ajedrez autónomo", period: "2023 – 2024", category: "Sistemas embebidos / Mecatrónica",
      summary: "Tablero electromecánico que ejecuta movimientos con un sistema XY, motores paso a paso y electroimán elevado por servo.",
      contribution: "Desarrollé firmware en C sobre STM32/HAL e integré el mecanismo de movimiento, la PCB de interconexión y el software Python/Flask.",
      scope: ["Los timers generan el movimiento de steppers; PWM controla el servo; endstops permiten homing y límites de recorrido.", "USART2 comunica el controlador con una aplicación Python/Flask que usa Stockfish y python-chess.", "El prototipo integra movimiento mecánico, PCB, alimentación y software en un tablero físico funcional."],
      stack: ["STM32 / HAL", "C", "Timers / PWM", "Steppers y servo", "Endstops", "USART2", "Python / Flask", "Stockfish / python-chess"]
    },
    "cad-assemblies": {
      title: "Ensambles CAD mecánicos", period: "Trabajos CAD", category: "CAD mecánico / Documentación",
      summary: "Un dispensador de barquillos y un tanque de orugas, documentados mediante planos de ensamble y videos CAD.",
      contribution: "Modelé los ensambles mecánicos y preparé vistas que comunican relaciones entre piezas, construcción y acceso para mantenimiento.",
      scope: ["El plano del dispensador combina despiece, vista ensamblada y detalles dimensionales.", "El plano del tanque documenta su ensamble y distribución mecánica; los videos muestran el modelo completo y algunos subensambles."],
      stack: ["Inventor", "Fusion 360", "Ensambles", "Planos técnicos"]
    }
  }
};

const order: ProjectId[] = ["tenty", "watchman", "chessproject", "cad-assemblies"];

function localizeLink(link: ProjectLink, language: Language) {
  return { label: link.label[language], href: link.href };
}

function buildProjects(language: Language): Project[] {
  return order.map((slug, index) => {
    const assets = media[slug];
    return {
      slug,
      number: String(index + 1).padStart(2, "0"),
      total: String(order.length).padStart(2, "0"),
      ...copy[language][slug],
      cover: assets.cover && { src: assets.cover.src, alt: assets.cover.alt[language] },
      gallery: assets.gallery?.map((image) => ({ src: image.src, alt: image.alt[language], caption: image.caption?.[language], portrait: image.portrait })),
      videos: assets.videos?.map((video) => ({ src: video.src, poster: video.poster, label: video.label[language], portrait: video.portrait })),
      resources: assets.resources?.map((link) => localizeLink(link, language)),
      resourceHeading: assets.resourceHeading?.[language],
      secondary: assets.secondary
    };
  });
}

export const projects: Record<Language, Project[]> = { en: buildProjects("en"), es: buildProjects("es") };
