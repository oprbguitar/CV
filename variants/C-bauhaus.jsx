// Portada responsive — proyectos destacados + stack IA/analítica.

const themes = {
  light: {
    bg: "#FBF6EC",
    panel: "#FFF9EF",
    navy: "#041A35",
    ink: "#091326",
    muted: "#5B6472",
    line: "#E4D5BD",
    orange: "#F2A21A",
    clay: "#D6692F",
    green: "#2D8B57",
    blue: "#2E67D8",
    purple: "#5642A6",
    cream: "#FFF5DF",
    shadow: "rgba(9,19,38,.14)",
  },
  dark: {
    bg: "#071225",
    panel: "#101B31",
    navy: "#020A18",
    ink: "#FFF5DF",
    muted: "#B9C4D7",
    line: "#2A3B5D",
    orange: "#F2A21A",
    clay: "#E0785D",
    green: "#46B57B",
    blue: "#6EA0FF",
    purple: "#9A85FF",
    cream: "#FFF5DF",
    shadow: "rgba(0,0,0,.38)",
  },
};

const projectMeta = {
  "ENIA 2026-2030": {
    category: "IA pública",
    description: "Exploración visual y estratégica de la agenda nacional de inteligencia artificial.",
    impact: "Lectura rápida de prioridades, ejes y oportunidades de implementación.",
    tags: ["IA", "Política pública", "Estrategia"],
    tone: "orange",
  },
  "Demo tienda online": {
    category: "Comercio electrónico",
    description: "Demo funcional de tienda para visualizar catálogo, productos y experiencia de compra.",
    impact: "Simulación comercial lista para mostrar flujo de venta y estructura digital.",
    tags: ["E-commerce", "UX", "Demo"],
    tone: "clay",
  },
  Contrataciones: {
    category: "Gestión pública",
    description: "Mejora de procesos administrativos y consulta de información para contratación pública.",
    impact: "Reduce tiempos de lectura y facilita seguimiento de procesos.",
    tags: ["BPMN", "Procesos", "Datos"],
    tone: "navy",
  },
  "SecData Perú": {
    category: "Análisis & datos",
    description: "Visualización analítica de información para seguridad, revisión y toma de decisiones.",
    impact: "Convierte datos dispersos en señales comparables y explorables.",
    tags: ["Power BI", "SQL", "Seguridad"],
    tone: "blue",
  },
  Congreso: {
    category: "Datos legislativos",
    description: "Explorador de información legislativa para seguimiento y lectura de actividad congresal.",
    impact: "Mejora acceso a datos públicos y lectura de patrones institucionales.",
    tags: ["Congreso", "Datos", "Transparencia"],
    tone: "purple",
  },
  "Políticas SST": {
    category: "Seguridad y salud",
    description: "Sistema de gestión y control para cumplimiento normativo en seguridad y salud.",
    impact: "Ordena políticas, responsabilidades y trazabilidad documental.",
    tags: ["SST", "Cumplimiento", "Control"],
    tone: "green",
  },
  Almacenes: {
    category: "Logística",
    description: "Demo para organizar información operativa de almacenes, control y seguimiento.",
    impact: "Aporta visibilidad a inventarios, movimientos y gestión logística.",
    tags: ["Logística", "Inventario", "Gestión"],
    tone: "orange",
  },
  "Guía de procesos": {
    category: "Procesos",
    description: "Guía práctica para comprender, ordenar y mejorar procesos con enfoque simple y visual.",
    impact: "Facilita diagnóstico, estandarización y mejora continua de flujos de trabajo.",
    tags: ["Procesos", "BPMN", "Mejora"],
    tone: "green",
  },
};

const toolGroups = [
  { name: "IA & LLMs", items: ["ChatGPT", "Claude", "Gemini", "Copilot", "Perplexity", "Grok", "NotebookLM", "Ollama"] },
  { name: "Análisis & datos", items: ["Power BI", "SQL", "Excel", "SIAF", "Workspace"] },
  { name: "Automatización & dev", items: ["Codex", "App Script", "Docker", "GitHub", "Llama", "Hugging Face"] },
];

function BauhausCV() {
  const getInitialTheme = () => {
    const saved = localStorage.getItem("cv-theme");
    if (saved === "dark" || saved === "light") return saved;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };
  const [mode, setMode] = React.useState(getInitialTheme);
  const t = themes[mode];

  React.useEffect(() => {
    localStorage.setItem("cv-theme", mode);
    document.documentElement.dataset.theme = mode;
  }, [mode]);

  return (
    <div className="cv-shell" style={themeVars(t)}>
      <Topbar mode={mode} onToggle={() => setMode(mode === "dark" ? "light" : "dark")} />
      <aside className="left-column">
        <section className="profile-card">
          <img src={CV_DATA.photo} alt="Retrato profesional de Oscar Pierre Reyes Briones" />
          <div className="profile-copy">
            <h1>OSCAR <span>PIERRE</span></h1>
            <p className="role">{CV_DATA.role}</p>
            <p>{CV_DATA.summary}</p>
            <ul>
              <li><Icon name="spark" size={18} /> Enfoque estratégico</li>
              <li><Icon name="chart" size={18} /> Decisiones basadas en datos</li>
              <li><Icon name="process" size={18} /> Procesos eficientes y escalables</li>
              <li><Icon name="eye" size={18} /> Cumplimiento y confianza</li>
            </ul>
          </div>
        </section>
        <section className="skills-card">
          <h3>Habilidades de impacto</h3>
          {CV_DATA.skills.map((skill) => (
            <article key={skill.name}>
              <div><strong>{skill.name}</strong><span>{skill.impact}%</span></div>
              <i><b style={{ width: `${skill.impact}%` }} /></i>
              <p>{skill.blurb}</p>
            </article>
          ))}
        </section>
      </aside>
      <main className="main-stage">
        <section className="hero-projects">
          <div>
            <p>Proyectos implementados</p>
            <h2>PROYECTOS <span>DESTACADOS</span></h2>
            <strong>Soluciones reales con impacto en eficiencia, transparencia, comercio, datos e inteligencia artificial.</strong>
          </div>
          <Icon name="folder" size={92} />
        </section>
        <section className="project-grid">
          {CV_DATA.projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </section>
      </main>
      <aside className="right-rail">
        <DataPanel />
        <ToolsPanel />
      </aside>
    </div>
  );
}

function Topbar({ mode, onToggle }) {
  return (
    <header className="topbar">
      <div className="brand">OP-RB</div>
      <div className="top-meta">Prototipos / 2026 · <b>Lima, Perú</b></div>
      <nav>
        <a href={`mailto:${CV_DATA.email}`}><Icon name="mail" size={18} /> {CV_DATA.email}</a>
        <a href={`https://${CV_DATA.linkedin}`} target="_blank" rel="noreferrer"><Icon name="linkedin" size={18} /> LinkedIn</a>
        <button type="button" onClick={onToggle} aria-label={mode === "dark" ? "Activar modo claro" : "Activar modo oscuro"}>
          {mode === "dark" ? "☀" : "☾"} {mode === "dark" ? "Claro" : "Oscuro"}
        </button>
      </nav>
    </header>
  );
}

function ProjectCard({ project, index }) {
  const meta = projectMeta[project.name] || {};
  return (
    <a className={`project-card tone-${meta.tone || "navy"} ${project.featured ? "featured" : ""}`} href={project.url} target="_blank" rel="noreferrer">
      <div className="project-top">
        <span className="project-icon"><Icon name={project.featured ? "ai" : "folder"} size={22} /></span>
        <b>{String(index + 1).padStart(2, "0")}</b>
      </div>
      <small>{meta.category || project.area}</small>
      <h3>{project.name}</h3>
      <p>{meta.description || project.area}</p>
      <div className="impact">
        <strong>Impacto</strong>
        <span>{meta.impact || "Lectura ejecutiva y trazabilidad para la toma de decisiones."}</span>
      </div>
      <div className="tags">
        {(meta.tags || [project.area]).map((tag) => <i key={tag}>{tag}</i>)}
      </div>
    </a>
  );
}

function DataPanel() {
  return (
    <section className="data-panel">
      <div>
        <span>Datos + método</span>
        <h3>Manejo de datos con perfil sistemático</h3>
        <p>Orden, validación y trazabilidad para convertir información compleja en decisiones confiables.</p>
      </div>
      <div className="bars"><i /><i /><i /></div>
      <div className="metrics-grid">
        {CV_DATA.metrics.map((m) => <article key={m.v}><strong>{m.k}</strong><span>{m.v}</span></article>)}
      </div>
    </section>
  );
}

function ToolsPanel() {
  return (
    <section className="tools-panel">
      <h3>04 Herramientas que uso</h3>
      {toolGroups.map((group) => (
        <div className="tool-group" key={group.name}>
          <h4>{group.name}</h4>
          <div>
            {group.items.map((tool) => (
              <span key={tool}>{ToolIcons[tool]}<b>{tool}</b></span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

function themeVars(t) {
  return {
    "--bg": t.bg,
    "--panel": t.panel,
    "--navy": t.navy,
    "--ink": t.ink,
    "--muted": t.muted,
    "--line": t.line,
    "--orange": t.orange,
    "--clay": t.clay,
    "--green": t.green,
    "--blue": t.blue,
    "--purple": t.purple,
    "--cream": t.cream,
    "--shadow": t.shadow,
  };
}

Object.assign(window, { BauhausCV });
