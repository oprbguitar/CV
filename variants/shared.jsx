// Datos y helpers compartidos entre las 3 variaciones
const CV_DATA = {
  name: "Oscar Pierre",
  surname: "Reyes Briones",
  initials: "OP",
  role: "Ingeniero Industrial",
  taglineBits: ["Gestión pública y privada", "Procesos", "Analítica", "IA aplicada"],
  summary:
    "Más de 15 años convirtiendo procesos e información compleja en decisiones claras, medibles y accionables para el sector público y privado.",
  email: "peru.labs.pe@gmail.com",
  linkedin: "linkedin.com/in/sr-reyes-briones",
  photo: "assets/pierre.png",
  metrics: [
    { k: "15+", v: "años de experiencia" },
    { k: "5+", v: "entornos profesionales" },
    { k: "11+", v: "certificaciones" },
    { k: "C1", v: "inglés profesional" },
  ],
  skills: [
    { name: "Procesos + BPMN 2.0", impact: 95, blurb: "Diagnostico, mapeo y rediseño de flujos" },
    { name: "Power BI + SQL", impact: 90, blurb: "Modelos y tableros para decisión" },
    { name: "IA + automatización", impact: 88, blurb: "Agentes y scripts que liberan horas" },
    { name: "Gestión presupuestal", impact: 92, blurb: "Seguimiento físico y financiero" },
  ],
  flagship: {
    name: "NormaFlow AI",
    tag: "PROYECTO INSIGNIA · 2026",
    pitch: "Asistencia con IA para documentos técnicos del sector público",
    docs: ["TDR", "EETT", "SST", "Bases"],
    url: "https://oprbguitar.github.io/Experiments/",
    bullets: [
      "Redacta y revisa contra norma vigente",
      "Sugiere especificaciones técnicas verificadas",
      "Reduce reprocesos en comités de selección",
    ],
  },
  projects: [
    { name: "ENIA 2026-2030", area: "Estrategia nacional de IA", url: "https://oprbguitar.github.io/ENIA-2026-2030/", featured: true },
    { name: "Demo tienda online", area: "E-commerce demostrativo", url: "https://oprbguitar.github.io/demo_tienda/", featured: true },
    { name: "Contrataciones", area: "Gestión pública", url: "https://oprbguitar.github.io/contrataciones/" },
    { name: "SecData Perú", area: "Analítica & seguridad", url: "https://oprbguitar.github.io/SecData-peru/" },
    { name: "Congreso", area: "Datos legislativos", url: "https://oprbguitar.github.io/Congreso/" },
    { name: "Políticas SST", area: "Seguridad y salud", url: "https://oprbguitar.github.io/SST/" },
    { name: "Almacenes", area: "Logística", url: "https://oprbguitar.github.io/Almacenes/" },
  ],
  tools: ["ChatGPT", "Gemini", "NotebookLM", "Claude", "Grok", "Ollama", "Perplexity", "Codex", "Copilot", "Hugging Face", "Llama", "Docker", "GitHub"],
};

// Iconos SVG inline reutilizables (line, currentColor)
const Icon = ({ name, size = 18, stroke = 1.7, style = {} }) => {
  const paths = {
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>,
    spark: <path d="m12 2 2.7 7.3L22 12l-7.3 2.7L12 22l-2.7-7.3L2 12l7.3-2.7Z" />,
    arrow: <><path d="M5 12h14" /><path d="m13 5 7 7-7 7" /></>,
    arrowUp: <><path d="M7 17 17 7" /><path d="M9 7h8v8" /></>,
    bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />,
    chart: <><path d="M4 20h17" /><path d="M7 17v-6m5 6V7m5 10V4" /></>,
    process: <><rect x="9" y="3" width="6" height="5" rx="1" /><rect x="3" y="16" width="6" height="5" rx="1" /><rect x="15" y="16" width="6" height="5" rx="1" /><path d="M12 8v4m-6 4v-4h12v4" /></>,
    ai: <><circle cx="12" cy="12" r="3" /><path d="M12 5v-3m0 20v-3m7-7h3m-20 0h3m12.7-5.7 2.1-2.1M4.2 19.8l2.1-2.1m12.7 0 2.1 2.1M4.2 4.2l2.1 2.1" /></>,
    money: <><circle cx="12" cy="12" r="9" /><path d="M15 9c-1-2-6-1-6 1 0 3 6 1 6 4 0 2-5 3-6 1m3-9v12" /></>,
    linkedin: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 10v7m0-11v.01M12 17v-4a3 3 0 0 1 6 0v4" /></>,
    doc: <><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" /><path d="M14 3v6h6M8 13h8M8 17h5" /></>,
    bot: <><rect x="3" y="8" width="18" height="12" rx="3" /><path d="M12 4v4m-4 6v2m8-2v2" /><circle cx="9" cy="14" r="1" /><circle cx="15" cy="14" r="1" /></>,
    eye: <><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z" /><circle cx="12" cy="12" r="3" /></>,
    folder: <path d="M3 6h7l2 2h9v11H3Z" />,
  };
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
    >
      {paths[name]}
    </svg>
  );
};

Object.assign(window, { CV_DATA, Icon });
