// Shared project data for portfolio listing and detail pages.
// Add/edit projects here.

import aquaforce from "@/assets/projects/aquaforce.jpg";
import aquaforce2 from "@/assets/projects/aquaforce-2.jpg";
import aquaforce3 from "@/assets/projects/aquaforce-3.jpg";
import durma from "@/assets/projects/durma.jpg";
import durma2 from "@/assets/projects/durma-2.jpg";
import durma3 from "@/assets/projects/durma-3.jpg";
import durma4 from "@/assets/projects/durma-4.jpg";
import logistica from "@/assets/projects/logistica.jpg";
import logistica1 from "@/assets/projects/logistica-1.jpg";
import logistica3 from "@/assets/projects/logistica-3.jpg";
import logistica4 from "@/assets/projects/logistica-4.jpg";
import logistica5 from "@/assets/projects/logistica-5.jpg";
import cuadernillos from "@/assets/projects/cuadernillos.jpg";
import cuadernillos2 from "@/assets/projects/cuadernillos-2.jpg";
import cuadernillos3 from "@/assets/projects/cuadernillos-3.jpg";
import cuadernillos4 from "@/assets/projects/cuadernillos-4.jpg";
import cuadernillos5 from "@/assets/projects/cuadernillos-5.jpg";
import globalFrozen from "@/assets/projects/global-frozen.jpg";
import globalFrozen1 from "@/assets/projects/global-frozen-1.jpg";
import globalFrozen3 from "@/assets/projects/global-frozen-3.jpg";
import globalFrozen4 from "@/assets/projects/global-frozen-4.jpg";
import globalFrozen5 from "@/assets/projects/global-frozen-5.jpg";
import globalFrozen6 from "@/assets/projects/global-frozen-6.jpg";
import sheriffWeb from "@/assets/projects/sheriff-web.jpg";
import sheriffWeb2 from "@/assets/projects/sheriff-web-2.jpg";
import sheriffWeb3 from "@/assets/projects/sheriff-web-3.jpg";
import notificaciones from "@/assets/projects/notificaciones.jpg";
import formularios from "@/assets/projects/formularios.jpg";
import compliance from "@/assets/projects/compliance.jpg";
import cati from "@/assets/projects/cati.jpg";
import sheriffSite from "@/assets/projects/sheriff-site.jpg";
import mottai from "@/assets/projects/mottai.jpg";

export type Project = {
  slug: string;
  category: "grafico" | "ux-ui";
  t: string;
  y: string;
  c: string;
  d: string;
  cover: string;
  gallery: string[];
  // Long-form sections
  about: string[];
  role?: string;
  tools?: string[];
  client?: string;
};

export const projects: Project[] = [
  // ── Diseño Gráfico ───────────────────────────────────────────
  {
    slug: "aquaforce-stand-up-paddle",
    category: "grafico",
    t: "Empaque Stand Up Paddle",
    y: "2024",
    c: "Packaging · AquaForce",
    d: "Empaque para tablas de Stand Up Paddle de AquaForce. La ilustración principal protagoniza el diseño y transmite el dinamismo del deporte.",
    cover: aquaforce,
    gallery: [aquaforce, aquaforce2, aquaforce3],
    client: "AquaForce — Better Commerce",
    role: "Brand & Packaging Designer",
    tools: ["Illustrator", "Photoshop"],
    about: [
      "Se diseñó un empaque para tablas de Stand Up Paddle de la marca AquaForce. Dado que el producto incluye distintos modelos, la propuesta debía representar la esencia del deporte y no un modelo de tabla específica.",
      "Este proyecto se desarrolló con total libertad creativa, lo que permitió explorar distintas ideas desde cero y construir una propuesta completamente original. El diseño del empaque fue pensado para destacar visualmente en el punto de venta, transmitiendo dinamismo y energía desde el primer vistazo.",
      "Se priorizó la ilustración principal como protagonista del diseño, integrándola con la forma del empaque y su disposición horizontal, creando una pieza atractiva y coherente. Se cuidaron los detalles en la tipografía, colores y jerarquía de información, asegurando una lectura clara y una experiencia visual equilibrada.",
    ],
  },
  {
    slug: "durma-sleep-awake",
    category: "grafico",
    t: "Etiquetas Sleep & Awake",
    y: "2024",
    c: "Packaging · Durma",
    d: "Dos etiquetas complementarias para una línea de suplementos que regulan los ciclos de descanso y energía.",
    cover: durma,
    gallery: [durma, durma2, durma3, durma4],
    client: "Durma",
    role: "Packaging Designer",
    tools: ["Illustrator", "Photoshop"],
    about: [
      "Se diseñaron dos etiquetas complementarias para una línea de suplementos orientados a regular los ciclos de descanso y energía: Sleep (para dormir) y Awake (para despertar).",
      "El eje principal del diseño fue el uso del color para representar los momentos del día: tonos cálidos y suaves para el anochecer en Sleep, y colores brillantes y claros para el amanecer en Awake. Cada etiqueta fue pensada para comunicar su función de forma intuitiva, manteniendo una identidad visual coherente entre ambas pero diferenciada en su propósito.",
      "La composición y jerarquía prioriza el nombre del producto, el logotipo de la marca, y luego uno de los atributos más atractivos para el consumidor: sin azúcar añadida.",
    ],
  },
  {
    slug: "guias-logistica",
    category: "grafico",
    t: "Guías de Buenas Prácticas Logísticas",
    y: "2024",
    c: "Editorial · MTT + Conecta Logística",
    d: "Tres guías diseñadas para mejorar la gestión logística comunal, comunidades logísticas y comercio exterior.",
    cover: logistica,
    gallery: [logistica, logistica1, logistica3, logistica4, logistica5],
    client: "MTT · Conecta Logística · CORFO",
    role: "Editorial Designer",
    tools: ["InDesign", "Illustrator"],
    about: [
      "Se diseñaron tres guías de buenas prácticas como parte de un trabajo colaborativo entre la Organización de Logística Urbana y el Ministerio de Transportes y Telecomunicaciones (MTT), orientadas a mejorar la gestión logística a nivel comunal y nacional.",
      "Cada guía aborda un enfoque específico: recomendaciones de logística urbana para municipios, buenas prácticas para la conformación de comunidades logísticas comunales, y una guía enfocada en comercio exterior (COMEX).",
      "Se trabajó con una línea gráfica moderna y coherente entre las tres guías, adaptando colores, estructuras y recursos visuales según el público objetivo de cada una, manteniendo siempre una unidad visual institucional. Estas guías fueron impresas y entregadas a autoridades de los Municipios.",
    ],
  },
  {
    slug: "cuadernillos-socioemocional",
    category: "grafico",
    t: "Cuadernillos de Educación Socioemocional",
    y: "2023",
    c: "Editorial educativo · UDD",
    d: "Cinco cuadernillos para estudiantes de 3° a 8° básico para trabajar habilidades socioemocionales en el aula.",
    cover: cuadernillos,
    gallery: [cuadernillos, cuadernillos2, cuadernillos3, cuadernillos4, cuadernillos5],
    client: "Universidad del Desarrollo",
    role: "Editorial & Illustration Designer",
    tools: ["InDesign", "Illustrator"],
    about: [
      "Se diseñaron 5 cuadernillos educativos dirigidos a estudiantes de 3° a 8° básico para trabajar habilidades socioemocionales en el entorno escolar. El material busca facilitar la participación activa de los niños y apoyar a docentes en la enseñanza de emociones, empatía, autoconocimiento y resolución de conflictos.",
      "El diseño se adaptó a cada grupo etario, utilizando ilustraciones lúdicas, colores amigables y un lenguaje visual cercano que motivara la participación de los niños y niñas.",
      "La estructura fue pensada para facilitar tanto el trabajo individual como grupal, apoyando a docentes en la implementación de actividades y reflexiones en el aula. Cada pieza busca promover el desarrollo de la empatía, el autoconocimiento y la gestión emocional a través de recursos visuales accesibles, claros y pedagógicos.",
    ],
  },
  {
    slug: "global-frozen-etiquetas",
    category: "grafico",
    t: "Etiquetas Global Frozen",
    y: "2024",
    c: "Packaging · Global Frozen",
    d: "Línea de etiquetas para productos congelados: empanadas, arrollados, gyozas y salsa de soya.",
    cover: globalFrozen,
    gallery: [globalFrozen, globalFrozen1, globalFrozen3, globalFrozen4, globalFrozen5, globalFrozen6],
    client: "Global Frozen",
    role: "Packaging Designer",
    tools: ["Illustrator", "Photoshop", "IA generativa"],
    about: [
      "Se desarrolló una línea de etiquetas para diversos productos congelados de la marca Global Frozen, incluyendo empanadas, arrollados primavera, gyozas, salsa de soya, entre otros.",
      "El objetivo fue crear una identidad visual coherente para toda la línea, destacando la calidad del producto y facilitando su reconocimiento en el punto de venta. Cada etiqueta fue diseñada considerando las particularidades del producto, manteniendo una estructura clara y jerarquía visual que permitiera comunicar de forma efectiva los ingredientes, sellos y modo de preparación.",
      "Uno de los desafíos fue crear con IA las imágenes de los productos, ya que no existía registro ni imágenes de calidad de estos. Además, fue fundamental elegir cuidadosamente la paleta de colores para que cada producto tuviera un tono distintivo, pero que al mismo tiempo funcionaran armónicamente como una línea unificada.",
    ],
  },
  {
    slug: "sheriff-web-grafica",
    category: "grafico",
    t: "Página Web Sheriff",
    y: "2025",
    c: "Web · TheSheriff.cl",
    d: "Rediseño completo del sitio web de Sheriff con foco en navegación, identidad visual y comunicación del valor.",
    cover: sheriffWeb,
    gallery: [sheriffWeb, sheriffWeb2, sheriffWeb3],
    client: "The Sheriff",
    role: "Lead Designer",
    tools: ["Figma", "Webflow", "LottieFiles"],
    about: [
      "Lideré el rediseño completo del sitio web de Sheriff, con el objetivo de mejorar la experiencia de navegación, reforzar la identidad visual de la marca y comunicar de forma clara el valor de la plataforma.",
      "El foco estuvo en construir una navegación clara y fluida, destacando los principales servicios y diferenciadores de Sheriff para facilitar la comprensión del producto.",
      "Trabajé el rediseño visual alineado con la identidad de marca, reforzando el concepto del “Lejano Oeste digital” y usando ilustraciones, tipografías y colores distintivos. Utilicé Webflow para desarrollar el sitio, lo que permitió una implementación ágil, responsiva y editable por el equipo, y LottieFiles para incorporar animaciones livianas y escalables en la interfaz.",
    ],
  },

  // ── UX / UI ──────────────────────────────────────────────────
  {
    slug: "sheriff-notificaciones",
    category: "ux-ui",
    t: "Sistema de Notificaciones Sheriff",
    y: "2025",
    c: "Producto digital · Sheriff",
    d: "Rediseño del sistema de notificaciones, optimizando estructura y presentación de la información.",
    cover: notificaciones,
    gallery: [notificaciones],
    client: "The Sheriff",
    role: "UX/UI Designer",
    tools: ["Figma", "Notion"],
    about: [
      "Se rediseñó el sistema de notificaciones de Sheriff, optimizando su estructura y presentación de la información. Las notificaciones anteriores presentaban datos limitados y una disposición poco clara.",
      "El nuevo diseño incorpora una tabla adaptable para web y dispositivos móviles, que organiza la información clave de forma estructurada, priorizando la legibilidad, la jerarquía visual y la experiencia del usuario.",
    ],
  },
  {
    slug: "sheriff-formularios",
    category: "ux-ui",
    t: "Creador de Formularios Sheriff",
    y: "2025",
    c: "Plataforma · Sheriff",
    d: "Funcionalidad para crear, personalizar y distribuir formularios digitales dentro de Sheriff.",
    cover: formularios,
    gallery: [formularios],
    client: "The Sheriff",
    role: "UX/UI Designer",
    tools: ["Figma", "Notion", "LottieFiles", "Hotjar"],
    about: [
      "Se desarrolló una nueva funcionalidad dentro de la plataforma Sheriff que habilita a los usuarios para crear, personalizar y distribuir formularios digitales de forma intuitiva y eficiente.",
      "El módulo fue diseñado con enfoque en usabilidad, flexibilidad y escalabilidad, permitiendo la configuración dinámica de campos, validaciones y flujos de envío, optimizando así la gestión de datos dentro del ecosistema de Sheriff.",
    ],
  },
  {
    slug: "sheriff-compliance",
    category: "ux-ui",
    t: "Vista Compliance Sheriff",
    y: "2025",
    c: "Producto digital · Sheriff",
    d: "Rediseño de la funcionalidad Compliance con una interfaz más limpia y eficiente.",
    cover: compliance,
    gallery: [compliance],
    client: "The Sheriff",
    role: "UX/UI Designer",
    tools: ["Figma", "Notion", "LottieFiles", "Hotjar"],
    about: [
      "Se rediseñó la funcionalidad de Compliance de Sheriff con el objetivo de optimizar la experiencia de usuario mediante una interfaz más limpia, clara y visualmente coherente.",
      "El nuevo diseño prioriza la usabilidad y la eficiencia, reduciendo fricciones en el flujo de trabajo y permitiendo que las tareas se ejecuten de forma más ágil e intuitiva.",
    ],
  },
  {
    slug: "plataforma-cati",
    category: "ux-ui",
    t: "Plataforma CATI",
    y: "2025",
    c: "Ministerio de Transportes · Consultora TIMIX",
    d: "Diseño UX/UI de la plataforma CATI del Ministerio de Transportes y Telecomunicaciones.",
    cover: cati,
    gallery: [cati],
    client: "Ministerio de Transportes y Telecomunicaciones",
    role: "Lead UX/UI Designer",
    tools: ["Figma", "Notion", "Hotjar"],
    about: [
      "Diseño UX/UI de la Plataforma CATI (Centro Automatizado de Tratamiento de Infracciones) del Ministerio de Transportes y Telecomunicaciones.",
      "El proyecto contempló la definición de flujos de usuario, arquitectura de información y prototipado, y validación de interacciones mediante pruebas de usabilidad con los distintos perfiles del ministerio.",
    ],
  },
  {
    slug: "thesheriff-cl",
    category: "ux-ui",
    t: "thesheriff.cl",
    y: "2025",
    c: "Sitio web · Sheriff",
    d: "Rediseño integral del sitio web de Sheriff: arquitectura, interfaz y flujos de navegación.",
    cover: sheriffSite,
    gallery: [sheriffSite],
    client: "The Sheriff",
    role: "Lead UX/UI Designer",
    tools: ["Webflow", "Figma", "LottieFiles"],
    about: [
      "Lideré el rediseño integral del sitio web de Sheriff, abordando tanto la arquitectura de información como la interfaz visual y los flujos de navegación.",
      "El proyecto tuvo como objetivo optimizar la experiencia del usuario, fortalecer la identidad de marca y mejorar la comunicación del valor y las capacidades de la plataforma a través de una experiencia coherente, escalable y orientada a la conversión.",
      "Puedes visitarla en thesheriff.cl.",
    ],
  },
  {
    slug: "mottai",
    category: "ux-ui",
    t: "Mottai",
    y: "2026",
    c: "StartUp Fintech · HORECA",
    d: "Diseño de producto, branding y experiencia de usuario de Mottai, plataforma de finanzas para HORECA.",
    cover: mottai,
    gallery: [mottai],
    client: "Mottai",
    role: "Product Designer · Branding",
    tools: ["Figma", "UX Pilot"],
    about: [
      "Lideré el diseño de producto, branding y la experiencia de usuario de Mottai, plataforma de finanzas para Horeca.",
      "El proyecto busca transformar la complejidad de la facturación electrónica en una herramienta de inteligencia financiera que optimiza la rentabilidad y detecta oportunidades de ahorro en tiempo real para el sector HORECA.",
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const byCategory = (cat: Project["category"]) => projects.filter((p) => p.category === cat);
