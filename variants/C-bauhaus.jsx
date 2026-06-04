// Variación C — Bauhaus responsive.
// Diseño mobile-first con modo claro/oscuro persistente.

const themes = {
  light: {
    ivory: "#F0EADC",
    navy: "#1B2A4E",
    clay: "#C16E50",
    mustard: "#E4B046",
    ink: "#181613",
    paper: "#FCF7EB",
    line: "#D9CFB7",
    cream: "#F4ECD8",
    muted: "#6e6557",
    shadow: "rgba(27, 42, 78, .18)",
  },
  dark: {
    ivory: "#111827",
    navy: "#071225",
    clay: "#E0785D",
    mustard: "#F4C95D",
    ink: "#F8EFD8",
    paper: "#182238",
    line: "#31405F",
    cream: "#FFF3D7",
    muted: "#B9C0D2",
    shadow: "rgba(0, 0, 0, .36)",
  },
};

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

  const toggleTheme = () => setMode((value) => (value === "dark" ? "light" : "dark"));

  return (
    <div
      className="bauhaus-cv"
      style={{
        "--ivory": t.ivory,
        "--navy": t.navy,
        "--clay": t.clay,
        "--mustard": t.mustard,
        "--ink": t.ink,
        "--paper": t.paper,
        "--line": t.line,
        "--cream": t.cream,
        "--muted": t.muted,
        "--shadow": t.shadow,
      }}
    >
      <Topbar mode={mode} onToggleTheme={toggleTheme} />
      <PhotoBlock />
      <HeroBlock />
      <MetricsBlock />
      <NormaFlowBlock />
      <SkillsBlock />
      <ProjectsBlock />
      <ToolsBlock />
    </div>
  );
}

function Topbar({ mode, onToggleTheme }) {
  return (
    <header className="topbar">
      <div className="brand">
        OP<span>·</span>RB
      </div>
      <div className="topline" />
      <div className="kicker">
        Prototipos / 2026 <b>Lima, Perú</b>
      </div>
      <div className="top-actions">
        <button
          className="theme-toggle"
          type="button"
          onClick={onToggleTheme}
          aria-label={mode === "dark" ? "Activar modo claro" : "Activar modo oscuro"}
          aria-pressed={mode === "dark"}
        >
          {mode === "dark" ? "☀" : "☾"}
          <span>{mode === "dark" ? "Claro" : "Oscuro"}</span>
        </button>
        <a href={`mailto:${CV_DATA.email}`} className="top-link">
          <Icon name="mail" size={16} /> <span>{CV_DATA.email}</span>
        </a>
        <a href={`https://${CV_DATA.linkedin}`} target="_blank" rel="noreferrer" className="top-link">
          <Icon name="linkedin" size={16} /> <span>LinkedIn</span>
        </a>
      </div>
    </header>
  );
}

function PhotoBlock() {
  return (
    <section className="photo-block">
      <span className="photo-orbit" />
      <img src={CV_DATA.photo} alt="Retrato profesional de Oscar Pierre Reyes Briones" />
    </section>
  );
}

function HeroBlock() {
  return (
    <section className="hero-block">
      <span className="hero-bar" />
      <p className="eyebrow">Portafolio · Vol. 02</p>
      <h1>
        OSCAR <span>PIERRE</span>
      </h1>
      <p className="role-line">
        {CV_DATA.role} · {CV_DATA.taglineBits.join(" · ")}
      </p>
      <p className="hero-summary">{CV_DATA.summary}</p>
      <strong className="watermark">01</strong>
    </section>
  );
}

function MetricsBlock() {
  return (
    <section className="metrics-block">
      <article className="data-profile-card">
        <div>
          <span>Datos + método</span>
          <h2>Manejo de datos con perfil sistemático</h2>
          <p>Orden, validación, trazabilidad y lectura analítica para convertir información compleja en decisiones confiables.</p>
        </div>
        <div className="data-pulse" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
      </article>
      {CV_DATA.metrics.map((m, i) => (
        <article key={m.v} className={`metric metric-${i}`}>
          <strong>{m.k}</strong>
          <span>{m.v}</span>
        </article>
      ))}
    </section>
  );
}

function NormaFlowBlock() {
  return (
    <a className="norma-block" href={CV_DATA.flagship.url} target="_blank" rel="noreferrer">
      <span className="norma-stripe" />
      <div className="norma-copy">
        <p className="eyebrow">★ Proyecto insignia · Experimento 2026</p>
        <h2>
          NORMAFLOW <span>AI</span>
        </h2>
        <p>
          {CV_DATA.flagship.pitch} — redacta, valida y normaliza{" "}
          <strong>TDR, EETT, SST y bases</strong> contra normativa vigente.
        </p>
        <div className="doc-tags">
          {CV_DATA.flagship.docs.map((d) => (
            <span key={d}>{d}</span>
          ))}
        </div>
      </div>
      <div className="ai-mark">
        <strong>AI</strong>
        <span>
          Ver experimento <Icon name="arrowUp" size={14} />
        </span>
      </div>
    </a>
  );
}

function SkillsBlock() {
  return (
    <section className="skills-block panel-block">
      <BauhausHead num="02" title="Habilidades de impacto" accent="var(--clay)" />
      <div className="skills-grid">
        {CV_DATA.skills.map((s, i) => (
          <article key={s.name} className="skill-card">
            <div className="skill-top">
              <h3>{s.name}</h3>
              <strong>
                {s.impact}
                <span>%</span>
              </strong>
            </div>
            <div className="skill-track">
              <i style={{ width: `${s.impact}%`, background: i % 2 === 0 ? "var(--clay)" : "var(--navy)" }} />
            </div>
            <p>{s.blurb}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProjectsBlock() {
  return (
    <section className="projects-block">
      <BauhausHead num="03" title="Simulación de datos" accent="var(--mustard)" inverted />
      <div className="projects-list">
        {CV_DATA.projects.map((p, i) => (
          <a key={p.name} href={p.url} target="_blank" rel="noreferrer">
            <span>0{i + 1}</span>
            <strong>{p.name}</strong>
            <em>{p.area}</em>
            <b>→</b>
          </a>
        ))}
      </div>
    </section>
  );
}

function ToolsBlock() {
  return (
    <section className="tools-block">
      <BauhausHead num="04" title="Stack diario" accent="var(--mustard)" inverted />
      <div className="tools-grid">
        {CV_DATA.tools.map((tool) => (
          <article key={tool}>
            <div>{ToolIcons[tool]}</div>
            <span>{tool}</span>
          </article>
        ))}
      </div>
      <p className="available">
        <i /> Disponible para nuevos proyectos
      </p>
    </section>
  );
}

function BauhausHead({ num, title, accent, inverted }) {
  return (
    <div className={`section-head ${inverted ? "inverted" : ""}`}>
      <span style={{ color: accent }}>{num}</span>
      <strong>{title}</strong>
      <i style={{ background: accent }} />
    </div>
  );
}

Object.assign(window, { BauhausCV });
